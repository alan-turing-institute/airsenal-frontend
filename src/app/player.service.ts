import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    private baseUrl = 'http://localhost:5002';  // URL to web api
    private playersUrl = this.baseUrl.concat('/players/all/all');
    private playerUrl = this.baseUrl.concat('/player/');

    getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.playersUrl)
    }

    getPlayer(id: number): Observable<Player> {
        console.log("Will fetch player", id);
        return this.http.get<Player>(this.playerUrl.concat(id.toString()));

    }
    constructor(
	private http: HttpClient,
	private messageService: MessageService) { }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
    
}
