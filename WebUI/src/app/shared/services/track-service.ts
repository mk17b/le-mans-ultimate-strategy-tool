import { Injectable } from '@angular/core';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly tracks: Track[] = [
    { name: 'Algarve International Circuit', pitStopTime: 30 },
    { name: 'Autodromo Enzo e Dino Ferrari', pitStopTime: 34 },
    { name: 'Autodromo Nazionale Monza', pitStopTime: 30 },
    { name: 'Autodromo Jose Carlos Pace', pitStopTime: 26 },
    { name: 'Bahrain International Circuit', pitStopTime: 29 },
    { name: 'Circuit de la Sarthe', pitStopTime: 27 },
    { name: 'Circuit de Spa-Francorchamps', pitStopTime: 19 },
    { name: 'Circuit de Spa-Francorchamps (Endurance)', pitStopTime: 37 },
    { name: 'Circuit of the Americas', pitStopTime: 22 },
    { name: 'Fuji Speedway', pitStopTime: 30 },
    { name: 'Lusail International Circuit', pitStopTime: 32 },
    { name: 'Sebring International Raceway', pitStopTime: 31 },
  ];

  public getTracks(): Track[] {
    return this.tracks;
  }
}
