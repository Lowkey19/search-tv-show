import React from 'react';
import { Router } from '@reach/router';

import MainView from './views/HomeView';
import TvShowView from './views/TvShowView';
import TvShowContext from './providers/tvShows';
import { useTvShow } from './api/tvShow';

function App() {
  const [tvShow, tvShowDispatch] = useTvShow();

  return (
    <TvShowContext.Provider value={{ store: { ...tvShow }, dispatch: tvShowDispatch }}>
      <Router basepath="/">
        <MainView path="/" />
        <TvShowView path="/:id" />
      </Router>
    </TvShowContext.Provider>
  );
}

export default App;
