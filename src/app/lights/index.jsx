import React from 'react';
import styled from 'styled-components';
import { dark, aqua } from '@q/colors';
import { io } from 'socket.io-client';
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
  border: 5px solid ${aqua};
  border-radius: 15px 15px 15px 15px;
  margin: 15px;
`;
// ----------------------------------
// HELPERS
// ----------------------------------
const socket = io('http://localhost:4040');
// ----------------------------------
// COMPONENTS
// ----------------------------------
export default function Lights() {
  const [currentPreset, setCurrentPreset] = React.useState(null);
  const [currentBrightness, setCurrentBrightness] = React.useState(null);
  function setState(lights) {
    setCurrentPreset(lights[0].preset);
    setCurrentBrightness(lights[0].brightness);
  }
  React.useEffect(() => {
    async function fetchLightPreset() {
      setState(await getLights());
    }
    fetchLightPreset();
    socket.on('/lifx', setState);
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
