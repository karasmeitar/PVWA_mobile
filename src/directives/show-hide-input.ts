import { Directive, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[show-hide-input]'
})
export class ShowHideInput {

  @HostBinding() type: string;

  constructor(private el: ElementRef) {
    this.type = 'password';
  }

  public changeType(type: string) {
    this.type = type;
    this.el.nativeElement.children[0].type = this.type; // change type for input inside the ion-input
  }

}
