import { Component, OnInit } from '@angular/core';
import { Result } from '../_models/result';
import { ResultService } from '../_services/result.service';
import { NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result-add',
  templateUrl: './result-add.component.html',
  styleUrls: ['./result-add.component.css']
})
export class ResultAddComponent implements OnInit {

  result:Result;
  statusMessage: string;
  showMsg: number;

  faArrowLeft = faArrowLeft;
  
  constructor(private resultService: ResultService) {
      this.result = new Result();
  
    }

  ngOnInit(): void {
  }

  
  onSubmit(form:NgForm){
    this.resultService.addResut(this.result).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}


}
