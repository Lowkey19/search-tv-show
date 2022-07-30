import React, { FunctionComponent, useState, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';

import { assignSearchKeyWord } from '../api/tvShow';
import SearchField from '../components/SearchField';
import ShowList from '../components/ShowList';
import TvShowContext from '../providers/tvShows';

const HomeView: FunctionComponent<RouteComponentProps> = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(TvShowContext);

  const handleChange = (s: string) => {
    setValue(s);
  };

  const handleEnterPress = () => {
    assignSearchKeyWord(value, dispatch);
  };
  
  return (
    <>
      <SearchField onChange={handleChange} onEnterPress={handleEnterPress} />
      <ShowList />
    </>
  );
};

export default HomeView;