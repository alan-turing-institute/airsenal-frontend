import { Component, OnInit } from '@angular/core';
import { PlayerStub } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
    players: PlayerStub[];

    constructor(private playerService: PlayerService) { }

    getPlayers(): void {
	this.playerService.getPlayers()
	    .subscribe(players => this.players = players);
    }


    ngOnInit() {
	this.getPlayers();
    }


}
