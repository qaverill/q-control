import axios from 'axios';

const PATH = '/api/kasa';

export const getOutlets = async () => {
  const { data } = await axios.get(PATH);
  return data;
};

export const putOutlet = async ({ outlet, state }) => {
  const path = outlet ? `${PATH}?outlet=${outlet}` : PATH;
  await axios.put(path, { state });
};
