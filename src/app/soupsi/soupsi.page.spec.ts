import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoupsiPage } from './soupsi.page';

describe('SoupsiPage', () => {
  let component: SoupsiPage;
  let fixture: ComponentFixture<SoupsiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SoupsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
