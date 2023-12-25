import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  Router,
  Routes,
  RouterModule,
  ActivatedRoute,
  NavigationExtras,
} from '@angular/router';
import { ASSET_LIST } from '../../contants/constants';
import { MatChipsModule } from '@angular/material/chips';
export interface Asset {
  basic_info: {
    tags: [] | '-';
    assetId: string;
    defaultDeviceId: string;
    derviceId: string;
    dutyType: string;
    installer: string;
    installationTimeStamp: string;
    installationDuration: string;
  };
  lastKnownLocation: {
    latitude: number;
    longitude: number;
  };
}
@Component({
  selector: 'app-assetslist',
  templateUrl: './assetslist.component.html',
  styleUrls: ['./assetslist.component.scss'],
})
export class AssetslistComponent implements OnInit {
  @Input() public assetsList: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: any[] = [
    'assetId',
    'tags',
    'defaultDeviceId',
    'dutyType',
    'derviceId',
    'action',
  ];
  public dataSource = new MatTableDataSource<any>();
  asset: any;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.dataSource.data = this.assetsList;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public editadd(assetId: string) {
    this.router.navigate(['/addedit'], {
      queryParams: {
        assetId: assetId,
        action: 'Edit',
      },
    });
  }
  public addasset() {
    this.router.navigate(['/addedit'], {
      queryParams: {
        action: 'Add',
      },
    });
  }
}
