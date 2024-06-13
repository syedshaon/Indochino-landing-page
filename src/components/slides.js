const breakpoints = [3840, 2160, 1080, 640, 384, 256, 128];

function assetLink(asset, width) {
  // return `https://assets.yet-another-react-lightbox.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
  return `/suits/${encodeURIComponent(`${asset}`)}`;
}

export const slides = [
  { asset: "111.webp", width: 1600, height: 1066 },
  { asset: "115.webp", width: 1000, height: 1500 },
  { asset: "116.webp", width: 1000, height: 1500 },
  { asset: "112.webp", width: 1600, height: 1066 },
  { asset: "117.webp", width: 1000, height: 1500 },
  { asset: "118.webp", width: 1000, height: 1500 },
  { asset: "113.webp", width: 1600, height: 1066 },
  { asset: "114.webp", width: 1600, height: 1066 },
  { asset: "119.webp", width: 1000, height: 1500 },
  { asset: "120.webp", width: 1000, height: 1500 },
  { asset: "121.webp", width: 1000, height: 1500 },
  { asset: "122.webp", width: 1000, height: 1500 },
  { asset: "123.webp", width: 1600, height: 1066 },
].map(({ asset, width, height }) => ({
  src: `/suits/${asset}`,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: `/suits/${asset}`,
    width,
    height,
    // width: breakpoint,
    // height: Math.round((height / width) * breakpoint),
  })),
}));

export default slides;
