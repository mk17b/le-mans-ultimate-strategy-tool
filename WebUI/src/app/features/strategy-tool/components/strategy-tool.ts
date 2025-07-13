import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { SelectItem } from '../../../shared/models/select-item';

@Component({
  selector: 'app-strategy-tool',
  imports: [Select],
  templateUrl: './strategy-tool.html',
  styleUrl: './strategy-tool.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StrategyTool {
  public cars = signal<SelectItem[]>([]);
  public tracks = signal<SelectItem[]>([]);

  public ngOnInit(): void {
    this.cars.set([{ label: 'Ferrari', value: 'Ferrari' }]);
    this.tracks.set([{ label: 'Le Mans', value: 'Le Mans' }]);
  }
}
