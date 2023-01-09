import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEventComponent } from './d-event.component';

describe('DEventComponent', () => {
  let component: DEventComponent;
  let fixture: ComponentFixture<DEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
