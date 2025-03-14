import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Use this directive as an attribute
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Set initial background color
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgray');
  }

  // Change color on mouse enter
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  // Reset color on mouse leave
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgray');
  }
}
