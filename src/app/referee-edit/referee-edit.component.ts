import { Component, OnInit } from '@angular/core';
import { Referee } from '../_models/referee';
import { RefereeService } from '../_services/referee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-referee-edit',
  templateUrl: './referee-edit.component.html',
  styleUrls: ['./referee-edit.component.css']
})
export class RefereeEditComponent implements OnInit {
  editreferee:Referee;
  showMsg: number;

  faArrowLeft = faArrowLeft;

  constructor(private refereeService: RefereeService, private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.getReferee();
  }

  getReferee() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.refereeService.getReferee(id).subscribe(editReferee => {
          console.log(editReferee);
          this.editreferee = editReferee
      });
  }

  editReferee(editreferee: Referee): void {

      console.log("editreferee ----------");
      console.log(this.editreferee);
   
      this.refereeService.editReferee(this.editreferee).subscribe(data => { this.showMsg = 1; },
          error => {
              this.showMsg = 2;
          }, () => { });


  }

 
}
