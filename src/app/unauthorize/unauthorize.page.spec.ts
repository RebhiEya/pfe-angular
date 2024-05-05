import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnauthorizePage } from './unauthorize.page';

describe('UnauthorizePage', () => {
  let component: UnauthorizePage;
  let fixture: ComponentFixture<UnauthorizePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnauthorizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
