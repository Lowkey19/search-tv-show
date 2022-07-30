import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Link } from '@reach/router';

import { ITvShow } from '../api/tvShow/types';

const Container = styled.div`
  display: flex;
  height: 200px;
  width: 590px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 20px;
`;

const Title = styled.div`
  > p {
    font-weight: bold;
  }
`;

const DetailsContainer = styled.div`
  padding: 20px;
`;

const SummaryContainer = styled.div`
  height: 80px;
  margin: 10px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StyledImage = styled.img`
  height: 200px;
`;

interface Props {
  show: ITvShow;
}

const TvShowCards: FunctionComponent<Props> = ({ show }) => {
  const { id, image, name, rating, summary } = show;

  return (
      <Container>
        <StyledImage src={image?.medium || ''} />
        <DetailsContainer>
          <Link to={`/${id}`}>
            <Title>
              <Typography>{name}</Typography>
            </Title>
          </Link>
          {rating.average ? (<Typography>Rating: {rating.average} / 10</Typography>) : (<Typography>No rating yet</Typography>) }
          <SummaryContainer dangerouslySetInnerHTML={{__html: summary}} />
        </DetailsContainer>
      </Container>
  )
}

export default TvShowCards;