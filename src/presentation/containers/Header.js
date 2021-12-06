import React, { useState } from "react";
import { Brand } from "./../components/Brand";
import { MenuIcon } from "./../components/MenuIcon";
import { NewsHeader } from "./../components/NewsHeader";
import { Menu } from "./Menu";
import { BackTo } from "./../components/BackTo";
import { Padding } from "./../components/Padding";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useFireAuthContext } from "../../application/firebase/useAuth";

export const Header = () => {
  const { isAuth, user, signUserOut } = useFireAuthContext();
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleSignOut = () => {
    signUserOut();
    navigate("/campgrounds");
  };
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
        className="transform origin-top overflow-hidden"
        show={menuOpen}
      >
        <Menu
          handleClick={() => setMenuOpen(false)}
          isAuth={isAuth}
          userName={user?.email}
          handleSignOut={handleSignOut}
        />
      </Transition>
    </div>
  );
};
