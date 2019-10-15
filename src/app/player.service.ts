import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player, PlayerStub, TeamStub } from './player';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    private baseUrl = 'http://localhost:5002';  // URL to web api
    private playersUrl = this.baseUrl.concat('/players/');
    private playerUrl = this.baseUrl.concat('/player/');
    private teamsUrl = this.baseUrl.concat('/teams');

    getPlayers(selTeam: string, selPos: string): Observable<PlayerStub[]> {
        return this.http.get<PlayerStub[]>(this.playersUrl.concat(selTeam).concat('/').concat(selPos));
    }

    getPlayer(id: number): Observable<Player> {
        console.log("Will fetch player", id);
        return this.http.get<Player>(this.playerUrl.concat(id.toString()));

    }

    getTeams(): Observable<TeamStub[]> {
	return this.http.get<TeamStub[]>(this.teamsUrl);
    }

    constructor(
	private http: HttpClient,
	private messageService: MessageService) { }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`PlayerService: ${message}`);
    }

}
