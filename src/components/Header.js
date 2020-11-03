import React from "react";
import "../css/Header.css";

import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return <div>{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>;
}

export default Header;
