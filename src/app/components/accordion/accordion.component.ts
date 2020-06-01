import { Component, OnInit } from '@angular/core';
import { AccordionService } from '../../services/accordion.service'
 
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  accordion;
  isActive: boolean;
  
  constructor(
    private accordionService: AccordionService
  ) { }

  ngOnInit() {
    this.accordion = this.accordionService.getAccordion()
  }

  // toggle acordion
  toggleAccordian(index) {
    const element = document.getElementById('q' + index);
    element.classList.toggle("active");
    
    this.isActive ? this.isActive = false : this.isActive = true;    

    const ans = document.getElementById('a' + index);
    ans.style.maxHeight ? ans.style.maxHeight = null : ans.style.maxHeight = ans.scrollHeight + "px";
  } 
}

