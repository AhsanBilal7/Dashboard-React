
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

{
  /* <img src={images['0.png']} /> */
}

const icons = [
  {
    img: images["1.png"]
  },
  {
    img: images["2.png"]
  },
  {
    img: images["3.png"]
  },
  {
    img: images["4.png"]
  }
];
export default icons;
