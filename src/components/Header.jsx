import React from "react";
import logo from "../assets/logo.svg";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import { HiPlus, HiMiniEllipsisVertical } from "react-icons/hi2";
function Header() {
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watchlist",
      icon: HiStar,
    },
    {
      name: "Originals",
      icon: HiPlayCircle,
    },
    {
      name: "Movies",
      icon: HiTv,
    },
    {
      name: "Series",
      icon: HiPlus,
    },
  ];

  return (
    <div className="flex items-center gap-2 p-4">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="logo"
        />
        {menu.map((item) => (
          <div key={item.name} className="mr-8 last:mr-0">
            {/* <item.icon className="text-3xl" /> */}
            <HeaderItem name={item.name} Icon={item.icon} />
          </div>
        ))}
      </div>
      <img
        src="https://media.licdn.com/dms/image/D4E03AQHWHOoqN0nsNA/profile-displayphoto-shrink_800_800/0/1667750193118?e=1718841600&v=beta&t=uR6JVal4aTzjjO9wfqlF4TjRq1xDtAO-SUgUnHSegOo"
        className="w-[40px] h-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
