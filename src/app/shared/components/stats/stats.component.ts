import { Component,Input,Output,EventEmitter } from '@angular/core';
import { STATS_DETAILS_7 } from '../../contants/constants';
import { FilterComponent } from '../filter/filter.component';
import { SELECT_LOCATION_1} from '../../contants/constants';
import { SELECT_1 } from '../../contants/constants';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  @Input() statsDetails: any;
  @Input() statsLocation:any;
@Input()  statsTag :any;
  
  
}
