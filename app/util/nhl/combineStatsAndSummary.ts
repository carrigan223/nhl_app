import teams from "@nhl-api/teams";
import { useEffect, useState } from "react";
import { nhlTeams, activeNhlTeams } from "./nhlTeams";
import { Team } from "../../types/team";

export const combineStatsAndSummary = (data: any) => {
  const currentTeams = activeNhlTeams.filter(
    (team: Team | undefined) => team !== undefined
  ) as Team[];
  const currentTeamsFull = currentTeams.map((team: Team) => {
    return {
      ...team,
      stats: data.find((dataTeam: any) => {
        return dataTeam.teamFullName.toUpperCase() === team.name.toUpperCase();
      }),
    };
  });


  return currentTeamsFull;
};
