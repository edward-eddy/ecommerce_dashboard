import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAreaChartComponent } from './last-area-chart.component';

describe('LastAreaChartComponent', () => {
  let component: LastAreaChartComponent;
  let fixture: ComponentFixture<LastAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastAreaChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
