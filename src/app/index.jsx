import React from 'react';
import styled from 'styled-components';
import colors from '@q/colors';
import Lights from './lights';
import Plugs from './plugs';

const Border = styled.div`
  height: 100%;
  background-color: ${colors.dark};
  border: 5px solid ${colors.color1};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;

export default function App() {
  return (
    <Border>
      <Lights />
      <Plugs />
    </Border>
  );
}
