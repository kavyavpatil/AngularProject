import { Component,EventEmitter,Input,Output} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, Routes,RouterModule, } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() ismenusidelistEmit :EventEmitter<any>= new EventEmitter();
  public toggleSideMenu(){
    this.ismenusidelistEmit.emit()
  }
}

  
  

 
 

  



