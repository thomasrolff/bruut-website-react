import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);


export function scrollToSection (section, margin, duration = 1) {
  gsap.to(window, {
    duration,
    scrollTo: {
      y: section,
      offsetY: margin,
      ease: 'power4.out',
    }
  });
}