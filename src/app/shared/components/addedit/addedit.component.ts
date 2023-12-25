import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ASSET_LIST } from '../../contants/constants';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AssetslistComponent } from '../assetslist/assetslist.component';
import { Asset } from '../assetslist/assetslist.component';
import { PeriodicElement } from '../event/event.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopdisplayComponent } from '../popdisplay/popdisplay.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.scss'],
})
export class AddeditComponent implements OnInit {
  public Edit = {
    readonly: true,
  };
  // isEditMode: boolean = false;
  public assetId: string;
  public assetDetails: any;
  public assetsList = ASSET_LIST;
  public action = 'Add';
  public assetForm: FormGroup;
  public dutyTypeList = ['Heavy', 'Medium', 'Light'];
  public tagsList = ['south', 'north', 'east', 'west'];
  public driverSideSelectionList = ['Right', 'Left'];
  public picker: any;

  public isDisabled: boolean = true;

  // @Input() public assetId:any;
  // @ViewChild('picker') picker!: MatDatepicker<any>;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.action = params['action'];
      if (this.action === 'Add') {
        this.createForm();
      }
      if (this.action === 'Edit') {
        this.assetId = params['assetId'];
        console.log('Asset ID:', this.assetId);
        console.log(params['assetList']);
        this.assetDetails = this.findAssetDetails(this.assetId);
        if (this.assetDetails) {
          console.log('Asset Details:', this.assetDetails);
        } else {
          console.log('Asset not found');
        }
        this.createForm();
      }
    });
  }

  private findAssetDetails(assetId: string): any {
    return this.assetsList.find(
      (element: any) => element.basic_info.assetId === assetId
    );
  }
  public backtohome() {
    this.router.navigate(['/home']);
  }

  private createForm() {
    this.assetForm = this.fb.group({
      assetId: new FormControl(
        {
          value:
            this.action === 'Add'
              ? ''
              : this.assetDetails.basic_info.assetId || '',
          disabled: this.action === 'Edit',
        },

        [Validators.required, Validators.maxLength(15)]
      ),

      derviceId: new FormControl(
        this.action === 'Add' ? '' : this.assetDetails.basic_info.derviceId,
        [Validators.required, Validators.maxLength(15)]
      ),
      dutyType: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.basic_info.dutyType ?? '-',
        [Validators.required]
      ),
      defaultDeviceId: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.basic_info.defaultDeviceId ?? '-',
        [Validators.required, Validators.maxLength(15)]
      ),

      installer: new FormControl(
        this.action === 'Add' ? '' : this.assetDetails.basic_info.installer,
        [Validators.required, Validators.maxLength(15)]
      ),
      installationTimeStamp: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.basic_info.installationTimeStamp,
        [Validators.required, Validators.maxLength(25)]
      ),
      installationDuration: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.basic_info.installationDuration,
        [Validators.required, Validators.maxLength(10)]
      ),
      sdkVersion: new FormControl(
        this.action === 'Add' ? '' : this.assetDetails.advanced_info.sdkVersion,
        [Validators.required, Validators.maxLength(10)]
      ),
      firmwareVersion: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.advanced_info.firmwareVersion,
        [Validators.required, Validators.maxLength(10)]
      ),
      tags: new FormControl(
        this.action === 'Add' ? '' : this.assetDetails.advanced_info.tags,
        [Validators.required]
      ),
      alertVolume: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.advanced_info.alertVolume,
        [Validators.required, Validators.maxLength(10)]
      ),
      driverSideSelection: new FormControl(
        this.action === 'Add'
          ? ''
          : this.assetDetails.advanced_info.driverSideSelection,
        [Validators.required]
      ),
    });
  }

  public savedetails() {
    console.log('form value', this.assetForm.value);

    const dialogRef = this.dialog.open(PopdisplayComponent, {
      data: this.assetForm.value,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
