"use client";
import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import slides from "./slides";

import "yet-another-react-lightbox/styles.css";

export default function YetLightBox() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <PhotoAlbum layout="rows" photos={slides} targetRowHeight={300} onClick={({ index: current }) => setIndex(current)} />

      <Lightbox index={index} slides={slides} open={index >= 0} close={() => setIndex(-1)} />
    </>
  );
}