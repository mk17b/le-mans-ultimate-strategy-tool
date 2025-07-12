import { ComponentFixture, TestBed } from '@angular/core/testing';
import StrategyTool from './strategy-tool';

describe('StrategyTool', () => {
  let component: StrategyTool;
  let fixture: ComponentFixture<StrategyTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyTool],
    }).compileComponents();

    fixture = TestBed.createComponent(StrategyTool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
