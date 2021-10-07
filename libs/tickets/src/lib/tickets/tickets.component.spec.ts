import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsFacade } from './../../../../data-access/tickets/src/lib/+state/tickets.facade';
import { UiCommonModule } from '@razroo-fully-architected-dashboard/ui/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsComponent } from './tickets.component';

class TicketsFacadeMock {
  init() {
    return {}
  }
}

describe('TicketsComponent', () => {
  let component: TicketsComponent;
  let ticketsFacade: TicketsFacade;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsComponent ],
      imports: [UiCommonModule, BrowserAnimationsModule] ,
      providers: [{
        provide: TicketsFacade, useClass: TicketsFacadeMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    ticketsFacade = TestBed.get(TicketsFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ticketsFacade.init() when call paginaiton method', () => {
    spyOn(ticketsFacade, 'init');
    component.paginateTable();
    expect(ticketsFacade.init).toBeCalled();
  });
});

