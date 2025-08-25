import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmandaComponent } from './amanda.component';

describe('AmandaComponent', () => {
  let component: AmandaComponent;
  let fixture: ComponentFixture<AmandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmandaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
