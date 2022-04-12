import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Court } from '../_models/court';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CourtService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private courtUrl: string;

    public numberOfFilters: number;
    router: any;
    courtService: CourtService;

    constructor(private http: HttpClient) {
        this.courtUrl = environment.tmmApiUrl + "courts";
    }
    private log(message: string) {
        console.log(`CourtService: ${message}`);
    }

    addCourt(court: Court): Observable<Court> {
        return this.http.post<Court>(this.courtUrl, court, this.httpOptions)
        .pipe(
        tap((newCourt: Court) => this.log(`added court w/ id=${newCourt.id}`)));
        
    }

    getCourts():Observable<Court[]>{
        return this.http.get<Court[]>(this.courtUrl);

    }

    /**
     * Method to get one court
     * @param id 
     */
    public getCourt(id: number): Observable<Court> {
        return this.http.get<Court>(`${this.courtUrl}/${id}`);
    }


    editCourt(editCourt: Court): Observable<Court> {
        return this.http.put<Court>(this.courtUrl + "/" + editCourt.id, editCourt, this.httpOptions).pipe(
            tap(_ => this.log('edited court with ID: ' + editCourt.id)),
            catchError(this.handleError<any>('editCourt', []))
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

    filterCourts(courtName: string, capacity: number, surface: string, avalability: number ): Observable<Court[]> {
        this.numberOfFilters = 0;
        var url = "";
        if (courtName) {
            url += "&courtName=" + courtName;
            this.numberOfFilters++;
        }
        if (capacity) {
            url += "&capacity=" + capacity;
            this.numberOfFilters++;
        }
        if (surface) {
            url += "&surface=" + surface;
            this.numberOfFilters++;
        }
        if (avalability) {
            url += "&avalability=" + avalability;
            this.numberOfFilters++;
        }
       

        if (url != "") {
            url = "?" + url;
        }
        return this.http.get<Court[]>(this.courtUrl + url);
    }

}