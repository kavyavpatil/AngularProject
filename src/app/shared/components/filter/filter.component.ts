import { Component,Input,Output,EventEmitter } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { STATS_DETAILS_7 ,  STATS_DETAILS_30 , STATS_DETAILS_90, STATS_DETAILS_180} from '../../../shared/contants/constants';
import { StatsComponent } from '../stats/stats.component';
import { SELECTEDTAG_LOCATION } from '../../../shared/contants/constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() DurationList: any;
  @Input() SelectedTags: any;
  @Input() statsDetails: any;
  @Input() statsLocation:any;
  @Output() durationChangeValue:EventEmitter<any> =new EventEmitter<any>();
  @Output() selectedChangeValue:EventEmitter<any> =new EventEmitter<any>();
  @Output() selectedChangetagValue:EventEmitter<any> =new EventEmitter<any>();
  public durationDays=7;
  public statsstagId=1;
  public tagtagId=1
  public statsLocationdetails=SELECTEDTAG_LOCATION;
  
  event:any;
  public durationChange(event:any){
    this.durationChangeValue.emit(event.value)
  }
  public selectionChange(event:any){
    this.selectedChangeValue.emit(event.value)
  }
  public selectedtagChange(event:any){
    this.selectedChangetagValue.emit(event.value)
  }
}
  

 
  

