import TeamSummaryCard from "./components/summary/TeamSummaryCard";
import { Team } from "./types/team";
import {
  retrieveAllStats,
  retrieveCurrentSeasonSummary,
} from "./components/data/retrieveCurrentSeasonSummary";
import Link from "next/link";

export default async function Home() {
  const teamsData = (await retrieveCurrentSeasonSummary()) as Team[];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="text-xl font-semibold">2023/2024 NHL Season</div>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 w-full lg:grid-cols-4">
          {teamsData?.map((team: Team) => {
            return (
              <Link href={`/team/${team.id}`} key={team.id}>
                <TeamSummaryCard team={team} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
