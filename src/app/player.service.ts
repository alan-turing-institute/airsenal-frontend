import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    getPlayers(): Observable<Player[]> {
	this.messageService.add("PlayerService: fetched players");
	return of(PLAYERS);
    }
    getPlayer(id: number): Observable<Player> {
	this.messageService.add(`PlayerService: fetched player id=${id}`);
	return of(PLAYERS.find(player => player.id ===id));
    }
    constructor(
	private http: HttpClient,
	private messageService: MessageService) { }
}
