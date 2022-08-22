import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autofocus]',
})
export class AutofocusDirective implements AfterContentInit {
  constructor(private element: ElementRef) {}

  // Faz o autofocus no form quando a tela é iniciada
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.element.nativeElement.focus();
    }, 500);
  }
}
