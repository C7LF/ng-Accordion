import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { AccordionService } from 'src/app/services/accordion.service';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  // const fakeAsyncResponse = (data) => {
  //   return defer(() => Promise.resolve(data));
  // }

  const faqs = [{
    "id": "1",
    "question": "What vehicles are covered?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];

  const faqServiceMock = {
      getAccordion () {
        return of(faqs);
      }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
      providers: [{provide: AccordionService, useValue: faqServiceMock}],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create accordion component', () => {
    expect(component).toBeTruthy();
  });

  it('should diplay title div', () => {
    expect(fixture.debugElement.query(By.css('.accordion-title'))).toBeTruthy();
  });

  it('should display accordion item when data is passed', async() => {
    component = fixture.componentInstance;
    let accordionItemElement = fixture.nativeElement.querySelectorAll('.accordion__item');
    expect(accordionItemElement).toBeTruthy();
  });
});
