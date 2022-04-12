import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from '../_models/report';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../_services/report.service';
import { faPlus, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
 

  numberOfFilters:number;
  displayedColumns = ['playerName', 'result', 'aces','doubleFault', 'forhendHits','vollies', 'winnerPoints', 'unforcedErros', 'backhandHits', 'challanges', 'winnerPointsFirstService', 'winnerPointsSecondService'];
  reporttList = new MatTableDataSource<Report>();
  playerNameFilter = new FormControl('');
  resultFilter = new FormControl('');
  achesFilter = new FormControl('');
  doubleFaultFilter = new FormControl('');
  forhendHitsFilter = new FormControl('');
  winnerPointsFilter = new FormControl('');
  unforcedErrosFilter = new FormControl('');
  backendHitsFilter = new FormControl('');
  volesFilter = new FormControl('');
  challangesFilter = new FormControl('');
  winnerPointsFirstServiceFilter = new FormControl('');
  winnerPointsSecondServiceFilter = new FormControl('');

  faPlus=faPlus;
  faGraphic=faChartBar;
  
 
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private reportService: ReportService,
      private route: ActivatedRoute, private router: Router) { }



  ngOnInit() {
  this.getReports();
  this.numberOfFilters = 0;

  }

  ngAfterViewInit(): void {
     
      this.reporttList.sort = this.sort;
  }

  getReports = () => {
      this.reportService.getReports()
          .subscribe(res => {
              this.reporttList.data = res as Report[];
          })
  }
  

  public filterCourts = () => {

      this.reportService.filterReports(this.playerNameFilter.value,this.resultFilter.value, this.doubleFaultFilter.value, this.forhendHitsFilter.value,this.winnerPointsFilter.value,this.unforcedErrosFilter.value, this.backendHitsFilter.value, this.volesFilter.value, this.challangesFilter.value, this.winnerPointsFirstServiceFilter.value, this.winnerPointsSecondServiceFilter.value, this.achesFilter.value )
          .subscribe(res => {
              this.reporttList.data = res as Report[];
          })
      this.numberOfFilters = this.reportService.numberOfFilters;

  }

  // goBack() {
  //     this.location.back();
  // }

  public clearFilter = () => {
    this.playerNameFilter = new FormControl('');
    this.resultFilter = new FormControl('');
    this.achesFilter = new FormControl('');
    this.doubleFaultFilter = new FormControl('');
    this.forhendHitsFilter = new FormControl('');
    this.winnerPointsFilter = new FormControl('');
    this.unforcedErrosFilter = new FormControl('');
    this.backendHitsFilter = new FormControl('');
    this.volesFilter = new FormControl('');
    this.challangesFilter = new FormControl('');
    this.winnerPointsFirstServiceFilter = new FormControl('');
    this.winnerPointsSecondServiceFilter = new FormControl('');
  }
 

}
