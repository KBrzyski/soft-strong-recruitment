import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[change-color]'
})
export class ChangeColorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color='red';
  }

}
