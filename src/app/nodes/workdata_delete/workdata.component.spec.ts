import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdataComponent } from './workdata.component';

describe('WorkdataComponent', () => {
  let component: WorkdataComponent;
  let fixture: ComponentFixture<WorkdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
