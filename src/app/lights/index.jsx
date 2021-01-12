import React from 'react';
import styled from 'styled-components';
import colors from '@q/colors';

const Border = styled.div`
  background-color: ${colors.dark};
  border: 5px solid ${colors.color2};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;

export default function Lights() {
  return (
    <Border>
      Lights
    </Border>
  );
};