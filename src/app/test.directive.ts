import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appTest]'
})
export class TestDirective {
   @HostListener("mouseenter") public changeColor(){
    this.el.nativeElement.style.width="500px"
   }
   @HostListener("mouseleave") public changeColor2(){
    this.el.nativeElement.style.width="200px"
   }
  constructor(public el: ElementRef) {
  

   }


}
