import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatIconModule, BaseChartDirective],
})
export class DashboardComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 90],
        label: 'Vendas',
        fill: true,
        tension: 0.4,
        borderColor: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        pointRadius: 0,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };
}
