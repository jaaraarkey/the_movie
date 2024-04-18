import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - screenWidth / 9;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - screenWidth / 6;
  };

  return (
    <div className="mx-8">
      {/* Chevrons */}
      <HiChevronLeft
        className="hidden md:block text-[2rem] absolute mx-0 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-[2rem] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[2px] border-gray-400/50 transition-all duration-100 ease-in-out"
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Slider;
