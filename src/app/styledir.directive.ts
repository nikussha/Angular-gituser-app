import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[body]',
})
export class StyledirDirective {
  constructor(private el: ElementRef) {}
}
