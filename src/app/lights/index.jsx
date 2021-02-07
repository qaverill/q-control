import React from 'react';
import styled from 'styled-components';
import { green } from '@q/colors';
import { io } from 'socket.io-client';
import { Container } from '@q/styles';
import { getLights, putLights } from './api';
import PresetControllers from './components/PresetControllers';
import BrightnessControllers from './components/BrightnessController';
// ----------------------------------
// STYLES
// ----------------------------------
const LightControls = styled(Container)`
  display: flex;
  flex-direction: column;
  border-color: ${green};
  flex-grow: 1;
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
  const [currentBrightness, setCurrentBrightness] = React.useState(100);
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
      <BrightnessControllers
        currentBrightness={currentBrightness}
        setLightsBrightness={setLightsBrightness}
      />
    </LightControls>
  );
}
