const colors = ["#3f87ff", "#9598f6", "#95f6c7", "#292929"];
export const randomColor = () => {
  return colors[Math.floor(Math.random() * 3)];
};
