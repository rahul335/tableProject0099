import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToporderCardsComponent } from './toporder-cards.component';

describe('ToporderCardsComponent', () => {
  let component: ToporderCardsComponent;
  let fixture: ComponentFixture<ToporderCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToporderCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToporderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
