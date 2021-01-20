import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
// ----------------------------------
// STYLES
// ----------------------------------
const Bar = styled.div`
  width: 100%;
`;
const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.8;
  -webkit-transition: .2s;
  transition: opacity .2s;
  cursor: pointer;
  border-radius: 500px;

  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;
    background: #4CAF50;
    cursor: pointer;
    border-radius: 500px;
  }
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function BrightnessController(props) {
  const { currentBrightness, setLightsBrightness } = props;
  const [value, setValue] = React.useState(currentBrightness * 100);
  React.useEffect(() => ReactTooltip.rebuild(), [value]);
  return (
    <Bar data-tip={`${value}%`}>
      <Slider
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onMouseUp={(e) => setLightsBrightness(e.target.value / 100)}
      />
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
