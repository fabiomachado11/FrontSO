import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalthreadsComponent } from './totalthreads.component';

describe('TotalthreadsComponent', () => {
  let component: TotalthreadsComponent;
  let fixture: ComponentFixture<TotalthreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalthreadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalthreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
