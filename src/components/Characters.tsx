import Character from './Character';
import classes from './Characters.module.css';
import type { CharactersListProps } from '../types/Characters.tsx';

const Characters = ({ characters }: CharactersListProps) => {
    return (
        <div className={classes.charactersList}>
            {characters.map(character => (
                <Character
                    id={character.id}
                    name={character.name}
                    description={character.description}
                    image={character.image}
                    comics={character.comics}
                    series={character.series}
                    stories={character.stories}
                    events={character.events}
                />
            ))}
        </div>
    );
};

export default Characters;