import React from 'react'
import SinglePage from './SinglePage'
import  { useEffect, useRef } from "react";

const Children = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <iframe width="640" height="360" src="https://www.youtube.com/embed/EngW7tLk6R8" title="Sample Videos / Dummy Videos For Demo Use" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

   
  )
}

export default Children







  

  