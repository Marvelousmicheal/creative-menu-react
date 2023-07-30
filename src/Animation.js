import { gsap } from "gsap";

export function staggerAnimation(node1, node2) {
  gsap.to([node1, node2], {
    duration: 0.9,
    height: "100%",
    transformOrigin: "right top",

    ease: "power3,inOut",
    stagger: {
      amount: 0.3,
    },
  });
}
export function staggerRevealAnimation(node1) {
  gsap.from(node1, {
    y: 70,

    duration: 1,
    delay: 0.5,
    opacity: 0,
    ease: "power3,inOut",
  });
}

export function staggerNav(node1, node2, node3) {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 180,
    delay: 0.5,
    ease: "power3,inOut",
  });
}

export function handleCity(city) {
  gsap.to(cityBackground.current, {
    duration: 0,
    background: `url(${city}) center center`,
  });
  gsap.to(cityBackground.current, {
    duration: 0.8,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(cityBackground.current, {
    duration: 0.4,

    transformOrigin: "right top",
  });
}
export function handleCitybacktonormal() {
  gsap.to(cityBackground.current, {
    duration: 0.4,
    opacity: 0,
  });
}
export function handlehover(e) {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power3.inOut",
  });
}
export function handlehoverExit(e) {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power3.inOut",
  });
}
