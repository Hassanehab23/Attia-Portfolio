import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-amanda',
  imports: [],
  templateUrl: './amanda.component.html',
  styleUrl: './amanda.component.scss'
})
export class AmandaComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.counter');
    const speed = 50;

    counters.forEach((counter: HTMLElement) => {
      const targetStr = counter.getAttribute('data-target') || '0';
      const format = counter.getAttribute('data-format') || 'number';
      const target = parseFloat(targetStr);
      let count = 0;

      const formatNumber = (num: number): string => {
        switch (format) {
          case 'currency':
            return 'EGP ' + num.toFixed(2);
          case 'percent':
            return Math.floor(num) + '%';
          case 'number':
          default:
            return new Intl.NumberFormat('en-US').format(Math.floor(num));
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
