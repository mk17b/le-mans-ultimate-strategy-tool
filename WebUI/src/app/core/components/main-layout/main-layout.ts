import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Toolbar, RouterLink],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainLayout {}
