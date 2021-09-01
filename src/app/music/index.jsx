import React from 'react';
import styled from 'styled-components';
import { orange } from '@q/colors';
import { Container } from '@q/styles';
// ----------------------------------
// STYLES
// ----------------------------------
const MusicContainer = styled(Container)`
  border-color: ${orange};
  flex-grow: 1;
`;
const AlbumCover = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
export function TopArtist() {
  return (
    <MusicContainer>
      <AlbumCover url="https://i.scdn.co/image/5304b283fbd91f377a08ebdf140b97348e348758" />
    </MusicContainer>
  );
}
export function TopAlbum() {
  return (
    <MusicContainer>
      <AlbumCover url="https://i.scdn.co/image/ab67616d00001e02a3c8fa22296801ed0a955d38" />
    </MusicContainer>
  );
}
