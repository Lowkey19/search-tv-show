export interface Action<T, P extends unknown = undefined> {
  payload: P extends infer Q ? Q : undefined;
  type: T;
}

export enum Actions {
  GET_TV_SHOWS_START = "@tvShow/GET_TV_SHOWS_START",
  GET_TV_SHOWS_FULFILLED = "@tvShow/GET_TV_SHOWS_FULFILLED",
  GET_TV_SHOWS_REJECTED = "@tvShow/GET_TV_SHOWS_REJECTED",
  GET_TV_SHOW_BY_ID_START = "@tvShow/GET_TV_SHOW_BY_ID_START",
  GET_TV_SHOW_BY_ID_FULFILLED = "@tvShow/GET_TV_SHOW_BY_ID_FULFILLED",
  GET_TV_SHOW_BY_ID_REJECTED = "@tvShow/GET_TV_SHOW_BY_ID_REJECTED",
  ASSIGN_SEARCH_KEY_WORD_ACTION = "@tvShow/ASSIGN_SEARCH_KEY_WORD_ACTION",
  SEARCH_TV_SHOWS_START = "@tvShow/SEARCH_TV_SHOWS_START",
  SEARCH_TV_SHOWS_FULFILLED = "@tvShow/SEARCH_TV_SHOWS_FULFILLED",
  SEARCH_TV_SHOWS_REJECTED = "@tvShow/SEARCH_TV_SHOWS_REJECTED",
}

export type Rate = {
  average: number;
}

export type ImageType = {
  medium: string;
  original: string;
}

export interface ITvShow {
  id: string;
  name: string;
  rating: Rate;
  summary: string;
  image: ImageType;
}

export type TvShowState = {
  tvShowList: ITvShow[];
  selectedTvShow: ITvShow;
  isLoading: boolean;
  searchKeyword: string;
}

type GetTvShowsRequest = Action<typeof Actions.GET_TV_SHOWS_START>;
type GetTvShowsAction = Action<typeof Actions.GET_TV_SHOWS_FULFILLED, ITvShow[]>;
type GetTvShowsError = Action<typeof Actions.GET_TV_SHOWS_REJECTED>;

type GetTvShowByIdRequest = Action<typeof Actions.GET_TV_SHOW_BY_ID_START, string>;
type GetTvShowByIdAction = Action<typeof Actions.GET_TV_SHOW_BY_ID_FULFILLED, ITvShow>;
type GetTvShowByIdError = Action<typeof Actions.GET_TV_SHOW_BY_ID_REJECTED>;

type AssignSearchKeyWordAction = Action<typeof Actions.ASSIGN_SEARCH_KEY_WORD_ACTION, string>;

type SearchTvShowsRequest = Action<typeof Actions.SEARCH_TV_SHOWS_START, string>;
type SearchTvShowsAction = Action<typeof Actions.SEARCH_TV_SHOWS_FULFILLED, ITvShow[]>;
type SearchTvShowsError = Action<typeof Actions.SEARCH_TV_SHOWS_REJECTED>;

export type TvShowTypes = GetTvShowsRequest | GetTvShowsAction | GetTvShowsError | SearchTvShowsRequest | SearchTvShowsAction | SearchTvShowsError | AssignSearchKeyWordAction | GetTvShowByIdRequest | GetTvShowByIdAction | GetTvShowByIdError;