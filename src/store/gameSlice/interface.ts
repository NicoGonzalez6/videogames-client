export interface Igame {
  id: number;
  name: string;
  users_score: string;
  critics_score: string;
  release_date: string;
  image_url: string;
  description: string;
  type: string;
}

export interface IinitialState {
  isLoading: boolean;
  games: undefined | Igame[];
  totalGames: undefined | number;
  currentPage: undefined | number;
  totalPages: undefined | number;
  isError: boolean;
  game: undefined | Igame;
}
