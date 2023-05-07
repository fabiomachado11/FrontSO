import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpulegendaComponent } from './cpulegenda.component';

describe('CpulegendaComponent', () => {
  let component: CpulegendaComponent;
  let fixture: ComponentFixture<CpulegendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpulegendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpulegendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
