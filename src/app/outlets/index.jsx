import React from 'react';
import styled from 'styled-components';
import { pink } from '@q/colors';
import { io } from 'socket.io-client';
import { Container } from '@q/styles';
import { getOutlets } from './api';
import PowerControllers from './components/PowerControllers';
// ----------------------------------
// HELPERS
// ----------------------------------
const socket = io('http://localhost:4040');
// ----------------------------------
// STYLES
// ----------------------------------
const OutletControls = styled(Container)`
  border-color: ${pink};
  display: flex;
  flex-grow: 1;
  margin: 0 15px;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
const Outlets = () => {
  const [outlets, setOutlets] = React.useState(null);
  React.useEffect(() => {
    async function fetchOutlets() {
      setOutlets(await getOutlets());
    }
    fetchOutlets();
    socket.on('/outlets', setOutlets);
  }, []);

  return (
    <OutletControls>
      <PowerControllers outlets={outlets} />
    </OutletControls>
  );
}

export default Outlets;
