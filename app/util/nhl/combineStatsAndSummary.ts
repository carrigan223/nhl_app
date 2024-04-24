import teams from "@nhl-api/teams";
import { useEffect, useState } from "react";
import { nhlTeams, activeNhlTeams } from "./nhlTeams";
import { Team } from "../../types/team";

// This function combines the stats and summary data for each team
//it takes the parameter of the response from the summary call to the api
//and adds the data as a stats key to the data provide from the nhl-api/teams package
export const combineStatsAndSummary = (data: any) => {
  const currentTeams = activeNhlTeams.filter(
    (team: Team | undefined) => team !== undefined
  ) as Team[];
  const currentTeamsFull = currentTeams.map((team: Team) => {
 
    return {
      ...team,
      stats: data.find((dataTeam: any) => {
    

        //due to the fact that the team names are not the same in the two datasets
        //we need to normalize the strings to compare them
        //this is done by converting the strings to uppercase and removing diacritics
        //the canadiens in the nhl-api/teams package is spelled with an accent
        
        return dataTeam.teamFullName.toUpperCase().normalize('NFD').replace(/\p{Diacritic}/gu, "") === team.name.toUpperCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
      }),
    };
  });


  return currentTeamsFull;
};
