import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartData, ChartEvent, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { labelsList, barLineData } from '../dataStorage'

@Component({
  selector: 'app-line-plot',
  templateUrl: './line-plot.component.html',
  styleUrls: ['./line-plot.component.css']
})
export class LinePlotComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  dataSet: number[] = barLineData;
  labelSet: String[] =labelsList;
  public lineChartType: ChartType='line';
  public lineChartData: ChartData<'line'> = {
    labels: this.labelSet,
    datasets: [
      {data: this.dataSet,label: 'Data A',backgroundColor: '#797979',borderColor:'#797979',tension:0,pointRadius:0,fill:false,borderWidth:0.25},
    ]
  };
  public lineChartOptions: ChartConfiguration['options'] = {
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
    this.lineChartData.datasets[0].backgroundColor='#ffce56';
    this.lineChartData.datasets[0].borderColor='#ffce56';
    this.lineChartData.datasets[0].data=newData;
    this.chart?.update();
    console.log(oldData);
  }

  onClick3(){
    var data = this.dataSet;
    this.lineChartData.datasets[0].backgroundColor = '#797979';
    this.lineChartData.datasets[0].borderColor='#797979';
    this.lineChartData.datasets[0].data=data;
    this.chart?.update();
    console.log(data)
  }
  

}
