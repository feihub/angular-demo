import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroForm1Component } from './hero-form1.component';

describe('HeroForm1Component', () => {
  let component: HeroForm1Component;
  let fixture: ComponentFixture<HeroForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
