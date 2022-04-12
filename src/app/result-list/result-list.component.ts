import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from '../_models/result';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
import { ResultService } from '../_services/result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  numberOfFilters:number;
  displayedColumns = ['matchName', 'winner1Name', 'duration', 'audience','round'];
  resultList = new MatTableDataSource<Result>();
  // matchNameFilter = new FormControl('');
  // winnerNameFilter = new FormControl('');
  // durationFilter = new FormControl('');
  // audienceFilter = new FormControl('');
  // roundFilter = new FormControl('');

  faAdd=faPlus;
  

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.getResult();
  }

  ngAfterViewInit(): void {
    this.resultList.sort = this.sort;
}

getResult = () => {
    this.resultService.getResults()
        .subscribe(res => {
            this.resultList.data = res as Result[];
        })
}
}
