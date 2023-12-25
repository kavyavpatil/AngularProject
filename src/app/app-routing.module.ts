import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/pages/assets/assets.component';
import { HomeComponent } from './home/pages/home/home.component';
import { AddeditComponent } from './shared/components/addedit/addedit.component';
import { MapboxComponent } from './mapbox/pages/mapbox/mapbox.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'addedit', component: AddeditComponent },
  { path: 'mapbox', component: MapboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  AssetsComponent,
  MapboxComponent,
];
