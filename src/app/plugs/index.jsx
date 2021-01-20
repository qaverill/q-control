import React from 'react';
import styled from 'styled-components';
import { dark, color3 } from '@q/colors';

const Border = styled.div`
  background-color: ${dark};
  border: 5px solid ${color3};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;

export default function Plugs() {
  return (
    <Border>
      Plugs
    </Border>
  );
}
