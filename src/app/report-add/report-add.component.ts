import { Component, OnInit } from '@angular/core';
import { Report } from '../_models/report';
import { ReportService } from '../_services/report.service';
import { NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.css']
})
export class ReportAddComponent implements OnInit {

  report:Report;
    statusMessage: string;
    showMsg: number;
    faArrowLeft=faArrowLeft;
    
    constructor(private reportService: ReportService) {
       this.report = new Report();
    
     }
 

    ngOnInit() {
    }

    onSubmit(form:NgForm){
        this.reportService.addReport(this.report).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
      error => {
        this.showMsg = 2; this.statusMessage = "error"
      }, () => { });
    }
    
    // goBack() {
    //     this.location.back();
    //   }

}
