import axios from 'axios';

const PATH = '/api/control/lifx';

export const getLights = async () => {
  const { data } = await axios.get(PATH);
  return data;
};

export const putLights = async ({ preset, brightness }) => {
  const payload = brightness ? { brightness } : { preset };
  await axios.put(PATH, payload);
};
