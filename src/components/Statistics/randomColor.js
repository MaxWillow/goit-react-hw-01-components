const randomColor = () => {
  const red = Math.random() * 256;
  const green = Math.random() * 256;
  const blue = Math.random() * 256;
  return `rgb(${red},${green},${blue})`;
};

export default randomColor;
