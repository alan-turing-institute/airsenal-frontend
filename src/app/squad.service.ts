import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player, PlayerStub, TeamStub } from './player';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SquadService {

    private baseUrl = 'http://localhost:5002';
    private squadUrl = this.baseUrl.concat('/team/');
    private playersUrl = this.baseUrl.concat('/team/list');

    resetSquad(): Observable<Object> {
	console.log("Resetting squad");
	return this.http.get(this.squadUrl.concat("new"));
    }

    addToSquad(playerId: number): Observable<Object> {
	console.log("Adding player", playerId);
	return this.http.get(this.squadUrl.concat('/add/').concat(playerId.toString()));
    }

    fillSquad(teamId: number): Observable<Object> {
	console.log("Adding team", teamId);
	var URL = this.squadUrl.concat('fill/').concat(teamId.toString());
	console.log("yo", URL);
	return this.http.get<number[]>(URL);
    }

    getPlayers(): Observable<PlayerStub[]> {
        return this.http.get<PlayerStub[]>(this.playersUrl);
    }

    constructor(
	private http: HttpClient,
	private messageService: MessageService) { }
}
