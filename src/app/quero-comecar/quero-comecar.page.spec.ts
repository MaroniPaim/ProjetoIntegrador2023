import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueroComecarPage } from './quero-comecar.page';

describe('QueroComecarPage', () => {
  let component: QueroComecarPage;
  let fixture: ComponentFixture<QueroComecarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QueroComecarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
