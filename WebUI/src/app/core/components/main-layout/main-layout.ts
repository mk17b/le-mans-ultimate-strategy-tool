import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Toolbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.sass',
})
export default class MainLayout {}
