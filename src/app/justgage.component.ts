import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

declare var JustGage: any;

@Component({
  selector: 'justgage',
  templateUrl: './justgage.component.html',
  styleUrls: ['./justgage.component.scss']
})
export class JustgageComponent implements OnInit, OnChanges {
  justgage: any;

  @Input() options: any = {};
  @Input() value: number = 0;
  @Input() max: number = 100;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.justgage) {
      if (changes['options']) {
        this.elementRef.nativeElement.innerHTML = '';
        this.create();
      } else if (changes['max'] || changes['value']) {
        this.justgage.refresh(this.value, this.max);
      }
    }
  }

  private create() {
    delete this.options.id;
    this.options.parentNode = this.elementRef.nativeElement;
    this.options.max = this.max;
    this.options.value = this.value;
    this.justgage = new JustGage(this.options);
  }
}
