// JavaScript code to generate the HTML for the images
const imageUrls = [
  "https://media.giphy.com/media/Ifmwp0dWKtJbTv2Z4p/giphy.gif",
  "https://media.giphy.com/media/cilCAmB6IhIzyNF5az/giphy.gif",
  "https://media.giphy.com/media/J2o1gCaLE5vWIhJgb6/giphy.gif",
  "https://media.giphy.com/media/eMmxbSEhQ1possXwYB/giphy.gif", // Margin left
  "https://media.giphy.com/media/VaCAOXkl22wR86RF3r/giphy.gif",
  "https://media.giphy.com/media/kJ0z80cY6c1OLarl6g/giphy.gif",
  "https://media.giphy.com/media/LkU564TaUCPpN4RnmB/giphy.gif", // Margin left
  "https://media.giphy.com/media/LRILbhn8CkjB8OMcLX/giphy.gif", // Margin left
  "https://media.giphy.com/media/dXc91AlXJ00yjt0PB8/giphy.gif",
  "https://media.giphy.com/media/Pj1EBQgKvT6D5vwBAs/giphy.gif",
  "https://media.giphy.com/media/o1zN0U1inMa7dmDibA/giphy.gif",
  "https://media.giphy.com/media/Br0Bgp2vKXYwV0p65T/giphy.gif",
];

/* Other GIFS */
// Barf: https://media.giphy.com/media/ViOZN7tGL5ojgLSq7K/giphy.gif
// Hanging on: https://media.giphy.com/media/J2o1gCaLE5vWIhJgb6/giphy.gif
// Pizza in hand: https://media.giphy.com/media/EeHdyLZ4GpMMGXniN5/giphy.gif
// Pumpkin head: https://media.giphy.com/media/nArgx8vMYpqupAQy75/giphy.gif
// Melting Smiley: https://media.giphy.com/media/Yqn91wqkLqGigioRMV/giphy.gif
// Smiley: https://media.giphy.com/media/lmvcQylLXkz6b3SYoe/giphy.gif
// Google: https://media.giphy.com/media/qNSFklvPnXQ4tOcxLh/giphy.gif
// App Store: https://media.giphy.com/media/06LCIG6zntmYwwQx82/giphy.gif
// Walking on Fire: https://media.giphy.com/media/UknP3JxgsUQsAnvc4U/giphy.gif
// In n Out: https://media.giphy.com/media/lOUOd1wRuFPTmUXuXP/giphy.gif   |   https://media.giphy.com/media/LSF0zwojv7tA7fTOBK/giphy.gif
// Dog: https://media.giphy.com/media/YocJSezHFrS6qqXUdz/giphy.gif

const imageContainer = document.getElementById("image-container");

let i = 0;
imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "GIF";
  if (i == 3 || i == 6 || i == 7) img.classList.add("marginLeftGif"); // Add margin left to certain GIFs. Not ideal, but works for now
  i++;
  imageContainer.appendChild(img);
});
