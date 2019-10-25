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

    team_id: number;
    players: PlayerStub[];
    teams: TeamStub[];
    selectedTeam: TeamStub;
    selectedPos; string;
    selectedPlayer: PlayerStub;
    //selectedPlayer: string;
    teamId: number;
    team: number[];

    positions: Position[] = [
	{value: "all", viewValue: "all"},
	{value: "GK", viewValue: "GK"},
	{value: "DEF", viewValue: "DEF"},
	{value: "MID", viewValue: "MID"},
	{value: "FWD", viewValue: "FWD"}
    ]

    constructor(private playerService: PlayerService,
		private squadService: SquadService) { }


    getPlayers(selTeam: string, selPos: string): void {
	//console.log("refreshing player lists with team, pos",selTeam,
	//	    selPos);
	console.log("Updating player lists for team: ".concat(selTeam));
	this.playerService.getPlayers(selTeam,
				      selPos)
	    .subscribe(players => {
		//console.log(JSON.stringify(players[0]))

		this.players = players});
    }


    refreshPlayers( newSelectedTeam:TeamStub ) {
	console.log("New selected team: "+JSON.stringify(newSelectedTeam))
	this.selectedTeam = newSelectedTeam
	console.log("Refreshing players for team: ", this.selectedTeam)
	this.getPlayers(this.selectedTeam.name, this.selectedPos);
	}

	refreshPosition( newSelectedPosition: string ) {
		console.log("New selected position: "+JSON.stringify(newSelectedPosition))
		this.selectedPos = newSelectedPosition;
		this.getPlayers(this.selectedTeam.name, this.selectedPos)
	}

    refreshPlayer(selectedPlayer) {
	console.log(selectedPlayer.name)
	//console.log("Passed UpdateSelectedPlayer: ".concat(newPlayer.name))
	//console.log("UpdateSelectedPlayer: ".concat(this.selectedPlayer.name))
	this.selectedPlayer = selectedPlayer
    }

    getTeams(): void {
	this.playerService.getTeams()
	    .subscribe(teams => {
		this.teams = teams
	    	this.selectedTeam=this.teams[0];
		this.selectedPos="all";
		this.getPlayers(this.selectedTeam.name, this.selectedPos);
	    });

    }

    updateSquad(): void {
	console.log("Updating Squad with: ".concat(this.selectedPlayer.name))

	this.squadService.addToSquad(this.selectedPlayer.id);
    }


    fillSquad(team_id: number): void {
	console.log("Team ID is ", team_id);
	this.squadService.fillSquad(team_id).
      subscribe(
          team => {
            this.team = team
          }
      );
    }


    ngOnInit() {
        this.getTeams();
    }
}
