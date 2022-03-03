import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { LinePlotComponent } from './line-plot/line-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ScatterPlotComponent,
    LinePlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
