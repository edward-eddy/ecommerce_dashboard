import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Sales in 2022",
            data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
            // borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderWidth: 2,
            // pointBackgroundColor: 'rgb(255, 99, 132)',
            fill: true,
          },
          {
            label: "Sales in 2023",
            data: [26, 29, 31, 24, 10, 3, 14, 16, 4, 5, 14, 23],
            // borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderWidth: 2,
            // pointBackgroundColor: 'rgb(54, 162, 235)',
            fill: true,
          }
        ]
      },
      options: {
        aspectRatio: 2,
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
          },
      }
      }
    });
  }

}
