import initializePlugins from "./_plugins.js";

window.addEventListener("DOMContentLoaded", () => {
  initializePlugins();
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".first",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      end: "+=2000",
    },
  })
  .to(".first h1", { color: "red" })
  .to(".first h1", { scale: "1.3" }, 0)
  .to(".first h1", { rotate: 360 })
  .to(".first h1", { color: "white", scale: "2" })
  .to(".first h1", { padding: "50px", scale: "1", backgroundColor: "black" });

gsap.set(".second .flex img", { autoAlpha: 0, y: -100 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".second",
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  })
  .to(".second .flex img", { autoAlpha: 1, y: 0, stagger: 0.2 });

gsap.set(".third img", { autoAlpha: 0, y: -100 });
gsap.set(".third .left", { autoAlpha: 0, x: -100, autoAlpha: 0 });
gsap.set(".third .right", { autoAlpha: 0, x: 100, autoAlpha: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".third",
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  })
  .to(".third img", { autoAlpha: 1, y: 0, stagger: 0.2 })
  .to(".third .left", { x: 0, autoAlpha: 1 })
  .to(".third .right", { x: 0, autoAlpha: 1 });
