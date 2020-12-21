const black = '#040404';
const dark = '#222222';
const medium = '#454545';
const light = '#747474';
const white = '#FFFFFF';
const green = '#1DB954';
const yellow = '#F4E409';
const red = '#C5283D';
const purple = '#541DB9';
const orange = '#B9541D';
const aqua = '#3BA99C';
const random = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default {
  black,
  dark,
  white,
  color1: orange,
  color2: aqua,
  random,
};
