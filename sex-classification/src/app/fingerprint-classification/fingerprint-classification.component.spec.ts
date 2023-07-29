import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintClassificationComponent } from './fingerprint-classification.component';

describe('FingerprintClassificationComponent', () => {
  let component: FingerprintClassificationComponent;
  let fixture: ComponentFixture<FingerprintClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FingerprintClassificationComponent]
    });
    fixture = TestBed.createComponent(FingerprintClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
