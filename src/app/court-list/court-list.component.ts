import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { Court } from '../_models/court';
import { CourtService } from '../_services/court.service';
import { faSearch, faTrash, faEdit, faUserPlus, faPlus, faSpellCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-court-list',
    templateUrl: './court-list.component.html',
    styleUrls: ['./court-list.component.css']
})

export class CourtsComponent implements OnInit, AfterViewInit{
    numberOfFilters:number;
    displayedColumns = ['courtName', 'surface', 'avalability', 'capacity', 'filter'];
    courtList = new MatTableDataSource<Court>();
    capacityFilter = new FormControl('');
    avalabilityFilter = new FormControl('');
    surfaceFilter = new FormControl('');
    courtNameFilter = new FormControl('');

    faEdit = faSpellCheck;
    faSearch = faSearch;
    faTrash=faTrash;
    faAdd=faPlus;
    
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(private courtService: CourtService, private location: Location,
        private route: ActivatedRoute, private router: Router) { }



    ngOnInit() {
    this.getCourts();
    this.numberOfFilters = 0;
    }

    ngAfterViewInit(): void {
        this.courtList.sort = this.sort;
    }

    getCourts = () => {
        this.courtService.getCourts()
            .subscribe(res => {
                this.courtList.data = res as Court[];
            })
    }
    // private onSuccess(data) {
    //     this.router.navigate([`players/${data.id}`]);
    // }

    // private handleError(errorMsg) {
    //     console.log("error message: " + errorMsg);
    // }

    public filterCourts = () => {

        this.courtService.filterCourts(this.courtNameFilter.value,this.surfaceFilter.value, this.capacityFilter.value, this.avalabilityFilter.value, )
            .subscribe(res => {
                this.courtList.data = res as Court[];
            })
        this.numberOfFilters = this.courtService.numberOfFilters;

        
    }

    goBack() {
        this.location.back();
    }

    public clearFilter = () => {
        this.courtNameFilter = new FormControl('');
        this.capacityFilter = new FormControl('');
        this.avalabilityFilter = new FormControl('');
        this.surfaceFilter = new FormControl('');
    }

    editCourt(editcourt: Court): void {

        this.courtService.editCourt(editcourt).subscribe();
    }

    refresh(): void {
        window.location.reload();
    }
   
}