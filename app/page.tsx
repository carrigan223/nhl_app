import TeamSummaryCard from "./components/summary/TeamSummaryCard";
import { retrieveTeamSummaryData } from "./util/nhl/retrieveTeamSummaryData";
import { Team } from "./types/team";

async function getData() {
  const res = await fetch(
    "https://api.nhle.com/stats/rest/en/team/summary?sort=shotsForPerGame&cayenneExp=seasonId=20232024"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const teams = getData().then((data) => {
    retrieveTeamSummaryData(data);
  });
  console.log(teams);
  console.log("teams");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">NHL Teams</h1>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {/* {teams &&
            teams?.map((team: Team) => (
              <TeamSummaryCard team={team} key={team.id} />
            ))} */}
        </div>
      </div>
    </main>
  );
}
