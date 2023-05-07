import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcpuComponent } from './totalcpu.component';

describe('TotalcpuComponent', () => {
  let component: TotalcpuComponent;
  let fixture: ComponentFixture<TotalcpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalcpuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalcpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
