import React from "react";

import NavBar from "@/app/_shared/components/NavBar";

function RestrictedRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Also inserting token to axios here */}
      <NavBar />
      {children}
    </div>
  );
}

export default RestrictedRoutesLayout;
