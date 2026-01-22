import { Component, inject, ViewChild } from '@angular/core';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [SidenavComponent, HeaderComponent, MatSidenavModule, RouterModule],
})
export class DashboardComponent {
  private observer = inject(BreakpointObserver);

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;

  constructor() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }
}
