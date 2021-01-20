import React from 'react';
import styled from 'styled-components';
import { dark, color2 } from '@q/colors';
import { getLights, putLights } from './api';
import PresetControllers from './components/PresetControllers';
import BrightnessControllers from './components/BrightnessController';
// ----------------------------------
// STYLES
// ----------------------------------
const LightControls = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  display: flex;
  background-color: ${dark};
  border: 5px solid ${color2};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;
// ----------------------------------
// HELPERS
// ----------------------------------
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function Lights() {
  const [currentPreset, setCurrentPreset] = React.useState(null);
  const [currentBrightness, setCurrentBrightness] = React.useState(null);
  React.useEffect(() => {
    async function fetchLightPreset() {
      const lights = await getLights();
      setCurrentPreset(lights[0].preset);
      setCurrentBrightness(lights[0].brightness);
    }
    fetchLightPreset();
  }, []);
  async function setLightsPreset(preset) {
    setCurrentPreset(preset);
    await putLights({ preset });
  }
  async function setLightsBrightness(brightness) {
    setCurrentBrightness(brightness);
    await putLights({ brightness });
  }
  return (
    <LightControls>
      <PresetControllers
        currentPreset={currentPreset}
        setLightsPreset={setLightsPreset}
      />
      {currentBrightness && (
        <BrightnessControllers
          currentBrightness={currentBrightness}
          setLightsBrightness={setLightsBrightness}
        />
      )}
    </LightControls>
  );
}
