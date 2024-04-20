import Image from "next/image";
import React from "react";
import nhl from "../../../../public/nhl.png";

type Props = {};

const NhlLogo = (props: Props) => {
  return (
    <div className="shadow-md shadow-slate-400 rounded m-2">
      <Image
        alt={"nhl logo"}
        src={nhl}
        height={50}
        width={50}
        style={{ borderRadius: "4px" }}
      />
    </div>
  );
};

export default NhlLogo;
