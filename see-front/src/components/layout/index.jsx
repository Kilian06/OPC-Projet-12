import NavBarHor from "../navBarHor";
import NavBarVer from "../navBarVer";
import { useState } from "react";

function Layout(props) {

  return (
    

    <div className="layout">
      <NavBarHor />
      <NavBarVer />
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;
