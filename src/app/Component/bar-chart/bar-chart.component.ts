import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Product Added By Month',
            data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
            backgroundColor: 'rgba(255, 105, 180, 1)',
            borderWidth: 0,
            // categoryPercentage: 1.0,
            barPercentage: 0.5,
            borderRadius:10
          },
        ],
      },
      options: {
        aspectRatio: .8,
        indexAxis: 'y',
        scales: {
          x: {
            ticks: {
              color: "#ccc"
            }
          },
          y: {
            ticks: {
              color: "#ccc"
            }
          }
      }},
    });
  }
}
