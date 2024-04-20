import { Team } from "@/app/types/team";
import Image from "next/image";
import React from "react";

type Props = {
  team: Team;
};

const TeamSummaryCard = ({ team }: Props) => {
  return (
    <div
      key={team.id}
      className="flex flex-col  items-center border rounded-md shadow-md shadow-slate-400 w-full"
    >
      <div className="flex w-full justify-center items-center border-b p-2">
        <div className=" w-1/3 flex justify-center items-center">
          <div className="p-4  rounded-full h-20 w-20  flex items-center justify-center  shadow-slate-500 bg-black">
            <Image src={team.logo} alt={team.name} width={50} height={50} />
          </div>
        </div>
        <div className="w-2/3 ">
          <h2 className="text-lg font-bold">{team.name}</h2>
        </div>
      </div>

      <div>
        <ul>
          {team.nicknames.map((nickname) => (
            <li key={nickname}>{nickname}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSummaryCard;
