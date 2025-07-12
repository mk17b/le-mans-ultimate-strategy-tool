import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [Button],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LandingPage {
  private readonly router = inject(Router);

  public onNavigateToStrategyTool(): void {
    this.router.navigate(['strategy-tool']);
  }
}
