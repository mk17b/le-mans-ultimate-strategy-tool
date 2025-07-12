import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LandingPage {}
