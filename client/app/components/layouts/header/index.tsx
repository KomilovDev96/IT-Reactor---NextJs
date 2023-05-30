import React from "react";
import { NavBar } from "./navbar";
import SlidersCustom from "./sliders";

type Props = {};

function HeaderLayout({}: Props) {
  return (
    <>
      <NavBar />
      <SlidersCustom />
    </>
  );
}

export default HeaderLayout;
