import { Dispatch, createContext } from 'react';
import { ITvShow, TvShowState, TvShowTypes } from '../api/tvShow/types'

interface ITvShowContext {
  store: TvShowState;
  dispatch: Dispatch<TvShowTypes>;
}

export const defaultState: ITvShowContext = {
  store: {
    tvShowList: [],
    selectedTvShow: {} as ITvShow,
    isLoading: false,
    searchKeyword: '',
  },
  dispatch: (tvShow: TvShowTypes): void => {},
}

const TvShowContext = createContext(defaultState);

export default TvShowContext;