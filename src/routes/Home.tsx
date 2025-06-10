import { useState, useEffect } from "react";
import Search from "../components/Search";
import Characters from "../components/Characters";
import type { CharacterProps } from "../types/Character";
import Error from "../components/Error";
import MarvelLoading from "../components/Loading"; // 👈 importando o loading animado

const limit = 100;

const Home: React.FC = () => {
    const [allCharacters, setAllCharacters] = useState<CharacterProps[]>([]);
    const [characters, setCharacters] = useState<CharacterProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAllCharacters();
    }, []);

    useEffect(() => {
        paginateCharacters(allCharacters, currentPage);
    }, [allCharacters, currentPage]);

    const fetchAllCharacters = async () => {
        setError(false);
        setLoading(true);
        let all: CharacterProps[] = [];
        let offset = 0;
        let total = 0;
        try {
            do {
                const res = await fetch(
                    `https://gateway.marvel.com/v1/public/characters?ts=jonas&apikey=81272e1a0b9f8a98fa9dd90f785074a9&hash=907952132a795d15f7da63aa81a561f1&limit=${limit}&offset=${offset}`
                );
                const dados = await res.json();
                if (res.status !== 200) {
                    setError(true);
                    setErrorMessage(`Error ${res.status}: ${dados.message}`);
                    setLoading(false);
                    return;
                }
                total = dados.data.total;
                const charactersData: CharacterProps[] = dados.data.results.map((character: any) => ({
                    id: character.id,
                    name: character.name,
                    description: character.description || (`No description available for ${character.name}`),
                    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                    comics: character.comics.available,
                    series: character.series.available,
                    stories: character.stories.available,
                    events: character.events.available,
                    totalMedia: character.comics.available + character.series.available + character.stories.available + character.events.available
                }));
                all = all.concat(charactersData);
                offset += limit;
            } while (all.length < total);
            setAllCharacters(all);
            setTotalPages(Math.ceil(all.length / limit));
            setCurrentPage(1);
        } catch (e) {
            setError(true);
            setErrorMessage("Erro ao buscar personagens.");
        }
        setLoading(false);
    };

    const paginateCharacters = (charactersArr: CharacterProps[], page: number) => {
        const start = (page - 1) * limit;
        const end = start + limit;
        setCharacters(charactersArr.slice(start, end));
    };

    const filterCharacters = (search: string) => {
        if (!search) {
            setTotalPages(Math.ceil(allCharacters.length / limit));
            setCurrentPage(1);
            paginateCharacters(allCharacters, 1);
        } else {
            const filtered = allCharacters.filter(char =>
                char.name.toLowerCase().includes(search.toLowerCase())
            );
            setTotalPages(Math.ceil(filtered.length / limit));
            setCurrentPage(1);
            paginateCharacters(filtered, 1);
        }
    };

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
    loading ? (
        <MarvelLoading />
    ) : (
        <>
        <Search onSearch={filterCharacters} />
        <Characters
            characters={characters}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
        </>
    )
    );
};

export default Home;
