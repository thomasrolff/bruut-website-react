import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);


export function scrollToSection (section, margin) {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: section,
      offsetY: margin,
      ease: 'power4.out',
    }
  });
}