import { Component, Input, Inject } from '@angular/core';
import { AddeditComponent } from '../addedit/addedit.component';
import { AssetslistComponent } from '../assetslist/assetslist.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popdisplay',
  templateUrl: './popdisplay.component.html',
  styleUrls: ['./popdisplay.component.scss'],
})
export class PopdisplayComponent {
  constructor(
    public dialogRef: MatDialogRef<PopdisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
