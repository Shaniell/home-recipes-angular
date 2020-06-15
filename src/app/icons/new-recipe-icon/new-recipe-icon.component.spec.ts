import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeIconComponent } from './new-recipe-icon.component';

describe('NewRecipeIconComponent', () => {
  let component: NewRecipeIconComponent;
  let fixture: ComponentFixture<NewRecipeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
