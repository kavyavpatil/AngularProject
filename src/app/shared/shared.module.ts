import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { MatCardModule } from '@angular/material/card';
import { StatsComponent } from './components/stats/stats.component';
import { EventComponent } from './components/event/event.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AddeditComponent } from './components/addedit/addedit.component';
import { AssetslistComponent } from './components/assetslist/assetslist.component';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PopdisplayComponent } from './components/popdisplay/popdisplay.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    AnnouncementComponent,
    ViewdetailsComponent,
    DialogComponent,
    FilterComponent,
    StatsComponent,
    EventComponent,
    AddeditComponent,
    AssetslistComponent,
    PopdisplayComponent,
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSidenavModule,
    RouterModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    FlexLayoutModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    AnnouncementComponent,
    ViewdetailsComponent,
    DialogComponent,
    FilterComponent,
    StatsComponent,
    EventComponent,
    AddeditComponent,
    AssetslistComponent,
    PopdisplayComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class SharedModule {}
