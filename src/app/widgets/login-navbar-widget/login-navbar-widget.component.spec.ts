import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNavbarWidgetComponent } from './login-navbar-widget.component';

describe('LoginNavbarWidgetComponent', () => {
  let component: LoginNavbarWidgetComponent;
  let fixture: ComponentFixture<LoginNavbarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNavbarWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNavbarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
