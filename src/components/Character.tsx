import classes from './Character.module.css';
import type { CharacterProps } from '../types/Character';

const Character = ({
    name,
    description,
    image,
    comics,
    series,
    stories,
    events
}: CharacterProps) => {
    return (
        <div className={classes.character}
        onClick={() => {
            window.open(`https://www.marvel.com/characters/${name.toLowerCase().replace(/\s+/g, '-')}`, '_blank');}}>
            <h2 title={name}>{name}</h2>
            {image && (
                <img
                    src={image}
                    alt={name}
                    className={classes.image}
                />
            )}
            <p title={description}>{description}</p>
            <div className={classes.stats}>
                <div>
                    <strong>Comics:</strong> {comics}
                </div>
                <div>
                    <strong>Series:</strong> {series}
                </div>
                <div>
                    <strong>Stories:</strong> {stories}
                </div>
                <div>
                    <strong>Events:</strong> {events}
                </div>
            </div>
        </div>
    );
};

export default Character;