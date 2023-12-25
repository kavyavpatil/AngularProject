import { Component, Input,OnChanges,SimpleChanges } from '@angular/core';
import { Router, Routes,RouterModule, } from '@angular/router';
import { sidemenulist } from '../../contants/constants';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent  {
  public sidemenuList=sidemenulist;
  selectedMenuItem:string | null=null;
  constructor(private router:Router){

  }
  menulist(menu:string){
    console.log("clicked", menu);
    this.router.navigate([menu]);
    this.selectedMenuItem = menu;
  }
}




