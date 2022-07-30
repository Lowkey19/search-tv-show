import React, { ChangeEvent, KeyboardEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import SearchIcon from '../assets/searchIcon.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const SearchBar = styled.input`
  width: 250px;
  height: 30px;
  padding-left: 42px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 10px;
  outline: none;
  border-radius: 17px;
  border: 1px solid gray;

`;

interface Props {
  onChange?: (s: string) => void;
  onEnterPress?: () => void;
}

const SearchField: FunctionComponent<Props> = ({ onChange, onEnterPress }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (typeof onChange === 'function') onChange(e.target.value);
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (typeof onEnterPress === 'function') onEnterPress();
    }
  }

  return (
    <Container>
      <SearchBar
        type={'text'}
        value={searchText}
        placeholder={'Search TV Shows'}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Container>
  )
}

export default SearchField;