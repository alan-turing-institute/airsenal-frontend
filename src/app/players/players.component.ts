import { Component, OnInit } from '@angular/core';
import { PlayerStub, TeamStub } from '../player';
import { PlayerService } from '../player.service';
import { MatSelectModule } from '@angular/material/select';


export interface Position {
  value: string;
  viewValue: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
    players: PlayerStub[];
    teams: TeamStub[];

    constructor(private playerService: PlayerService) { }

    getPlayers(selectedTeam: string, selectedPos: string): void {
	this.playerService.getPlayers(selectedTeam,
				      selectedPos)
	    .subscribe(players => this.players = players);
    }

    getTeams(): void {
	this.playerService.getTeams()
	    .subscribe(teams => this.teams = teams);
    }


    ngOnInit() {
	this.getPlayers("all", "all");
	this.getTeams();
    }

    positions: Position[] = [
	{value: "GK", viewValue: "GK"},
	{value: "DEF", viewValue: "DEF"},
	{value: "MID", viewValue: "MID"},
	{value: "FWD", viewValue: "FWD"}
    ]
    foods: Food[] = [
	{value: 'steak-0', viewValue: 'Steak'},
	{value: 'pizza-1', viewValue: 'Pizza'},
	{value: 'tacos-2', viewValue: 'Tacos'}
    ];
}
