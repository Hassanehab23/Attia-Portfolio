import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElkhaogaComponent } from './elkhaoga.component';

describe('ElkhaogaComponent', () => {
  let component: ElkhaogaComponent;
  let fixture: ComponentFixture<ElkhaogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElkhaogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElkhaogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
