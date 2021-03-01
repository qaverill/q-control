import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { green } from '@q/colors';
import * as R from 'ramda';
// ----------------------------------
// STYLES
// ----------------------------------
const Bar = styled.div`
`;
const Slider = styled.input`
  margin-top: 15px;
  appearance: none;
  width: 100%;
  height: 50px;
  background: linear-gradient(90deg, rgba(28,28,28,1) 0%, rgba(255,255,255,1) 100%);
  border-radius: 60px;
  border: 5px solid black;
  outline: none;
  opacity: 0.8;
  -webkit-transition: .2s;
  transition: opacity .2s;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;
    border-radius: 500px;
    border: 5px solid black;
    cursor: pointer;
    border-radius: 500px;
    -webkit-transition: .2s;
    :hover {
      background-color: ${green};
    }
  }
`;
const RootDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 99;
  background: black;
  opacity: ${R.prop('brightness')};
  pointer-events: none;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function BrightnessController(props) {
  const { currentBrightness, setLightsBrightness } = props;
  React.useEffect(() => ReactTooltip.rebuild(), [currentBrightness]);
  return (
    <Bar data-tip={`${currentBrightness * 100}%`}>
      <Slider
        type="range"
        min="1"
        max="100"
        value={currentBrightness * 100}
        onChange={(e) => setLightsBrightness(e.target.value / 100)}
        onMouseUp={(e) => setLightsBrightness(e.target.value / 100)}
      />
      <RootDimmer brightness={0.80 - (currentBrightness)} />
    </Bar>
  );
}
// ----------------------------------
// PROPTYPES
// ----------------------------------
BrightnessController.propTypes = {
  currentBrightness: PropTypes.number.isRequired,
  setLightsBrightness: PropTypes.func.isRequired,
};
