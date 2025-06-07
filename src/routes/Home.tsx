import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Characters from "../components/Characters"; // Make sure this exists
import type { CharacterProps } from "../types/Character";

const Home: React.FC = () => {
    const { userName } = useParams<{ userName: string }>();
    const [allCharacters, setAllCharacters] = useState<CharacterProps[]>([]);
    const [characters, setCharacters] = useState<CharacterProps[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = async () => {
        setError(false);
        setCharacters([]);
        setAllCharacters([]);

        const res = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=jonas&apikey=81272e1a0b9f8a98fa9dd90f785074a9&hash=907952132a795d15f7da63aa81a561f1`);
        const dados = await res.json();

        if (res.status !== 200) {
            setError(true);
            return;
        }

        const charactersData: CharacterProps[] = dados.data.results.map((character: any) => ({
            id: character.id,
            name: character.name,
            description: character.description || 'No description available',
            image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            comics: character.comics.available,
            series: character.series.available,
            stories: character.stories.available,
            events: character.events.available
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

    return (
        <div>
            <Search onSearch={filterCharacters} />
            <Characters characters={characters} />
            {/* {error && <Error/>} */}
        </div>
    );
};

export default Home;