import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordChipsComponent } from './keyword-chips.component';

describe('KeywordChipsComponent', () => {
  let component: KeywordChipsComponent;
  let fixture: ComponentFixture<KeywordChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
