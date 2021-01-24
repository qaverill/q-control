import React from 'react';
import styled from 'styled-components';
import { dark, orange } from '@q/colors';
import { io } from 'socket.io-client';
import { getOutlets } from './api';
import PowerControllers from './components/PowerControllers';
// ----------------------------------
// HELPERS
// ----------------------------------
const socket = io('http://localhost:4040');
// ----------------------------------
// STYLES
// ----------------------------------
const Border = styled.div`
  background-color: ${dark};
  border: 5px solid ${orange};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function Outlets() {
  const [outlets, setOutlets] = React.useState(null);
  React.useEffect(() => {
    async function fetchOutlets() {
      setOutlets(await getOutlets());
    }
    fetchOutlets();
    socket.on('/kasa', setOutlets);
  }, []);

  return (
    <Border>
      { outlets && <PowerControllers outlets={outlets} /> }
    </Border>
  );
}
