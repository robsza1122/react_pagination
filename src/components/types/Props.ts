export type Page = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};