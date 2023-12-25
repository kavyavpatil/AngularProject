import { Component, ViewChild } from '@angular/core';
import { sidemenulist } from 'src/app/shared/contants/constants';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { DURATION_LIST } from '../../../shared/contants/constants';
import { SELECT_TERMINAL } from 'src/app/shared/contants/constants';
import {
  STATS_DETAILS_7,
  STATS_DETAILS_30,
  STATS_DETAILS_90,
  STATS_DETAILS_180,
} from '../../../shared/contants/constants';
import {
  SELECT_LOCATION_1,
  SELECT_LOCATION_2,
  SELECT_LOCATION_3,
  SELECT_LOCATION_4,
} from '../../../shared/contants/constants';
import {
  SELECTEDTAG_LOCATION,
  
  COACHABLE_DRIVERS,
  ASSET_LIST
} from 'src/app/shared/contants/constants';
import {
  SELECT_1,
  SELECT_2,
  SELECT_3,
  SELECT_4,
} from '../../../shared/contants/constants';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  public DurationList = DURATION_LIST;
  public SelectedTags = SELECT_TERMINAL;
  public statsLocationdetails = SELECTEDTAG_LOCATION;
  public statsDetails = STATS_DETAILS_7;
  public statsLocation = SELECT_LOCATION_1;
  public statsTag = SELECT_1;
  public assetsList = ASSET_LIST;
  public topCoachableDriversList=COACHABLE_DRIVERS;
  
 
  //public tagtagId=1;
  public durationDays = 30;
  public statsstagId = 1;
  public tagtagId = 1;

  public durationOption(days: any) {
    console.log('home page', days);
    if (days == 7) {
      this.statsDetails = STATS_DETAILS_7;
    } else if (days == 30) {
      this.statsDetails = STATS_DETAILS_30;
    } else if (days == 90) {
      this.statsDetails = STATS_DETAILS_90;
    } else {
      this.statsDetails = STATS_DETAILS_180;
    }
  }

  public selectedtagOption(tagId: any) {
    console.log('home pages', tagId);
    if (tagId == 1) {
      this.statsLocation = SELECT_LOCATION_1;
    } else if (tagId == 2) {
      this.statsLocation = SELECT_LOCATION_2;
    } else if (tagId == 3) {
      this.statsLocation = SELECT_LOCATION_3;
    } else {
      this.statsLocation = SELECT_LOCATION_4;
    }
  }
  public setectedOption(tagId: any) {
    console.log('select Tag', tagId);
    if (tagId == 1) {
      this.statsTag = SELECT_1;
    } else if (tagId == 2) {
      this.statsTag = SELECT_2;
    } else if (tagId == 3) {
      this.statsTag = SELECT_3;
    } else {
      this.statsTag = SELECT_4;
    }
  }
}
