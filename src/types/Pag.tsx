export type PagProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};