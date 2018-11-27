import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProductComponent } from './adminaddproduct.component';

describe(' AdminAddProductComponent', () => {
  let component: AdminAddProductComponent;
  let fixture: ComponentFixture< AdminAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AdminAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AdminAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
