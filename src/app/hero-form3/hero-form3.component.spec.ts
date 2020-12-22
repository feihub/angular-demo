import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroForm3Component } from './hero-form3.component';

describe('HeroForm3Component', () => {
  let component: HeroForm3Component;
  let fixture: ComponentFixture<HeroForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroForm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
