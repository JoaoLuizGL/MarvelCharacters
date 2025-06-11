import type { CharacterProps } from './Character.tsx';

type CharactersListProps = {
    characters: CharacterProps[];
};

export type CharactersProps = CharactersListProps & {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}