import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
    players: Player[];

    constructor(private playerService: PlayerService) { }

    getPlayers(): void {
	this.playerService.getPlayers()
	    .subscribe(players => this.players = players);
    }


    ngOnInit() {
	this.getPlayers();
    }


}
