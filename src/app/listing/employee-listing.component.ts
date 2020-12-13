import { Location } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-category',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeelistComponent implements OnInit {
  email
  dataSource: any;
  loader = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['company_name', 'title', 'start_date', 'location', 'description'];
  userData: any;
  currentUrl: any;
  constructor(private route: ActivatedRoute, private employeeDataService: EmployeeService, private _location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params;
      this.getUserData(params.email);
      this.getUserName(params.email);
    });
  }
  reloadFilteredData() {
    window.location.reload()
  }

  getUserName(email) {
    this.loader = true;
    this.employeeDataService.getData(email, 'user').subscribe(res => {
      if (res) {
        this.loader = false;
        this.userData = res;
      }
    })
  }

  getUserData(email) {
    this.employeeDataService.getData(email, 'user_job_history').subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<any>(res.past_jobs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  addWorkExp() {
    this.router.navigate(['add-user-history'], { queryParams: { email: this.email.email } })

  }

}
