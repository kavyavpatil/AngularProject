import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, Routes,RouterModule, } from '@angular/router';

export interface PeriodicElement {
  tags:[]
  assetid:string,
  defaultdeviceid:string,
  derviceid:string;
  dutytype:string;
  
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() public assetslistdetails: any = [];
  @Input() public tableName: string = '';
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['assetid', 'tags', 'defaultdeviceid', 'dutytype','derviceid','action'];
  public dataSource = new MatTableDataSource<any>();
  constructor(private router:Router){

  }

  public ngOnInit(): void {
    this.dataSource.data = this.assetslistdetails;
 
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public editadd(){
    this.router.navigate(['/addedit']);
  }
}
// @Input() public topCoachableDrivers:any;
// this.dataSource.data = this.topCoachableDrivers;
