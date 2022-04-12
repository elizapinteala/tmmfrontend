import { OnInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Court } from '../_models/court';
import { CourtService } from '../_services/court.service';
import { Dropdown } from '../_shared-models/dropdown';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-court-add',
    templateUrl: './court-add.component.html',
    styleUrls: ['./court-add.component.css']
  })


  export class CourtComponent  {
    
    court:Court;
    statusMessage: string;
    showMsg: number;
    

    faArrowLeft = faArrowLeft;

    constructor(private courtService: CourtService, private location: Location) {
       this.court = new Court();
    
     }
 
     surfaceValue: Dropdown[] = [
      { value: "hard", viewValue: 'hard' },
      { value: "clay", viewValue: 'clay' },
      { value: "grass", viewValue: 'grass' }
    ];

    avalabilityValue: Dropdown[]=[
      { value: "avalable", viewValue: 'avalable' },
      { value: "unavalable", viewValue: 'unavalable' }
    ];

    ngOnInit() {
    }

    onSubmit(form:NgForm){
        this.courtService.addCourt(this.court).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
      error => {
        this.showMsg = 2; this.statusMessage = "error"
      }, () => { });
    }
    
    goBack() {
        this.location.back();
      }
      
  }