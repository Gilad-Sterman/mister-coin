import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'pie-chrt',
  templateUrl: './pie-chrt.component.html',
  styleUrl: './pie-chrt.component.scss'
})
export class PieChrtComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("PieChart", {
      type: 'pie',

      data: {
        labels: [
          'AntPool',
          'Foundry USA',
          'F2Pool',
          'ViaBTC',
          'Binance Pool',
          'Mara Pool',
        ],
        datasets: [{
          label: 'Blocks Mined',
          data: [
            290, 285, 121, 110, 73, 44],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(54, 159, 124)',
            'rgb(157, 248, 248)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        color: 'white'
      }

    });
  }
}
