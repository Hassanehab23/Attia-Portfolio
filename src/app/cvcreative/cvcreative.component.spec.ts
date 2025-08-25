import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVCreativeComponent } from './cvcreative.component';

describe('CVCreativeComponent', () => {
  let component: CVCreativeComponent;
  let fixture: ComponentFixture<CVCreativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVCreativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
