import { Actions, TvShowState, TvShowTypes } from "./types";

export function tvShow(state: TvShowState, action: TvShowTypes): TvShowState {
  switch (action.type) {
    case Actions.GET_TV_SHOWS_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.GET_TV_SHOWS_FULFILLED: {
      return {
        ...state,
        tvShowList: action.payload,
        isLoading: false,
      }
    }
    case Actions.GET_TV_SHOWS_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case Actions.GET_TV_SHOW_BY_ID_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.GET_TV_SHOW_BY_ID_FULFILLED: {
      return {
        ...state,
        selectedTvShow: action.payload,
        isLoading: false,
      }
    }
    case Actions.GET_TV_SHOW_BY_ID_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case Actions.SEARCH_TV_SHOWS_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.SEARCH_TV_SHOWS_FULFILLED: {
      return {
        ...state,
        tvShowList: action.payload,
        isLoading: false,
      }
    }
    case Actions.SEARCH_TV_SHOWS_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case Actions.ASSIGN_SEARCH_KEY_WORD_ACTION: {
      return {
        ...state,
        searchKeyword: action.payload,
      }
    }
    default:
      return state;
  }
}