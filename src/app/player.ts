
export class Fixture {
    gameweek: number;
    opponent: string;
    home_or_away: string;
}      
       
export class RecentScore {
    gameweek: number;
    score: number;   
}

export class Prediction {
    gameweek: number;
    prediction: number;
}

export class Player {
    player_id: number;
    player_name: string;
    team: string;
    fixtures: Fixture[];
    recent_scores: RecentScore[];
    predictions: Prediction[];
}
