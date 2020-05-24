import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSearchPageComponent } from './ingredients-search-page.component';

describe('IngredientsSearchPageComponent', () => {
  let component: IngredientsSearchPageComponent;
  let fixture: ComponentFixture<IngredientsSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
