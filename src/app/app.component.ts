import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {

  currentYear: number = new Date().getFullYear();
  isDarkMode = false;
  scrollBtn: HTMLButtonElement | null = null;
  isMenuOpen = false;
    lastScroll = 0;
  navbarHidden = false;
    constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.scrollBtn = document.getElementById('scrollToTopBtn') as HTMLButtonElement | null;

    if (this.scrollBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          this.scrollBtn!.classList.remove('opacity-0', 'invisible');
          this.scrollBtn!.classList.add('opacity-100', 'visible');
        } else {
          this.scrollBtn!.classList.add('opacity-0', 'invisible');
          this.scrollBtn!.classList.remove('opacity-100', 'visible');
        }
      });

      this.scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // تهيئة AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // الوضع الداكن

    // تهيئة عناصر الواجهة
    this.initTabsLogic();
    this.initIntersectionObserver();
    this.initRippleEffect();
  }

  // التبديل إلى قسم معين
  scrollTo(targetId: string): void {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // منطق التبويبات
  private initTabsLogic(): void {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
    const cards = document.querySelectorAll<HTMLElement>('.project-card');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('bg-amber-500', 'text-black', 'active');
          t.classList.add('bg-gray-700', 'text-white');
        });

        tab.classList.add('bg-amber-500', 'text-black', 'active');

        const category = tab.getAttribute('data-tab');

        cards.forEach((card) => {
          card.classList.remove('show', 'hide');

          if (category === 'all' || card.classList.contains(category!)) {
            card.style.display = 'block';

            setTimeout(() => {
              card.classList.add('show');
              this.startAnimations(card);
            }, 50);
          } else {
            card.classList.add('hide');
            setTimeout(() => {
              card.style.display = 'none';
            }, 400);
          }
        });
      });
    });
  }

  // تشغيل العدادات والخانات
  private startAnimations(scope: HTMLElement): void {
    const counters = scope.querySelectorAll<HTMLElement>('.counter');

    counters.forEach((counter) => {
      counter.innerText = '0';
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const speed = 30;

      const updateCount = () => {
        const current = parseInt(counter.innerText);
        const increment = Math.ceil(target / 50);

        if (current < target) {
          counter.innerText = String(current + increment);
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = String(target);
        }
      };

      updateCount();
    });

    const bars = scope.querySelectorAll<HTMLElement>('.progress-bar');

    bars.forEach((bar) => {
      const targetWidth = parseInt(bar.getAttribute('data-progress') || '0');
      const tooltip = bar.parentElement?.querySelector<HTMLElement>('.tooltip');

      bar.style.opacity = '1';
      bar.style.width = `${targetWidth}%`;

      if (tooltip) {
        tooltip.style.opacity = '1';
        let current = 0;

        const moveTooltip = setInterval(() => {
          if (current < targetWidth) {
            current++;
            tooltip.innerText = `${current}%`;
            tooltip.style.left = `${current}%`;
          } else {
            clearInterval(moveTooltip);
          }
        }, 25);
      }
    });
  }

  // المراقبة عند ظهور العناصر
  private initIntersectionObserver(): void {
    const cards = document.querySelectorAll<HTMLElement>('.project-card');

    const slideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            this.startAnimations(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.4 }
    );

    cards.forEach((card) => slideObserver.observe(card));
  }

  // تأثير الموجة على البطاقات
  private initRippleEffect(): void {
    document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
      card.style.position = 'relative';
      card.style.overflow = 'hidden';

      card.addEventListener('click', function (e: MouseEvent) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;

        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        card.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }


toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  document.documentElement.classList.toggle('dark', this.isDarkMode);
}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const current = window.pageYOffset || document.documentElement.scrollTop;
    this.navbarHidden = current > this.lastScroll && current > 100;
    this.lastScroll = current;
  }

}
