import React, { FunctionComponent, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { Typography } from '@mui/material';

import { getTvShow } from '../api/tvShow';
import TvShowContext from '../providers/tvShows';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const StyledImage = styled.img`
  height: 600px;
`;

const DetailsContainer = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  > p {
    font-weight: bold;
    font-size: 50px;
  }
`;

const Rating = styled.div`
  > p {
    font-size: 25px;
  }
`;

const SummaryContainer = styled.div`
  font-size: 25px;
  margin: 10px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface Props extends RouteComponentProps {
  id?: string;
}

const TvShowView: FunctionComponent<Props> = (props: Props) => {
  const { id } = props;
  const { store, dispatch } = useContext(TvShowContext);
  const [tvShow, setTvShow] = useState(store.selectedTvShow);

  useEffect(() => {
    if (id) getTvShow(id, dispatch)
  }, [id, dispatch])

  useEffect(() => {
    setTvShow(store.selectedTvShow);
  }, [store.selectedTvShow])

  return (
    <Container>
      <StyledImage src={tvShow.image?.original || ''} />
      <DetailsContainer>
        <Title>
          <Typography>{tvShow.name}</Typography>
        </Title>
        <Rating>
          {tvShow.rating?.average ? (<Typography>Rating: {tvShow.rating?.average} / 10</Typography>) : (<Typography>No rating yet</Typography>) }
        </Rating>
        <SummaryContainer dangerouslySetInnerHTML={{__html: tvShow.summary}} />
      </DetailsContainer>
    </Container>
  )
}

export default TvShowView;