import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITemplateComponent } from './i-template.component';

describe('ITemplateComponent', () => {
  let component: ITemplateComponent;
  let fixture: ComponentFixture<ITemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
