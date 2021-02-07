import React from 'react';
import styled from 'styled-components';
import { purple } from '@q/colors';
import { Container } from '@q/styles';
import Lights from './lights';
import Outlets from './outlets';
import { TopAlbum, TopArtist } from './music';
// ----------------------------------
// STYLES
// ----------------------------------
const Border = styled(Container)`
  border-color: ${purple};
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const TopHalf = styled.div`
  display: flex;
  flex-grow: 2;
  margin-bottom: 15px;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function App() {
  return (
    <Border>
      <TopHalf>
        <TopArtist />
        <Outlets />
        <TopAlbum />
      </TopHalf>
      <Lights />
    </Border>
  );
}
