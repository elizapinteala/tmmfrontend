import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { RefereeService } from '../_services/referee.service';
import { Referee } from '../_models/referee';
import { faPlus, faSearch, faTrash, faSpellCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-referee-list',
    templateUrl: './referee-list.component.html',
    styleUrls: ['./referee-list.component.css']
})

export class RefereesComponent implements OnInit, AfterViewInit{
    numberOfFilters:number;
    displayedColumns = ['firstName', 'lastName', 'age', 'gender','nationality', 'position', 'filter'];
    refereeList = new MatTableDataSource<Referee>();
    firstNameFilter = new FormControl('');
    lastNameFilter = new FormControl('');
    ageFilter = new FormControl('');
    genderFilter = new FormControl('');
    positionFilter = new FormControl('');
    nationalityFilter= new FormControl('');

    faAdd=faPlus;
    faSearch = faSearch;
    faTrash=faTrash;
    faEdit=faSpellCheck;
    
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(private refereeService: RefereeService, private location: Location,
        private route: ActivatedRoute, private router: Router) { }



    ngOnInit() {
    this.getReferees();
    this.numberOfFilters = 0;
    }

    ngAfterViewInit(): void {
        this.refereeList.sort = this.sort;
    }

    getReferees = () => {
        this.refereeService.getReferees()
            .subscribe(res => {
                this.refereeList.data = res as Referee[];
            })
    }
    // private onSuccess(data) {
    //     this.router.navigate([`players/${data.id}`]);
    // }

    // private handleError(errorMsg) {
    //     console.log("error message: " + errorMsg);
    // }

    public filterReferees = () => {

        this.refereeService.filterReferees(this.firstNameFilter.value, this.lastNameFilter.value, this.ageFilter.value, this.genderFilter.value,  this.positionFilter.value, this.nationalityFilter.value)
            .subscribe(res => {
                this.refereeList.data = res as Referee[];
            })
        this.numberOfFilters = this.refereeService.numberOfFilters;

    }

    goBack() {
        this.location.back();
    }

    public clearFilter = () => {
        this.firstNameFilter = new FormControl('');
        this.lastNameFilter = new FormControl('');
        this.ageFilter = new FormControl('');
        this.genderFilter = new FormControl('');
        this.positionFilter = new FormControl('');
        this.nationalityFilter= new FormControl('');
    
    }
   
}