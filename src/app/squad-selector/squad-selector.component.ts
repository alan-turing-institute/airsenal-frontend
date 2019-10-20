import { Component, OnInit } from '@angular/core';
import { PlayerStub, TeamStub } from '../player';
import { PlayerService } from '../player.service';
import { SquadService } from '../squad.service';
import { MatSelectModule } from '@angular/material/select';


export interface Position {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-squad-selector',
  templateUrl: './squad-selector.component.html',
  styleUrls: ['./squad-selector.component.css']
})
export class SquadSelectorComponent implements OnInit {
    players: PlayerStub[];
    teams: TeamStub[];
    selectedTeam: string;
    selectedPos; string;
    teamId: number;

    constructor(private playerService: PlayerService,
		private squadService: SquadService) { }


    getPlayers(selTeam: string, selPos: string): void {
	console.log("refreshing player lists with team, pos",selTeam,
		    selPos);
	this.playerService.getPlayers(selTeam,
				      selPos)
	    .subscribe(players => this.players = players);
    }


    refreshPlayers( $event ) {
	console.log("Refreshing players", this.selectedTeam);
//	this.selectedTeam = this.teamSelector.value;
	this.getPlayers(this.selectedTeam, this.selectedPos);
    }

    getTeams(): void {
	this.playerService.getTeams()
	    .subscribe(teams => this.teams = teams);
    }

    fillSquad(): void {
	console.log("Team ID is ", this.teamId);
	this.squadService.fillSquad();
    }


    ngOnInit() {
	this.selectedTeam="all";
	this.selectedPos="all";
	this.getPlayers(this.selectedTeam, this.selectedPos);
	this.getTeams();
    }

    positions: Position[] = [
	{value: "all", viewValue: "all"},
	{value: "GK", viewValue: "GK"},
	{value: "DEF", viewValue: "DEF"},
	{value: "MID", viewValue: "MID"},
	{value: "FWD", viewValue: "FWD"}
    ]


}
