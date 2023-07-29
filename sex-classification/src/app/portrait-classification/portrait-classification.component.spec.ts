import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitClassificationComponent } from './portrait-classification.component';

describe('PortraitClassificationComponent', () => {
  let component: PortraitClassificationComponent;
  let fixture: ComponentFixture<PortraitClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortraitClassificationComponent]
    });
    fixture = TestBed.createComponent(PortraitClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
