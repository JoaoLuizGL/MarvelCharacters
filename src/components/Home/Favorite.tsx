import { useState } from "react";
import { MdStar } from "react-icons/md";
import classes from "./Favorite.module.css";

const Favorite = () => {
    const [favorite, setFavorite] = useState(false);

    return (
        <div onClick={() => setFavorite(!favorite)}>
            {!favorite ?
                <div className={classes.starDefault}>
                    <MdStar />
                </div>
                :
                <div className={classes.starFavorite}>
                    <MdStar />
                </div>
            }
        </div>
    );
}

export default Favorite;