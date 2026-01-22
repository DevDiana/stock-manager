import { Component, signal } from '@angular/core';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [DashboardComponent],
})
export class App {
  protected readonly title = signal('stock-manager');
}
