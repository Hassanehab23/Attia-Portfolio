import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dream-box',
  templateUrl: './dream-box.component.html',
  styleUrls: ['./dream-box.component.scss']
})
export class DreamBoxComponent implements AfterViewInit {

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
          return 'EGP ' + num.toLocaleString('en-US', { maximumFractionDigits: 0 });
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
