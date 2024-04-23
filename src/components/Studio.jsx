import React from "react";

import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nGeo from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import sWars from "../assets/Images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nGeoV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import sWarsV from "../assets/Videos/star-wars.mp4";

// import iCan from "../assets/videos/iCan.mp4";

function Studio() {
  const studioList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: nGeo,
      video: nGeoV,
    },
    {
      id: 5,
      image: sWars,
      video: sWarsV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {studioList.map((item) => {
        return (
          <div className=" relative flex">
            <div className="border-[2px] border-gray-600 rounded-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <video
                src={item.video}
                autoPlay
                loop
                playsInline
                className="absolute top-0 rounded-md z-0 opacity-20 hover:opacity-50 w-96  object-cover"
              />
              <img src={item.image} className="w-full z-[1]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Studio;
