import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElFaurouzComponent } from './el-faurouz.component';

describe('ElFaurouzComponent', () => {
  let component: ElFaurouzComponent;
  let fixture: ComponentFixture<ElFaurouzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElFaurouzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElFaurouzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
