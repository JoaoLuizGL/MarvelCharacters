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
        <div className={classes.character}>
            <h2>{name}</h2>
            {image && (
                <img
                    src={image}
                    alt={name}
                    className={classes.image}
                />
            )}
            {description && <p>{description}</p>}
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