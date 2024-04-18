import React, { useState } from "react";
import logo from "../assets/logo.svg";
import HeaderItem from "./HeaderItem";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiChevronRight,
} from "react-icons/hi2";

import { HiPlus, HiMiniEllipsisVertical } from "react-icons/hi2";
function Header() {
  const [toggle, setToggle] = useState(false);
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
    <div className="flex items-center justify-between p-2 ">
      <div className="flex items-center gap-1 items-center ">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[50px] md:w-[115px] object-cover relative -top-2"
        />
        {/* Menu */}
        <div className=" hidden md:flex items-center gap-4">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mbile menu */}
        <div className="flex md:hidden items-center gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}

          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem
              className="absolute mt-3 bg-[#ffffff] border-[1px] pd-3"
              Icon={HiMiniEllipsisVertical}
            />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-600  p-3 px-5 py-4 rounded-md">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <img
        src="https://media.licdn.com/dms/image/D4E03AQHWHOoqN0nsNA/profile-displayphoto-shrink_800_800/0/1667750193118?e=1718841600&v=beta&t=uR6JVal4aTzjjO9wfqlF4TjRq1xDtAO-SUgUnHSegOo"
        className="w-[40px] h-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
