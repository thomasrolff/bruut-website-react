import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function fadeOnScroll(element) {
  gsap.from(element, {
    autoAlpha: 0,
    y: 50,
    duration: .28, 
    ease: 'power2.out',
    stagger: {
      amount: 1
    },
    scrollTrigger: {
      id: `section ${element.className}`,
      trigger: element,
      start: 'top bottom-=80',
      toggleActions: 'play none none reverse',
    }
  });
}

