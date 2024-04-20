import TeamSummaryCard from "./components/summary/TeamSummaryCard";
import { Team } from "./types/team";
import { retrieveCurrentSeasonSummary } from "./components/data/retrieveCurrentSeasonSummary";

export default async function Home() {
  const teamsData = await retrieveCurrentSeasonSummary();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 w-full">
          {teamsData.map((team: Team) => {
            return <TeamSummaryCard team={team} key={team.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
