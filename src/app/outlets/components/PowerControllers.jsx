import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { pink } from '@q/colors';
import { Toggle } from '@q/styles';
import backgrounds from '../outlets';
import { putOutlet } from '../api';
// ----------------------------------
// STYLES
// ----------------------------------
const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const OutletToggle = styled(Toggle)`
  :nth-child(n + 2) {
    margin-top: 15px;
  }
`;
// ----------------------------------
// HELPERS
// ----------------------------------
const determineStates = (outlets) => {
  const states = {};
  if (outlets) {
    outlets.forEach((outlet) => {
      states[outlet.alias] = outlet.on_time > 0;
    });
  }
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
      {Object.entries(backgrounds).map(([outlet, background]) => (
        <OutletToggle
          key={outlet}
          data-tip={outlet}
          background={background}
          color={pink}
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
