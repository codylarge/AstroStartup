// JavaScript code to generate the HTML for the images
const imageUrls = [
  "https://media.giphy.com/media/cilCAmB6IhIzyNF5az/giphy.gif",
  "https://media.giphy.com/media/jV92wYybfn5GjokWEW/giphy.gif",
  "https://media.giphy.com/media/EeHdyLZ4GpMMGXniN5/giphy.gif",
  "https://media.giphy.com/media/UknP3JxgsUQsAnvc4U/giphy.gif",
  "https://media.giphy.com/media/VaCAOXkl22wR86RF3r/giphy.gif",
  "https://media4.giphy.com/media/kJ0z80cY6c1OLarl6g/giphy.gif",
  "https://media.giphy.com/media/eB5G10hLSQ5C2Ju5Z6/giphy.gif",
  "https://media.giphy.com/media/J2o1gCaLE5vWIhJgb6/giphy.gif",
  "https://media.giphy.com/media/nArgx8vMYpqupAQy75/giphy.gif",
  "https://media.giphy.com/media/rZiiKtjtRDZOlLSm44/giphy.gif",
  "https://media.giphy.com/media/o1zN0U1inMa7dmDibA/giphy.gif",
  "https://media.giphy.com/media/Br0Bgp2vKXYwV0p65T/giphy.gif",
];

const imageContainer = document.getElementById("image-container");

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Walking GIF";
  imageContainer.appendChild(img);
});
