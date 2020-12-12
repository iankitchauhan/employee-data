import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  email
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['company_name', 'title', 'start_date','location','description'];
  @Input() set categoryBaseData(data) {
    console.log('called changes')
   // this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  constructor(  private route: ActivatedRoute,    private cocktail: CocktailService
    ) { }

  ngOnInit() {
   this.route.queryParams.subscribe(params => {
      this.email = params;
      console.log(this.email,'what we are getting here');
      this.getUserData(params.email)
    });
  }

  getUserData(email){
this.cocktail.fetchListData(email).subscribe((res:any)=>{
  console.log(res,'responsed data fetched');
  this.dataSource = new MatTableDataSource<any>(res.past_jobs);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
})
  }

}
