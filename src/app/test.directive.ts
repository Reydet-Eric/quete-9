import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appTest]'
})
export class TestDirective {
   @HostListener("mouseenter") public changeColor(){
    this.el.nativeElement.style.width="400px";
    this.el.nativeElement.style.border="solid 5px";

   }
   @HostListener("mouseleave") public changeColor2(){
    this.el.nativeElement.style.width="200px";
    this.el.nativeElement.style.border="solid 0px";

   }


  constructor(public el: ElementRef, public renderer: Renderer2) {


   }


}
