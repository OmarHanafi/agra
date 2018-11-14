import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavbarComponent } from './clientnavbar.component';

describe('ClientnavbarComponent', () => {
  let component: ClientNavbarComponent;
  let fixture: ComponentFixture<ClientNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
