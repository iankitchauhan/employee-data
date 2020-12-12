import { Location } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  email
  dataSource: any;
  loader = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['company_name', 'title', 'start_date','location','description'];
 userData:any;
 currentUrl:any;
  constructor(  private route: ActivatedRoute,    private cocktail: CocktailService, private _location:Location,
    private router:Router
    ) { }

  ngOnInit() {
   this.route.queryParams.subscribe(params => {
      this.email = params;
      console.log(this.email,'what we are getting here');
      this.getUserData(params.email);
      this.getUserName(params.email);
    });
  }
  reloadFilteredData(){
  window.location.reload()
  }

  getUserName(email){
    this.loader = true;
this.cocktail.getUserName(email).subscribe(res=>{
if(res) {
  this.loader = false;
 this.userData =  res;
}
})
  }

  getUserData(email){
this.cocktail.fetchListData(email).subscribe((res:any)=>{
  this.dataSource = new MatTableDataSource<any>(res.past_jobs);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
})
  }

}
