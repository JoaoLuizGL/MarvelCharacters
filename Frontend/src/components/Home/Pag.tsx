import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import classes from './Pag.module.css';
import type {PagProps} from '../types/Pag';


const Pag: React.FC<PagProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={classes.pagination}>
            <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
                <FaAngleDoubleLeft />
            </button>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <FaAngleLeft />
            </button>
            <span>Página {currentPage} de {totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <FaAngleRight />
            </button>
            <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
                <FaAngleDoubleRight />
            </button>
        </div>
    );
};

export default Pag;