import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChrtComponent } from './pie-chrt.component';

describe('PieChrtComponent', () => {
  let component: PieChrtComponent;
  let fixture: ComponentFixture<PieChrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieChrtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieChrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
