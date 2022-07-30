import { Dispatch, useReducer } from 'react';

import { api } from '../../helpers/api';
import { defaultState } from '../../providers/tvShows';
import { tvShow } from './reducers';
import { Actions, ITvShow, TvShowState, TvShowTypes } from './types';

const initialState: TvShowState = defaultState.store;

export const useTvShow = (): [TvShowState, Dispatch<TvShowTypes>] => {
  const [state, dispatch] = useReducer(tvShow, initialState);
  return [state, dispatch];
}

export async function getTvShowList(dispatch: Dispatch<TvShowTypes>): Promise<void> {
  dispatch({ type: Actions.GET_TV_SHOWS_START, payload: undefined });
  try {
    const { data } = await api({
      url: '/shows',
      method: 'get',
    });

    dispatch({ type: Actions.GET_TV_SHOWS_FULFILLED, payload: data });
  } catch (e) {
    dispatch({ type: Actions.GET_TV_SHOWS_REJECTED, payload: undefined });
  }
}

export async function getTvShow(id: string, dispatch: Dispatch<TvShowTypes>): Promise<void> {
  dispatch({ type: Actions.GET_TV_SHOW_BY_ID_START, payload: id });
  try {
    const { data } = await api({
      url: `/shows/${id}`,  
      method: 'get',
    });

    dispatch({ type: Actions.GET_TV_SHOW_BY_ID_FULFILLED, payload: data });
  } catch (e) {
    dispatch({ type: Actions.GET_TV_SHOW_BY_ID_REJECTED, payload: undefined });
  }
}

export async function searchTvShow(s: string, dispatch: Dispatch<TvShowTypes>): Promise<void> {
  dispatch({ type: Actions.SEARCH_TV_SHOWS_START, payload: s });
  try {
    const { data } = await api({
      url: `/search/shows?q=${s}`,
      method: 'get',
    });

    const tvShows: ITvShow[] = data.map((d: any) => { return d.show });
    
    dispatch({ type: Actions.SEARCH_TV_SHOWS_FULFILLED, payload: tvShows });
  } catch (e) {
    dispatch({ type: Actions.SEARCH_TV_SHOWS_REJECTED, payload: undefined });
  }
}

export function assignSearchKeyWord(s: string, dispatch: Dispatch<TvShowTypes>): void {
  dispatch({ type: Actions.ASSIGN_SEARCH_KEY_WORD_ACTION, payload: s });
}