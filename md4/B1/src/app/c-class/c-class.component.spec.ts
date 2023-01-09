import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CClassComponent } from './c-class.component';

describe('CClassComponent', () => {
  let component: CClassComponent;
  let fixture: ComponentFixture<CClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
