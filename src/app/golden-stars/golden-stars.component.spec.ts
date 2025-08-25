import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenStarsComponent } from './golden-stars.component';

describe('GoldenStarsComponent', () => {
  let component: GoldenStarsComponent;
  let fixture: ComponentFixture<GoldenStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldenStarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
