import axios from 'axios';

const PATH = '/api/lifx';

export const getLights = async () => {
  const { data } = await axios.get(PATH);
  return data;
};

export const putLights = async (preset) => {
  await axios.put(PATH, { preset });
};
