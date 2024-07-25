"use client";
import { SkeletonCircle } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";

import { useAuth } from "../hooks/use-auth";

import DrawerButton from "./drawer/DrawerButton";
import SearchInput from "./SearchInput";
const ProfileMenuList = lazy(() => import("./ProfileMenuList"));

const NavBar = () => {
  const { user } = useAuth();
  return (
    <div className="w-full top-0 sticky p-3 flex items-center justify-between ml-auto border-b  backdrop-blur-[5px] z-10">
      <DrawerButton />
      <SearchInput />
      <Suspense fallback={<SkeletonCircle size="10" />}>
        <ProfileMenuList src={user?.avatar} username={user?.username} />
      </Suspense>
    </div>
  );
};

export default NavBar;
