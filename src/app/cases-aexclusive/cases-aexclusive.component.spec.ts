import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesAExclusiveComponent } from './cases-aexclusive.component';

describe('CasesAExclusiveComponent', () => {
  let component: CasesAExclusiveComponent;
  let fixture: ComponentFixture<CasesAExclusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesAExclusiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesAExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
