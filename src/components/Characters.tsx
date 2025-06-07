import Character from './Character';
import classes from './Characters.module.css';
import type { CharactersListProps } from '../types/Characters.tsx';
import Pag from './Pag.tsx';

const Characters = ({ characters }: CharactersListProps) => {
    return (
        <div className={classes.charactersContainer}>
            <div className={classes.charactersList}>
                {characters.filter(Character => Character.total > 0).map(character => (
                    <Character
                        id={character.id}
                        name={character.name}
                        description={character.description}
                        image={character.image}
                        comics={character.comics}
                        series={character.series}
                        stories={character.stories}
                        events={character.events}
                        total={character.total}
                    />
                ))}
            </div>
            <div className={classes.pagination}>
                <Pag />
            </div>
        </div>
    );
};

export default Characters;