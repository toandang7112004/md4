import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YRegisterComponent } from './y-register.component';

describe('YRegisterComponent', () => {
  let component: YRegisterComponent;
  let fixture: ComponentFixture<YRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
