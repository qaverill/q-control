import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import backgrounds from '../outlets';
import { putOutlet } from '../api';
// ----------------------------------
// STYLES
// ----------------------------------
const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const OutletToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  font-size: 200px;
  cursor: pointer;
  border-radius: 50%;
  border: 5px solid ${(props) => (props.isActive ? 'white' : 'black')};
  height: 250px;
  width: 250px;
  background: ${(props) => backgrounds[props['data-tip']]};
`;
// ----------------------------------
// HELPERS
// ----------------------------------
const determineStates = (outlets) => {
  const states = {};
  outlets.forEach((outlet) => {
    states[outlet.alias] = outlet.on_time > 0;
  });
  return states;
};
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function PowerControllers(props) {
  const { outlets } = props;
  const states = determineStates(outlets);
  async function setOutletState(outlet) {
    await putOutlet({ outlet, state: states[outlet] ? 'off' : 'on' });
  }
  return (
    <Controllers>
      {R.keys(states).map((outlet) => (
        <OutletToggle
          key={outlet}
          data-tip={outlet}
          isActive={states[outlet]}
          onClick={() => setOutletState(outlet)}
        />
      ))}
    </Controllers>
  );
}
PowerControllers.propTypes = {
  outlets: PropTypes.array.isRequired,
};
