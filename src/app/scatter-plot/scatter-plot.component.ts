import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartData, ChartEvent, ChartConfiguration, LinearScale } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataPoint } from '../customTypes/customTypes'; 
import { rawData } from '../mockData';


@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.css']
})
export class ScatterPlotComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor() { }

  dataSet = rawData;

  ngOnInit(): void {
  }

  public scatterChartType: ChartType = 'scatter';
  public scatterChartData: ChartData<'scatter'> = {
    datasets: [
      {
        data: prepareData(this.dataSet),  //implementation under class
        label:'',
        pointStyle:'line',
        pointRadius:4,
        backgroundColor:'#25383c',
        borderColor: '#000000',
        showLine: true,
      }
    ]
  }

  public scatterChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
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
        display: false,
      },
    },
  }

}

function prepareData (rawData: DataPoint[]) {    // automatisiert erstellung nullpunkte direkt vor und nach jedem Datenpunkt im eingereichten Array
  var preparedData: DataPoint[] = []
  for(let i in rawData){
    preparedData.push({
      x: (rawData[i].x-0.01),
      y: 0
      })

      preparedData.push({
        x: rawData[i].x,
        y: rawData[i].y
        }
      )

      preparedData.push({
        x: (rawData[i].x+0.01),
        y: 0
      })
  }

  return preparedData
}

