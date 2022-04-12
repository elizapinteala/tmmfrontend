import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'
import { Court } from '../_models/court';
import { CourtService } from '../_services/court.service';

@Component({
    selector: 'app-court-edit',
    templateUrl: './court-edit.component.html',
    styleUrls: ['./court-edit.component.css']
})


export class EditCourtComponent implements OnInit {

    editcourt:Court;
    showMsg: number;

    constructor(private courtService: CourtService, private route: ActivatedRoute, private router: Router, location:Location) {

    }

    ngOnInit() {
        this.getCourt();
    }

    getCourt() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.courtService.getCourt(id).subscribe(editCourt => {
            console.log(editCourt);
            this.editcourt = editCourt
        });
    }

    editCourt(editcourt: Court): void {

        if(editcourt.avalability=='avalable'){
            editcourt.avalability='unavalable';
        }
        else{
            editcourt.avalability='avalable';
        }
     
        this.courtService.editCourt(editcourt).subscribe(data => { this.showMsg = 1; },
            error => {
                this.showMsg = 2;
            }, () => { });


    }


    // goBack() {
    //     this.location.back();
    // }

    reload() {
        location.reload();
    }

}
