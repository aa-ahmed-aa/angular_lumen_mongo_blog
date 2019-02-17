import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPostsMenuComponent } from './app-posts-menu.component';

describe('AppPostsMenuComponent', () => {
  let component: AppPostsMenuComponent;
  let fixture: ComponentFixture<AppPostsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPostsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPostsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
