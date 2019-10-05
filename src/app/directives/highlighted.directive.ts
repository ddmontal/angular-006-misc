import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {
  @Input('appHighlighted') newColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.highlight(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
