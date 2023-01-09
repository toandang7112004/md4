import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETwoWayComponent } from './e-two-way.component';

describe('ETwoWayComponent', () => {
  let component: ETwoWayComponent;
  let fixture: ComponentFixture<ETwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETwoWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ETwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
