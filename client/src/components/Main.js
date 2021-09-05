import React from "react";
import FloatingButton from "./FloatingButton";
import HeaderMain from "./HeaderMain";

const Main = ({ children }) => {
  return (
    <div className="main">
      <HeaderMain />
      <FloatingButton />
      <div className="container">{children}</div>
    </div>
  );
};

export default Main;
