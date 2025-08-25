import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamBoxComponent } from './dream-box.component';

describe('DreamBoxComponent', () => {
  let component: DreamBoxComponent;
  let fixture: ComponentFixture<DreamBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
