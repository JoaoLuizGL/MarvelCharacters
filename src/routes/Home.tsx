import { useState, useEffect } from "react";
import Search from "../components/Search";
import Characters from "../components/Characters";
import type { CharacterProps } from "../types/Character";
import Error from "../components/Error";


const limit = 40;

const Home: React.FC = () => {
    const [allCharacters, setAllCharacters] = useState<CharacterProps[]>([]);
    const [characters, setCharacters] = useState<CharacterProps[]>([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        loadCharacters();
    }, [offset]);

    const loadCharacters = async () => {
        setError(false);
        setCharacters([]);
        setAllCharacters([]);

        const res = await fetch(
            `https://gateway.marvel.com/v1/public/characters?ts=jonas&apikey=81272e1a0b9f8a98fa9dd90f785074a9&hash=907952132a795d15f7da63aa81a561f1&limit=${limit}&offset=${offset}`
        );
        const dados = await res.json();

        if (res.status !== 200) {
            setError(true);
            setErrorMessage(`Error ${res.status}: ${dados.message}`);
            return;
        }

        setTotal(dados.data.total);

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

        setAllCharacters(charactersData);
        setCharacters(charactersData);
    };

    const filterCharacters = (search: string) => {
        if (!search) {
            setCharacters(allCharacters);
        } else {
            setCharacters(
                allCharacters.filter(char =>
                    char.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    };

    // Paginação
    const currentPage = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setOffset((page - 1) * limit);
    };

    return (
        <div>
            <Search onSearch={filterCharacters} />
            <Characters
                characters={characters}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <Error message={errorMessage}/>
        </div>
    );
};

export default Home;