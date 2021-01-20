import React from 'react';
import styled from 'styled-components';
import { dark, color1 } from '@q/colors';
import Lights from './lights';
import Plugs from './plugs';
// ----------------------------------
// STYLES
// ----------------------------------
const Border = styled.div`
  height: 100%;
  background-color: ${dark};
  border: 5px solid ${color1};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function App() {
  return (
    <Border>
      <Lights />
      <Plugs />
    </Border>
  );
}
