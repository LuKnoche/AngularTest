import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartData, ChartEvent, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {labelsList, barLineData} from '../dataStorage';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {
    //this.generateData();
  }

  dataSet: number[] = barLineData;
  labelSet: String[] = labelsList;

  generateData(): void{
    for(var i=1;i<50000;i++){
      var randomNumber: number = Math.random()*i;
      this.dataSet.push(randomNumber);
      this.labelSet.push(randomNumber.toString())
    }
  }

  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: this.labelSet,
    datasets: [
      {data: this.dataSet,label: 'Data A',backgroundColor: '#797979',borderColor:'#797979',barThickness:0.05},
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        ticks:{
          display: false //removes label from the xAxis
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
        }
      },
      y: {
        min: 0,
        max: 5000,
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    events: [],
  }
  
  onClick(){
    var oldData = this.dataSet;
    var newData = new Array<number>(100000).fill(0);
    for(var i=0;i<100;i++){
      newData[4000+i]=oldData[4000+i];
      newData[56789+i]=oldData[56789+i];
      newData[4500+i]=oldData[4500+i];
      newData[30000+i]=oldData[30000+i];
    }
    this.barChartData.datasets[0].backgroundColor='#ffce56';
    this.barChartData.datasets[0].data=newData;
    this.chart?.update();
    console.log(oldData);
  }

  onClick3(){
    var data = this.dataSet;
    this.barChartData.datasets[0].backgroundColor = '#797979';
    this.barChartData.datasets[0].data=data;
    this.chart?.update();
    console.log(data)
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void{

  }
}
