import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaViewComponent } from './sala-view.component';

describe('SalaViewComponent', () => {
  let component: SalaViewComponent;
  let fixture: ComponentFixture<SalaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
