import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHeroComponent } from './one-hero.component';

describe('OneHeroComponent', () => {
  let component: OneHeroComponent;
  let fixture: ComponentFixture<OneHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
