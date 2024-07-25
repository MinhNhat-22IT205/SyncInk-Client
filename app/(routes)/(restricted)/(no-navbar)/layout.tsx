"use client";
import React from "react";

import { useAuth } from "@/app/_shared/hooks/use-auth";

function NoRestrictedRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth();
  return <div>{children}</div>;
}

export default NoRestrictedRoutesLayout;
