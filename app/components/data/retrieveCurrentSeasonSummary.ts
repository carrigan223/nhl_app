import { combineStatsAndSummary } from "@/app/util/nhl/combineStatsAndSummary";

export async function retrieveCurrentSeasonSummary() {
    const res = await fetch(
      "https://api.nhle.com/stats/rest/en/team/summary?sort=shotsForPerGame&cayenneExp=seasonId=20232024"
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const formattedData = combineStatsAndSummary(data.data);
  
    return formattedData;
  }