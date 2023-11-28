import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Average USD market price",
            data: ['30471.5','30591.53', '30618.25', '31150.92', '30774.87',
								 '30502.55', '29918.04', '30344.53'],
            backgroundColor: 'rgb(54, 159, 124)'
          },
          {
            label: "Confirmed Transactions Per Day",
            data: ['33471.1','36591.3', '31618.24', '32150.92', '28774.87',
								 '33502.55', '29918.04', '36344.53'],
            backgroundColor: 'rgb(157, 248, 248)',
          },
          // {
          //   label: "Profit",
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio:2.5,
        color: 'white',
      }
      
    });
  }
}
