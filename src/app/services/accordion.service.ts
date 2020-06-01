import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Accordion service.
export class AccordionService {

  constructor(
    private http: HttpClient
  ) { }

  // returns JSON data.
  getAccordion() {
    return this.http.get<accordionTypes>('/assets/faqs.json');
  }
}

interface accordionTypes {
  number: number,
  question: string,
  answer: string
}
