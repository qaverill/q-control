import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import App from './app';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Root = () => (
  <RootContainer>
    <ReactTooltip />
    <App />
  </RootContainer>
);

ReactDOM.render(<Root />, document.getElementById('root'));
