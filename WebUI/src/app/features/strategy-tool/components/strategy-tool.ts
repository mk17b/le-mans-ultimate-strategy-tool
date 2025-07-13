import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Select } from 'primeng/select';
import { SelectItem } from '../../../shared/models/select-item';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePicker } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TrackService } from '../../../shared/services/track-service';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-strategy-tool',
  imports: [
    Select,
    InputNumber,
    FloatLabel,
    DatePicker,
    ReactiveFormsModule,
    Card,
    Button,
  ],
  templateUrl: './strategy-tool.html',
  styleUrl: './strategy-tool.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StrategyTool {
  public tracks = signal<SelectItem[]>([]);
  public form!: FormGroup;

  private readonly formBuilder = inject(FormBuilder);
  private readonly trackService = inject(TrackService);

  public ngOnInit(): void {
    this.initializeForm();
    this.loadTrackData();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      track: [null, Validators.required],
      raceLength: [null, Validators.required],
      lapTime: [null, Validators.required],
      fuel: [null, Validators.required],
      virtualEnergy: [null, Validators.required],
    });
  }

  private loadTrackData() {
    const tracks = this.trackService.getTracks();
    this.tracks.set(
      tracks.map((track) => ({
        label: track.name,
        value: track.pitStopTime,
      })),
    );
  }
}
