import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPropertyComponent } from './b-property.component';

describe('BPropertyComponent', () => {
  let component: BPropertyComponent;
  let fixture: ComponentFixture<BPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
