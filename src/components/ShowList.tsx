import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTvShowList, searchTvShow } from '../api/tvShow';
import TvShowContext from '../providers/tvShows';
import TvShowCards from './TvShowCards';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ShowList: FunctionComponent = () => {
  const { store, dispatch } = useContext(TvShowContext);
  const [tvShows, setTvShows] = useState(store.tvShowList);

  useEffect(() => {
    getTvShowList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setTvShows(store.tvShowList);
  }, [store.tvShowList]);

  useEffect(() => {
    if (store.searchKeyword === '') getTvShowList(dispatch);
    else searchTvShow(store.searchKeyword, dispatch)
  }, [store.searchKeyword, dispatch]);

  return (
    <Container>
      {tvShows.map((show, key) => {
        return (
          <TvShowCards key={key} show={show} />
        )
      })}
    </Container>
  )
}

export default ShowList