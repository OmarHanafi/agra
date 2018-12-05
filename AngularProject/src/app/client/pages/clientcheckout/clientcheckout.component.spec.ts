import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcheckoutComponent } from './clientcheckout.component';

describe('ClientcheckoutComponent', () => {
  let component: ClientcheckoutComponent;
  let fixture: ComponentFixture<ClientcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
