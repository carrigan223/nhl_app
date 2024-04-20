"use client";
import { Team } from "@/app/types/team";
import Image from "next/image";
import React from "react";
import emotionStyled from "@emotion/styled";
type TeamColorProps = {
  teamColors: {
    primary: string;
    secondary: string;
  };
};

const CardHeader = emotionStyled.div<TeamColorProps>((props) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #e5e7eb",
  padding: "0.5rem",
  borderRadius: "0.3rem 0.3rem 0 0",
  backgroundImage: `linear-gradient(90deg, ${props.teamColors.secondary},${props.teamColors.primary} )`,
}));

const LogoContainer = emotionStyled.div<TeamColorProps>((props) => ({
  padding: "0.5rem",
  backgroundImage: `linear-gradient(90deg, ${props.teamColors.primary},black  )`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "84px",
  height: "84px",
  border: "1px solid #e5e7eb",
  borderRadius: "100%",
}));

type Props = {
  team: Team;
};

const TeamSummaryCard = ({ team }: Props) => {
  return (
    <div
      key={team.id}
      className="flex flex-col  items-center border rounded-md shadow-md shadow-slate-400 w-full"
    >
      <CardHeader
        teamColors={{
          primary: team.colors[0],
          secondary: team.colors[1],
        }}
      >
        <div className=" w-1/3 flex justify-center items-center">
          <LogoContainer
            teamColors={{
              primary: team.colors[0],
              secondary: team.colors[1],
            }}
          >
            <Image src={team.logo} alt={team.name} width={50} height={50} />
          </LogoContainer>
        </div>
        <div className="w-2/3">
          <h2 className="text-lg font-bold  flex flex-col justify-center items-center text-center">
            {team.name}
          </h2>
          <div className="flex justify-around">
            <h4 className="text-sm">W:{team.stats?.wins}</h4>
            <h4 className="text-sm">L:{team.stats?.losses}</h4>
            <h4 className="text-sm">
              OTL:
              {team.stats?.otLosses}
            </h4>
          </div>
        </div>
      </CardHeader>

      <div>
        <ul>{JSON.stringify(team.stats, null, 2)}</ul>
      </div>
    </div>
  );
};

export default TeamSummaryCard;
