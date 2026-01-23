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
  // Configurações para bater com a referência premium
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 90],
        label: 'Vendas',
        fill: true,
        tension: 0.4, // Curva suave idêntica à imagem
        borderColor: '#ffffff', // Linha branca sobre o card rosa
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Sombra branca suave
        pointRadius: 0, // Esconde os pontos para um visual mais limpo
      },
    ],
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }, // Remove legendas
    scales: {
      x: { display: false }, // Esconde grade X
      y: { display: false }, // Esconde grade Y
    },
  };
}
