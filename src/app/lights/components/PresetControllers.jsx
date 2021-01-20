import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import presets from '../lights';
// ----------------------------------
// STYLES
// ----------------------------------
const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const PresetCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  font-size: 200px;
  cursor: pointer;
  border-radius: 500px;
  border: 5px solid ${(props) => (props.isActive ? 'white' : 'black')};
  height: 300px;
  width: 300px;
  background: ${(props) => props.background};
`;
// ----------------------------------
// HELPERS
// ----------------------------------
const determineBackground = (colors) => {
  if (colors.length > 4) {
    return 'conic-gradient(hsl(360, 100%, 50%), hsl(315, 100%, 50%), hsl(270, 100%, 50%), hsl(225, 100%, 50%), hsl(180, 100%, 50%), hsl(135, 100%, 50%), hsl(90, 100%, 50%), hsl(45, 100%, 50%), hsl(0, 100%, 50%));';
  }
  return `
    linear-gradient(135deg, ${colors[0]}, rgba(0,0,0,.05) 50%),
    linear-gradient(225deg, ${colors[1]}, rgba(0,0,0,.05) 50%),
    linear-gradient(315deg, ${colors[2]}, rgba(0,0,0,.05) 50%),
    linear-gradient(45deg, ${colors[3]}, rgba(0,0,0,.05) 50%);`;
};
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function PresetControllers(props) {
  const { currentPreset, setLightsPreset } = props;
  return (
    <Controllers>
      {Object.entries(presets).map(([preset, colors]) => (
        <PresetCircle
          key={preset}
          data-tip={preset}
          isActive={currentPreset === preset}
          onClick={() => setLightsPreset(preset)}
          background={determineBackground(colors)}
        >
          {preset === 'random' && '?'}
        </PresetCircle>
      ))}
    </Controllers>
  );
}
PresetControllers.propTypes = {
  currentPreset: PropTypes.string.isRequired,
  setLightsPreset: PropTypes.func.isRequired,
};
