import { TestBed } from '@angular/core/testing';

import { AccordionService } from './accordion.service';
import { HttpClientModule } from '@angular/common/http';

describe('AccordionService', () => {
  let service: AccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AccordionService]
    });
    service = TestBed.get(AccordionService);
  });

  it('Accordion Service Should be created', () => {
    expect(service).toBeTruthy();
  });
});
