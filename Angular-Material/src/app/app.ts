import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  public isSmallScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      this.isSmallScreen = res.matches;
      this.cdr.detectChanges(); // força atualização da view
    });
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
