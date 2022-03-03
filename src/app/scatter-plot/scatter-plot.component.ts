import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartData, ChartEvent, ChartConfiguration, LinearScale } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {labelsList, scatterData} from '../dataStorage'

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.css']
})
export class ScatterPlotComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor() { }

  dataSet: DataPoint[] = scatterData;
  labelSet: String[] = labelsList;

  ngOnInit(): void {
    //this.generateData();
  }

  generateData(){
    for(var i=1;i<50000;i++){
      var rand1: number = Math.random();
      if(rand1<0.3){
      var randomNumber: number = Math.random()*i;
      this.dataSet.push({x:i,y:randomNumber});
      }else{
        this.dataSet.push({x:i,y:0})
      }
      this.labelSet.push(i.toString());
    }
  }

  public scatterChartType: ChartType = 'scatter';
  public scatterChartData: ChartData<'scatter'> = {
    labels: this.labelSet,
    datasets: [
      {
        data: this.dataSet,
        pointStyle:'circle',
        pointRadius:4,
        backgroundColor:'#25383c'
      }
    ]
  }

  onClick(){
    this.generateData();
    this.chart?.update();
  }

}

type DataPoint = {
  x: number,
  y: number,
};