import React from "react";
import NhlLogo from "./NhlLogo";
import HeaderText from "./HeaderText";

type Props = {};

const Header = (props: Props) => {
  return (
    <div
      style={{
        height: "10vh",
      }}
      className="w-full flex border-b  items-center bg-gradient-to-r from-slate-500 to-slate-800 to-black "
    >
      <NhlLogo />

      <div>
        <HeaderText text={"The Center Ice"} />
      </div>
    </div>
  );
};

export default Header;
