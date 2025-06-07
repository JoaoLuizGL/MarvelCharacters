import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import classes from './Pag.module.css';

const Pag: React.FC = () => {
    return (
        <div className={classes.pagination}>
            <button>
                <FaAngleDoubleLeft />
            </button>
            <button>
                <FaAngleLeft />
            </button>
            <span>Página 1 de 10</span>
            <button>
                <FaAngleRight />
            </button>
            <button>
                <FaAngleDoubleRight />
            </button>
        </div>
    );
};

export default Pag;