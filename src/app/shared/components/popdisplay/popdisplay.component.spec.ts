import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopdisplayComponent } from './popdisplay.component';

describe('PopdisplayComponent', () => {
  let component: PopdisplayComponent;
  let fixture: ComponentFixture<PopdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopdisplayComponent]
    });
    fixture = TestBed.createComponent(PopdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
