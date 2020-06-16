import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopEditIconComponent } from './stop-edit-icon.component';

describe('StopEditIconComponent', () => {
  let component: StopEditIconComponent;
  let fixture: ComponentFixture<StopEditIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopEditIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopEditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
