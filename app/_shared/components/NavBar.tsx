import React from "react";

import { useAuth } from "../hooks/use-auth";

import DrawerButton from "./drawer/DrawerButton";
import ProfileMenuList from "./ProfileMenuList";
import SearchInput from "./SearchInput";

const NavBar = async () => {
  const { user } = await useAuth();
  return (
    <div className="w-full top-0 sticky p-3 flex items-center justify-between ml-auto border-b bg-white backdrop-blur-[3px]">
      <DrawerButton />
      <SearchInput />
      <ProfileMenuList src={user?.avatar} username={user?.username} />
    </div>
  );
};

export default NavBar;
