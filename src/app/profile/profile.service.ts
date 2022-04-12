import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ProfileService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private resultUrl: string;
    resultService: ProfileService;

    constructor(private http: HttpClient) {
        this.resultUrl = environment.tmmApiUrl;
    }

    
    private log(message: string) {
        console.log(`ProfileService: ${message}`);
    }

  


}

