import teams from "@nhl-api/teams";
import { useEffect, useState } from "react";
import { nhlTeams, activeNhlTeams } from "./nhlTeams";
import { Team } from "../../types/team";


export const retrieveTeamSummaryData = (data: any) => {
 
 console.log(data.data[0]);

  const currentTeams = activeNhlTeams.filter(
    (team: Team | undefined) => team !== undefined
  ) as Team[];
  const currentTeamsFull = currentTeams.map((team: Team) => {
    // console.log(team);
   
    // return {
    //   ...team,
    //   ...data.find((dataTeam: any) => dataTeam.team.id === team.id),
    // };
    });

  return currentTeams;
};
