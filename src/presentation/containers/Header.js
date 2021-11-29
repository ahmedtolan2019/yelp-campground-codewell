import React, { useState } from "react";
import { Brand } from "./../components/Brand";
import { MenuIcon } from "./../components/MenuIcon";
import { NewsHeader } from "./../components/NewsHeader";
import { Menu } from "./Menu";
import { BackTo } from "./../components/BackTo";
import { Padding } from "./../components/Padding";
import { useHref, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";

export const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full  flex flex-col">
      <NewsHeader />
      <Padding>
        <div className="flex flex-row  py-6  justify-between items-center">
          <Brand />
          {pathname !== "/" ? (
            <div className="flex">
              {!pathname.split("/").includes("credentials") ? (
                <MenuIcon
                  handleClick={() => setMenuOpen(!menuOpen)}
                  menuStatus={menuOpen}
                />
              ) : (
                <BackTo handleClick={() => navigate("campgrounds")} />
              )}
            </div>
          ) : null}
        </div>
      </Padding>
      {/* {menuOpen && <Menu handleClick={() => setMenuOpen(false)} />} */}
      <Transition
        className="transform origin-top  overflow-hidden"
        show={menuOpen}
        enter="transition easy-out duration-150"
        enterFrom=" transform opacity-0 scale-y-0"
        enterTo="transform opacity-100 scale-y-100"
      >
        <Menu handleClick={() => setMenuOpen(false)} />
      </Transition>
    </div>
  );
};
