import {
  retrieveAllStats,
  retrieveCurrentSeasonSummary,
} from "@/app/components/data/retrieveCurrentSeasonSummary";
import type { Team } from "@/app/types/team";
import { parse } from "path";
import React from "react";

type Props = {};

const Team = async ({ params }: { params: { id: string } }) => {
  const teamId = parseInt(params.id);
  const teamData = (await retrieveCurrentSeasonSummary(teamId)) as Team;
  const allStats = await retrieveAllStats(teamId);

  return (
    <div>
      <div>{params.id}</div>
      <div>{JSON.stringify(teamData)}</div>
      <div>{JSON.stringify(allStats)}</div>
    </div>
  );
};

export default Team;
