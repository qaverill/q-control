import React from 'react';
import styled from 'styled-components';
import { dark, purple } from '@q/colors';
import Lights from './lights';
import Outlets from './outlets';
// ----------------------------------
// STYLES
// ----------------------------------
const Border = styled.div`
  height: 100%;
  background-color: ${dark};
  border: 5px solid ${purple};
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
      <Outlets />
    </Border>
  );
}
