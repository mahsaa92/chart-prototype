import { Component, OnInit } from '@angular/core';
import *  as  data from '../../assets/json/project-2-scan-1-findings.json';
import *  as  data2 from '../../assets/json/project-2-scan-3-findings.json';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  date: any
  chartdata: number[]
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: data.findings.map(resp => resp.description.baseScore), label: 'Secutity line' },
    { data: data2.findings.map(resp => resp.description.baseScore), label: 'Secutity line' }

  ];

  public chartLabels: Array<any> = [...new Set(data.findings.map(resp =>
    this.monthNames[+resp.description.created_at.split('-')[1] - 1]

  ))]

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



}

