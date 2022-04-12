import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Report } from '../_models/report';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ReportService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private reportUrl: string;

    

    public numberOfFilters: number;
    router: any;
    reportService: ReportService;

    constructor(private http: HttpClient) {
        this.reportUrl = environment.tmmApiUrl + "raports";
    }
    private log(message: string) {
        console.log(`ReportService: ${message}`);
    }

    addReport(report: Report): Observable<Report> {
        return this.http.post<Report>(this.reportUrl, report, this.httpOptions)
        .pipe(
        tap((newReport: Report) => this.log(`added report w/ id=${newReport.id}`)));
        
    }

    getReports():Observable<Report[]>{
        return this.http.get<Report[]>(this.reportUrl);

    }

    /**
     * Method to get one court
     * @param id 
     */
    public getCourt(id: number): Observable<Report> {
        return this.http.get<Report>(`${this.reportUrl}/${id}`);
    }


    filterReports(winnerPointsSecondService:number,winnerPointsFirstService:number, backendHits: number, challanges: number,voles:number,playerName:string, result: string, aches: number,doubleFault:number, forhendHits:number, winnerPoints:number, unforcedErros:number ): Observable<Report[]> {
        this.numberOfFilters = 0;
        var url = "";

        if (winnerPointsSecondService) {
            url += "&winnerPointsSecondService=" + winnerPointsSecondService;
            this.numberOfFilters++;
        }
        
        if (winnerPointsFirstService) {
            url += "&winnerPointsFirstService=" + winnerPointsFirstService;
            this.numberOfFilters++;
        }
        if (backendHits) {
            url += "&backendHits=" + backendHits;
            this.numberOfFilters++;
        }
        if (backendHits) {
            url += "&backendHits=" + backendHits;
            this.numberOfFilters++;
        }

        if (challanges) {
            url += "&challanges=" + challanges;
            this.numberOfFilters++;
        }
        if (voles) {
            url += "&voles=" + voles;
            this.numberOfFilters++;
        }
        if (status) {
            url += "&status=" + status;
            this.numberOfFilters++;
        }

        if (forhendHits) {
            url += "&forhendHits=" + forhendHits;
            this.numberOfFilters++;
        }
       

        if (playerName) {
            url += "&playerName=" + playerName;
            this.numberOfFilters++;
        }
        if (aches) {
            url += "&aches=" + aches;
            this.numberOfFilters++;
        }
        if (doubleFault) {
            url += "&doubleFault=" + doubleFault;
            this.numberOfFilters++;
        }

        if (winnerPoints) {
            url += "&winnerPoints=" + winnerPoints;
            this.numberOfFilters++;
        }


        if (result) {
            url += "&result=" + result;
            this.numberOfFilters++;
        }

        if (unforcedErros) {
            url += "&unforcedErros=" + unforcedErros;
            this.numberOfFilters++;
        }
       
       

        if (url != "") {
            url = "?" + url;
        }
        return this.http.get<Report[]>(this.reportUrl + url);
    }

}