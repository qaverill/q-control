import React from 'react';
import styled from 'styled-components';
import colors from '@q/colors';
import { getLights } from './api';

const Border = styled.div`
  background-color: ${colors.dark};
  border: 5px solid ${colors.color2};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;

export default function Lights() {
  const [lights, setLights] = React.useState(null);
  React.useEffect(() => {
    async function fetchLights() {
      setLights(await getLights());
    }
    fetchLights();
  }, []);
  console.log(lights)
  return (
    <Border>
      Lights
    </Border>
  );
};
