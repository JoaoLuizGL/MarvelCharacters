import { useState, useRef } from "react";
import classes from './Search.module.css';

type SearchProps = {
    onSearch: (search: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
    const [search, setSearch] = useState("");
    const debounceRef = useRef<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = window.setTimeout(() => {
            onSearch(value);
        }, 200);
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um personagem:</h2>
            <div className={classes.searchContainer}>
                <input
                    type="text"
                    placeholder="Digite o nome do personagem"
                    value={search}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Search;