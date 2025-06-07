import Character from './Character';
import classes from './Characters.module.css';
import type { CharactersProps } from '../types/Characters.tsx';
import Pag from './Pag.tsx';

const Characters = ({ characters, currentPage, totalPages, onPageChange}: CharactersProps) => {

    return (
        <div className={classes.charactersContainer}>
            <div className={classes.charactersList}>
                {characters.filter(Character => Character.totalMedia > 0).map(character => (
                    <Character
                        id={character.id}
                        name={character.name}
                        description={character.description}
                        image={character.image}
                        comics={character.comics}
                        series={character.series}
                        stories={character.stories}
                        events={character.events}
                        totalMedia={character.totalMedia}
                    />
                ))}
            </div>
            <div className={classes.pagination}>
                <Pag 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default Characters;