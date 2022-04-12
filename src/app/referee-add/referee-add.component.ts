import { OnInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Referee } from '../_models/referee';
import { RefereeService } from '../_services/referee.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../_shared-models/dropdown';



@Component({
    selector: 'app-referee-add',
    templateUrl: './referee-add.component.html',
    styleUrls: ['./referee-add.component.css']
  })

  export class RefereeComponent  {
    
    referee:Referee;
    statusMessage: string;
    showMsg: number;
    
    faArrowLeft = faArrowLeft;
    
    constructor(private refereeService: RefereeService, private location: Location) {
       this.referee = new Referee();
    
     }

 

     genderValue: Dropdown[]=[
      { value: "FEMALE", viewValue: 'female' },
      { value: "MALE", viewValue: 'male' }
    ];


    positionValue: Dropdown[]=[
      { value: "line", viewValue: 'line' },
      { value: "chair", viewValue: 'chair' }
    ];

    ngOnInit() {
    }

    onSubmit(form:NgForm){
        this.refereeService.addReferee(this.referee).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
      error => {
        this.showMsg = 2; this.statusMessage = "error"
      }, () => { });
    }
    
    goBack() {
        this.location.back();
      }
      
  }