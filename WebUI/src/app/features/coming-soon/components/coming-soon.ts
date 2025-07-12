import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from 'primeng/card';
import { FeatureItem } from '../models/feature-item';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  imports: [Card, NgStyle],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComingSoon {
  public features: FeatureItem[];

  constructor() {
    this.features = [
      {
        name: 'Strategy Improvements',
        text: 'Enhancing the accuracy and speed of pit stop and fuel calculations to provide more reliable race strategies tailored to varying track conditions.',
        image:
          'https://traxion.gg/wp-content/uploads/2024/12/20241209-LMU-ALPEEN-3.jpg',
      },
      {
        name: 'LMP2 and GT3',
        text: 'Introducing support for LMP2 and GT3 classes, expanding the tool to cover more car categories and offering specific strategic insights for each.',
        image:
          'https://pits.thesimgrid.com/wp-content/uploads/2024/12/RC_Driving_Stats_Twitter_1920x1080_Simon.jpg',
      },
      {
        name: 'Driver Swap',
        text: 'Implementing driver swap functionality to optimize stint lengths and rest periods, allowing better management of driver fatigue and performance during endurance races.',
        image:
          'https://news.racecontrol.gg/wp-content/uploads/2024/04/GRAB_114.jpg',
      },
    ];
  }
}
