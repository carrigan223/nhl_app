import { Team } from "@/app/types/team";
import teams from "@nhl-api/teams";

export const nhlTeams = [
    'Anaheim Ducks',
    'Arizona Coyotes',
    'Boston Bruins',
    'Buffalo Sabres',
    'Calgary Flames',
    'Carolina Hurricanes',
    'Chicago Blackhawks',
    'Colorado Avalanche',
    'Columbus Blue Jackets',
    'Dallas Stars',
    'Detroit Red Wings',
    'Edmonton Oilers',
    'Florida Panthers',
    'Los Angeles Kings',
    'Minnesota Wild',
    'Montreal Canadiens',
    'Nashville Predators',
    'New Jersey Devils',
    'New York Islanders',
    'New York Rangers',
    'Ottawa Senators',
    'Philadelphia Flyers',
    'Pittsburgh Penguins',
    'San Jose Sharks',
    'St. Louis Blues',
    'Tampa Bay Lightning',
    'Toronto Maple Leafs',
    'Vancouver Canucks',
    'Vegas Golden Knights',
    'Washington Capitals',
    'Winnipeg Jets'
]

export const activeNhlTeams = nhlTeams.map((team: string) => {
    const match = teams.find((rawTeam: Team) => rawTeam.name === team.toUpperCase());
      if (match) {
          return match;
      }
  });