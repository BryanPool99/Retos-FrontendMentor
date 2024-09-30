import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRulesComponent } from './modal-rules.component';

describe('ModalRulesComponent', () => {
  let component: ModalRulesComponent;
  let fixture: ComponentFixture<ModalRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRulesComponent]
    });
    fixture = TestBed.createComponent(ModalRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
