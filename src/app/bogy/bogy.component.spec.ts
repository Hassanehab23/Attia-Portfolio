import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BogyComponent } from './bogy.component';

describe('BogyComponent', () => {
  let component: BogyComponent;
  let fixture: ComponentFixture<BogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BogyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
