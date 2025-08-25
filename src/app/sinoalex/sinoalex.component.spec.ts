import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinoalexComponent } from './sinoalex.component';

describe('SinoalexComponent', () => {
  let component: SinoalexComponent;
  let fixture: ComponentFixture<SinoalexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinoalexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinoalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
