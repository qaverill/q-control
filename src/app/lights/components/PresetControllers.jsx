import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { green } from '@q/colors';
import { Toggle } from '@q/styles';
import presets from '../lights';
// ----------------------------------
// STYLES
// ----------------------------------
const Controllers = styled.div`
  display: flex;
  flex-grow: 1;
`;
const PresetToggle = styled(Toggle)`
  :nth-child(n + 2) {
    margin-left: 15px;
  }
`;
// ----------------------------------
// HELPERS
// ----------------------------------
const determineBackground = (colors) => {
  if (colors.length > 4) {
    return 'conic-gradient(hsl(360, 100%, 50%), hsl(315, 100%, 50%), hsl(270, 100%, 50%), hsl(225, 100%, 50%), hsl(180, 100%, 50%), hsl(135, 100%, 50%), hsl(90, 100%, 50%), hsl(45, 100%, 50%), hsl(0, 100%, 50%));';
  }
  if (colors[0] === colors[1]) {
    return `
      linear-gradient(135deg, ${colors[0]}, rgba(0,0,0,.05) 50%),
      linear-gradient(225deg, ${colors[1]}, rgba(0,0,0,.05) 50%),
      linear-gradient(315deg, ${colors[2]}, rgba(0,0,0,.05) 50%),
      linear-gradient(45deg, ${colors[3]}, rgba(0,0,0,.05) 50%);`;
  }
  return `conic-gradient(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[0]});`;
};
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function PresetControllers(props) {
  const { currentPreset, setLightsPreset } = props;
  return (
    <Controllers>
      {Object.entries(presets).map(([preset, colors]) => (
        <PresetToggle
          key={preset}
          data-tip={preset}
          color={green}
          isActive={currentPreset === preset}
          onClick={() => setLightsPreset(preset)}
          background={determineBackground(colors)}
        />
      ))}
    </Controllers>
  );
}
PresetControllers.propTypes = {
  currentPreset: PropTypes.string.isRequired,
  setLightsPreset: PropTypes.func.isRequired,
};
