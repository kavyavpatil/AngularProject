import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetslistComponent } from './assetslist.component';

describe('AssetslistComponent', () => {
  let component: AssetslistComponent;
  let fixture: ComponentFixture<AssetslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetslistComponent]
    });
    fixture = TestBed.createComponent(AssetslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
