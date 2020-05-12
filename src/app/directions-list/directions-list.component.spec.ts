import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsListComponent } from './directions-list.component';

describe('DirectionsListComponent', () => {
  let component: DirectionsListComponent;
  let fixture: ComponentFixture<DirectionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
