import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedmovieComponent } from './selectedmovie.component';

describe('SelectedmovieComponent', () => {
  let component: SelectedmovieComponent;
  let fixture: ComponentFixture<SelectedmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
