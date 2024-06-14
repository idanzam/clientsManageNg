import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit, OnDestroy {
  @Input() chartConfig!: ChartConfiguration;
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart(): void {
    if (this.chartCanvas && this.chartConfig) {
      this.chart = new Chart(this.chartCanvas.nativeElement, this.chartConfig);
    }
  }
}