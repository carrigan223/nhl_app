import {
  getPlayOffCount,
  retrieveAllStats,
  retrieveCurrentSeasonSummary,
} from "@/app/components/data/retrieveCurrentSeasonSummary";
import TeamSummaryCard from "@/app/components/summary/TeamSummaryCard";
import type { Team, TeamStats } from "@/app/types/team";
import { parse } from "path";
import React from "react";

type Props = {};

const Team = async ({ params }: { params: { id: string } }) => {
  const convertSeasonIdToYear = (seasonId: number) => {
    const seasonIdString = seasonId.toString();
    return `${seasonIdString.slice(0, 4)}/${seasonIdString.slice(4, 8)}`;
  };
  const teamId = parseInt(params.id);
  const teamData = (await retrieveCurrentSeasonSummary(teamId)) as Team;
  const allStats = await retrieveAllStats(teamId);
  const playoffCount = await getPlayOffCount(teamData.abbreviation);
  return (
    <div>
      <div
        style={{
          color: teamData.colors[0],
        }}
        className="text-xl font-bold w-full flex flex-col"
      >
        <span>{teamData.name}</span>
        <span className="text-white">Playoff Appearances: {playoffCount}</span>
      </div>
      <span className="text-center">Historical Season Stats</span>
      <div className="flex flex-wrap w-full ">
        {allStats.map((stats: TeamStats, index: number) => {
          return (
            <div className="border m-2" key={stats.seasonId}>
              <div
                style={{
                  backgroundColor: teamData.colors[0],
                }}
                className="w-full justify-center text-center items-center "
              >
                {convertSeasonIdToYear(stats.seasonId)}
              </div>
              <div>
                {Object.keys(stats).map((key) => {
                  const keysToIgnore = [
                    "wins",
                    "losses",
                    "otLosses",
                    "gamesPlayed",
                    "ties",
                    "teamId",
                    "teamFullName",
                    "seasonId",
                  ];
                  if (keysToIgnore.includes(key)) return null;
                  //@ts-ignore
                  const value = stats[key] as string | number;
                  key = key.replace(/([A-Z])/g, " $1");
                  key = key.charAt(0).toUpperCase() + key.slice(1);
                  return (
                    <div className="p-2" key={key}>
                      <span className="font-bold">
                        {key}: {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
