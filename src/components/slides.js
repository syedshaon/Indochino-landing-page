const breakpoints = [3840, 2160, 1080, 640, 384, 256, 128];

function assetLink(asset, width) {
  // return `https://assets.yet-another-react-lightbox.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
  return `/suits/${encodeURIComponent(`${asset}`)}`;
}

export const slides = [
  { asset: "111.jpg", width: 3500, height: 2333 },
  { asset: "115.jpg", width: 4000, height: 6000 },
  { asset: "116.jpg", width: 2333, height: 3500 },
  { asset: "112.jpg", width: 5884, height: 3923 },
  { asset: "117.jpg", width: 2667, height: 4000 },
  { asset: "118.jpg", width: 2734, height: 4101 },
  { asset: "113.jpg", width: 7360, height: 4912 },
  { asset: "114.jpg", width: 3200, height: 2133 },
  { asset: "119.jpg", width: 2133, height: 3200 },
  { asset: "120.jpg", width: 4384, height: 6575 },
  { asset: "121.jpg", width: 2000, height: 3000 },
  { asset: "122.jpg", width: 4000, height: 6000 },
  { asset: "123.jpg", width: 3360, height: 2240 },
].map(({ asset, width, height }) => ({
  src: `/suits/${asset}`,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: `/suits/${asset}`,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default slides;
