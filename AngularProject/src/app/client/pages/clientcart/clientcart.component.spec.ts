import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcartComponent } from './clientcart.component';

describe('ClientcartComponent', () => {
  let component: ClientcartComponent;
  let fixture: ComponentFixture<ClientcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
