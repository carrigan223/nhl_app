import React from "react";
import NhlLogo from "./NhlLogo";
import HeaderText from "./HeaderText";
import Link from "next/link";

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
        <Link href="/">
          <HeaderText text={"The Center Ice"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
