import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAPrComponent } from './logo-apr.component';

describe('LogoAPrComponent', () => {
  let component: LogoAPrComponent;
  let fixture: ComponentFixture<LogoAPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAPrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
