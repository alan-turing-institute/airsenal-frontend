import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadSelectorComponent } from './squad-selector.component';

describe('SquadSelectorComponent', () => {
  let component: SquadSelectorComponent;
  let fixture: ComponentFixture<SquadSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
