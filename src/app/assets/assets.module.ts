import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class AssetsModule { }
