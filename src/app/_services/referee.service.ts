import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from '../_models/player';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Referee } from '../_models/referee';
@Injectable({
    providedIn: 'root'
})
export class RefereeService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private refereerUrl: string;

    public numberOfFilters: number;
    router: any;
    refereeService: RefereeService;

    constructor(private http: HttpClient) {
        this.refereerUrl = environment.tmmApiUrl + "referees";
    }
    addReferee(referee: Referee): Observable<Referee> {
        return this.http.post<Referee>(this.refereerUrl, referee, this.httpOptions)
        .pipe(
        tap((newReferee: Referee) => this.log(`added referee w/ id=${newReferee.id}`)));
        
    }

    getReferees():Observable<Referee[]>{
        return this.http.get<Referee[]>(this.refereerUrl);

    }
    private log(message: string) {
        console.log(`RefereeService: ${message}`);
    }

    /**
     * Method to get one referee
     * @param id 
     */
    public getReferee(id: number): Observable<Referee> {
        return this.http.get<Referee>(`${this.refereerUrl}/${id}`);
    }


    filterReferees(firtsName: string, lastName: string, gender: string, age: number, nationality: string, position:string): Observable<Referee[]> {
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
       
        if (nationality) {
            url += "&nationality=" + nationality;
            this.numberOfFilters++;
        }
       
        if (position) {
            url += "&position=" + position;
            this.numberOfFilters++;
        }

        if (url != "") {
            url = "?" + url;
        }
        return this.http.get<Referee[]>(this.refereerUrl + url);
    }

    editReferee(editReferee: Referee): Observable<Referee> {
        return this.http.put<Referee>(this.refereerUrl + "/" + editReferee.id, editReferee, this.httpOptions).pipe(
            tap(_ => this.log('edited referee with ID: ' + editReferee.id)),
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


}