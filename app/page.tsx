"use client";
import TeamSummaryCard from "./components/summary/TeamSummaryCard";
import { useRetrieveTeamSummaryData } from "./hooks/useRetrieveTeamSummaryData";
import { Team } from "./types/team";

export default function Home() {
  const teams = useRetrieveTeamSummaryData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">NHL Teams</h1>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {teams.map((team: Team) => (
            <TeamSummaryCard team={team} key={team.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
