import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { HomeComponent } from './pages/home/home.component';
import { AnnouncementComponent } from '../shared/components/announcement/announcement.component';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { FilterComponent } from '../shared/components/filter/filter.component';
import { StatsComponent } from '../shared/components/stats/stats.component';
import { EventComponent } from '../shared/components/event/event.component';
import { AddeditComponent } from '../shared/components/addedit/addedit.component';
import { AssetslistComponent } from '../shared/components/assetslist/assetslist.component';


@NgModule({
  declarations: [ MatDrawer,
    MatDrawerContainer,
    HomeComponent,
    AnnouncementComponent ,
    DialogComponent,
    FilterComponent,
    StatsComponent,
    EventComponent,
    AddeditComponent ,
    AssetslistComponent
   
    
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatSidenavModule,
   

  ]
})
export class HomeModule { }
