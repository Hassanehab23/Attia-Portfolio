import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cvcreative',
  imports: [],
  templateUrl: './cvcreative.component.html',
  styleUrl: './cvcreative.component.scss'
})
export class CVCreativeComponent {
    constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.counter');
    const speed = 50;

    counters.forEach((counter: HTMLElement) => {
      const targetStr = counter.getAttribute('data-target') || '0';
      const isPercentage = counter.innerText.includes('%') || targetStr.includes('.');
      const target = parseFloat(targetStr);

      let count = 0;

      const formatNumber = (num: number) => {
        if (isPercentage) {
          return num.toFixed(1) + '%';
        } else {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EGP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(Math.floor(num));
        }
      };

      const updateCount = () => {
        let increment;
        if (target > 1000) {
          increment = target / speed;
        } else if (target > 100) {
          increment = target / (speed * 2);
        } else {
          increment = 0.1;
        }

        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = formatNumber(count);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = formatNumber(target);
        }
      };

      updateCount();
    });
  }

}
