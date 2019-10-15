import { Component, OnInit } from '@angular/core';
import { PlayerStub } from "../player";
import { PlayerService } from "../player.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    players: PlayerStub[] = [];

    constructor(private playerService: PlayerService) { }

    ngOnInit() {
	this.getPlayers();
    }

    getPlayers(): void {
	this.playerService.getPlayers("all","all")
	    .subscribe(players => this.players = players.slice(1,5));
    }


}
