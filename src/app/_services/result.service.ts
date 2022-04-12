import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from '../_models/result';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ResultService{
httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
private resultUrl: string;

public numberOfFilters: number;
router: any;
resultService: ResultService;

constructor(private http: HttpClient) {
    this.resultUrl = environment.tmmApiUrl + "results";
}

addResut(result: Result): Observable<Result> {
    return this.http.post<Result>(this.resultUrl, result, this.httpOptions)
    .pipe(
    tap((newResult: Result) => this.log(`added result w/ id=${newResult.id}`)));
    
}

getResults():Observable<Result[]>{
    return this.http.get<Result[]>(this.resultUrl);

}
private log(message: string) {
    console.log(`ResultService: ${message}`);
}

/**
 * Method to get one result
 * @param id 
 */
public getResult(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.resultUrl}/${id}`);
}


// filterPlayers(firtsName: string, lastName: string, gender: string, age: number, ranking: number, favourite: string, coach:number, nationality: string): Observable<Player[]> {
//     this.numberOfFilters = 0;
//     var url = "";
//     if (firtsName) {
//         url += "&firtsName=" + firtsName;
//         this.numberOfFilters++;
//     }
//     if (lastName) {
//         url += "&lastName=" + lastName;
//         this.numberOfFilters++;
//     }
//     if (gender) {
//         url += "&gender=" + gender;
//         this.numberOfFilters++;
//     }
//     if (age) {
//         url += "&age=" + age;
//         this.numberOfFilters++;
//     }
//     if (ranking) {
//         url += "&ranking=" + ranking;
//         this.numberOfFilters++;
//     }
//     if (nationality) {
//         url += "&nationality=" + nationality;
//         this.numberOfFilters++;
//     }
//     if (favourite) {
//         url += "&favourite=" + favourite;
//         this.numberOfFilters++;
//     }
//     if (coach) {
//         url += "&coach=" + coach;
//         this.numberOfFilters++;
//     }

//     if (url != "") {
//         url = "?" + url;
//     }
//     return this.http.get<Player[]>(this.playerUrl + url);
// }
}