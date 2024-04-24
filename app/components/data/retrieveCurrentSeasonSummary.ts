import { combineStatsAndSummary } from "@/app/util/nhl/combineStatsAndSummary";

export async function retrieveCurrentSeasonSummary(teamId: number | null = null) {
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
    if (teamId) {
      return formattedData.find((team: any) => team.id === teamId);
    } else {
      return formattedData;
    }
  
  }

  const groupBy = (array: any[], key: string) => {
  

    
    const groupings = array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
   
    return groupings;
  }
  

  export async function retrieveAllStats(teamId: number | null = null) {
    const res = await fetch(
      "https://api.nhle.com/stats/rest/en/team/summary?limit=-1"
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    //group the data by team name
    const groupedData = groupBy(data.data, 'teamId');
    if(!teamId) return groupedData;
    const datToReturn = groupedData[teamId];

    return datToReturn;

  }
