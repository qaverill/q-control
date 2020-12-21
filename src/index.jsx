import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import colors from '@q/colors';

const RootContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: ${colors.dark};
  border: 5px solid ${colors.color1};
  border-radius: 15px 15px 15px 15px;
`;

const Root = () => {
  return (
    <RootContainer>
      <h2>hey</h2>
    </RootContainer>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
