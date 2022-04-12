import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TournamentMatch } from '../_models/tournamentMatch';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Match } from '../_models/match';


@Injectable({
    providedIn: 'root'
})
export class TournamentMatchService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private matchUrl: string;

    public numberOfFilters: number;
    router: any;
    tournamentMatchService: TournamentMatchService;

    constructor(private http: HttpClient) {
        this.matchUrl = environment.tmmApiUrl + "matches";
    }

    addMatch(match: TournamentMatch): Observable<TournamentMatch> {
        return this.http.post<TournamentMatch>(this.matchUrl, match, this.httpOptions)
        .pipe(
        tap((newMatch: TournamentMatch) => this.log(`added match w/ id=${newMatch.id}`)));
        
    }

    getMatches():Observable<TournamentMatch[]>{
        return this.http.get<TournamentMatch[]>(this.matchUrl);

    }
    private log(message: string) {
        console.log(`MatchService: ${message}`);
    }

    /**
     * Method to get one match
     * @param id 
     */
    public getMatch(id: number): Observable<TournamentMatch> {
        return this.http.get<TournamentMatch>(`${this.matchUrl}/${id}`);
    }

    filterMatches(
        namePlayer1:number,
        namePlayer2:number,
        // namePlayer3:number,
        // namePlayer4:number,
        matchDateF:Date,
        matchType:string,
        tour:string,
        courtName:number,
        refereeName:number,
        status:string
    ): Observable<TournamentMatch[]> {
        this.numberOfFilters = 0;
        var url = "";
        if (namePlayer1) {
            url += "&namePlayer1=" + namePlayer1;
            this.numberOfFilters++;
        }
        if (namePlayer2) {
            url += "&namePlayer2=" + namePlayer2;
            this.numberOfFilters++;
        }
        // if (namePlayer3) {
        //     url += "&namePlayer3=" + namePlayer3;
        //     this.numberOfFilters++;
        // }
        // if (namePlayer4) {
        //     url += "&namePlayer4=" + namePlayer4;
        //     this.numberOfFilters++;
        // }
        if (matchDateF) {
            url += "&matchDateF=" + matchDateF;
            this.numberOfFilters++;
        }
        if (matchType) {
            url += "&matchType=" + matchType;
            this.numberOfFilters++;
        }
        if (tour) {
            url += "&tour=" + tour;
            this.numberOfFilters++;
        }
        if (courtName) {
            url += "&courtName=" + courtName;
            this.numberOfFilters++;
        }
        if (refereeName) {
            url += "&refereeName=" + refereeName;
            this.numberOfFilters++;
        }
        if (status) {
            url += "&status=" + status;
            this.numberOfFilters++;
        }

        if (url != "") {
            url = "?" + url;
        }
        return this.http.get<TournamentMatch[]>(this.matchUrl + url);
    }



    editMatch(matchPlayer: TournamentMatch): Observable<TournamentMatch> {
        return this.http.put<TournamentMatch>(this.matchUrl + "/" + matchPlayer.id, matchPlayer, this.httpOptions).pipe(
            tap(_ => this.log('edited match with ID: ' + matchPlayer.id)),
            catchError(this.handleError<any>('edit Match', []))
        );
    }

    
    // createMatchTable(tournamentMatch1: TournamentMatch, tournamentMatch2: TournamentMatch): Observable<TournamentMatch> {
    //     return this.http.post<TournamentMatch>(this.matchUrl + "/table", {tournamentMatch1: tournamentMatch1, tournamentMatch2: tournamentMatch2}, this.httpOptions)
    //     .pipe(
    //     tap((newMatch: TournamentMatch) => this.log(`added match w/ winner=${newMatch.winner}`)));
       
    // }

    createMatchTable(tournamanet:Match): Observable<Match> {
        return this.http.post<Match>(this.matchUrl + "/table", tournamanet, this.httpOptions)
        .pipe(
        tap((newMatch: Match) => this.log(`added match w/ winner=${newMatch.tournamentMatch1}`)));
       
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            window.alert(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }



}