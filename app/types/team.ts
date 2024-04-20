export interface Team {
    id: number;
    name: string;
    abbreviation: string;
    nicknames: string[];
    colors: string[];
    logo: string;
    goalHorn: string;
    goalHornSong: string;
    isActive: boolean;
    stats?: TeamStats | null;
    };

    export interface TeamStats {
        faceoffWinPct: number;
        gamesPlayed: number;
        goalsAgainst: number;
        goalsAgainstPerGame: number;
        goalsFor: number;
        goalsForPerGame: number;
        losses: number;
        otLosses: number;
        penaltyKillNetPct: number;
        penaltyKillPct: number;
        pointPct: number;
        points: number;
        powerPlayNetPct: number;
        powerPlayPct: number;
        regulationAndOtWins: number;
        seasonId: number;
        shotsAgainstPerGame: number;
        shotsForPerGame: number;
        teamFullName: string;
        teamId: number;
        ties: number | null;
        wins: number;
        winsInRegulation: number;
        winsInShootout: number;
    }
    


    
    
    