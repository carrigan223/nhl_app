import teams from "@nhl-api/teams";
import { useState } from "react";
import { nhlTeams, activeNhlTeams } from "../util/nhl/nhlTeams";
import { Team } from "../types/team";

export const useRetrieveTeamSummaryData = () => {
  const [rawStats, setRawStats] = useState([]);
  const curentTeams = activeNhlTeams.filter(
    (team: Team | undefined) => team !== undefined
  ) as Team[];

  return curentTeams;
};
