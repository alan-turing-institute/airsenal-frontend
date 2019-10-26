import { Component, OnInit } from '@angular/core';
import { PlayerStub, TeamStub } from '../player';
import { PlayerService } from '../player.service';
import { SquadService } from '../squad.service';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
    players: PlayerStub[];

    constructor(private playerService: PlayerService,
		private squadService: SquadService) { }

    ngOnInit() {
	this.getPlayers();
    }

    getPlayers(): void {
	this.squadService.getPlayers()
	    .subscribe(players => this.players = players);
    }

    removePlayer(player: PlayerStub): void {
	this.squadService.removeFromSquad(player.id)
	    .subscribe();
	this.getPlayers();

    }

    resetSquad(): void {
	this.squadService.resetSquad()
	    .subscribe();
	this.getPlayers();
    }
}
