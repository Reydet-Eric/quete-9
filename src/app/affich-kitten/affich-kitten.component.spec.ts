import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichKittenComponent } from './affich-kitten.component';

describe('AffichKittenComponent', () => {
  let component: AffichKittenComponent;
  let fixture: ComponentFixture<AffichKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichKittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
