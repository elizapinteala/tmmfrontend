import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from '../_models/player';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class PlayerService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private playerUrl: string;

    public numberOfFilters: number;
    router: any;
    playerService: PlayerService;

    constructor(private http: HttpClient) {
        this.playerUrl = environment.tmmApiUrl + "players";
    }
    addPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(this.playerUrl, player, this.httpOptions)
        .pipe(
        tap((newPlayer: Player) => this.log(`added player w/ id=${newPlayer.id}`)));
        
    }

    getPlayers():Observable<Player[]>{
        return this.http.get<Player[]>(this.playerUrl);

    }
    private log(message: string) {
        console.log(`PlayerService: ${message}`);
    }

    /**
     * Method to get one player
     * @param id 
     */
    public getPlayer(id: number): Observable<Player> {
        return this.http.get<Player>(`${this.playerUrl}/${id}`);
    }


    editPlayer(editPlayer: Player): Observable<Player> {
        return this.http.put<Player>(this.playerUrl + "/" + editPlayer.id, editPlayer, this.httpOptions).pipe(
            tap(_ => this.log('edited player with ID: ' + editPlayer.id)),
            catchError(this.handleError<any>('editPLayer', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            window.alert(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    filterPlayers(firtsName: string, lastName: string, gender: string, age: number, ranking: number, favourite: string, coach:number, nationality: string): Observable<Player[]> {
        this.numberOfFilters = 0;
        var url = "";
        if (firtsName) {
            url += "&firtsName=" + firtsName;
            this.numberOfFilters++;
        }
        if (lastName) {
            url += "&lastName=" + lastName;
            this.numberOfFilters++;
        }
        if (gender) {
            url += "&gender=" + gender;
            this.numberOfFilters++;
        }
        if (age) {
            url += "&age=" + age;
            this.numberOfFilters++;
        }
        if (ranking) {
            url += "&raking=" + ranking;
            this.numberOfFilters++;
        }
        if (nationality) {
            url += "&nationality=" + nationality;
            this.numberOfFilters++;
        }
        if (favourite) {
            url += "&favourite=" + favourite;
            this.numberOfFilters++;
        }
        if (coach) {
            url += "&coach=" + coach;
            this.numberOfFilters++;
        }

        if (url != "") {
            url = "?" + url;
        }
        return this.http.get<Player[]>(this.playerUrl + url);
    }


}