import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaGeralComponent } from './tela-geral.component';

describe('TelaGeralComponent', () => {
  let component: TelaGeralComponent;
  let fixture: ComponentFixture<TelaGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
