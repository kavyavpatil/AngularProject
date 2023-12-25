import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapboxComponent } from './pages/mapbox/mapbox.component';
import { DataserviceService } from '../dataservice.service';
//import MapboxMarkerCluster from '@mapbox/markercluster';

@NgModule({
  declarations: [MapboxComponent],
  imports: [CommonModule],
})
export class MapboxModule {}
