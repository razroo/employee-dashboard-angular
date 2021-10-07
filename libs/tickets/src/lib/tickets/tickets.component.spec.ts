import { TicketsService } from './../../../../data-services/src/lib/tickets.service';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { TicketsComponent } from './tickets.component';

describe('TicketsComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    TestBed.configureTestingModule({
      providers: [TicketsComponent]
    })
    fixture.detectChanges();
  });

  it('should create', inject ([TicketsComponent], (component: TicketsComponent)  => {
    expect(component).toBeTruthy();
  }));
});
