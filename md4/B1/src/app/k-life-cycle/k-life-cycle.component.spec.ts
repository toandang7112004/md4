import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KLifeCycleComponent } from './k-life-cycle.component';

describe('KLifeCycleComponent', () => {
  let component: KLifeCycleComponent;
  let fixture: ComponentFixture<KLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KLifeCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
