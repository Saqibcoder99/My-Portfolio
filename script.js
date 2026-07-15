gsap.registerPlugin(TextPlugin);

gsap.to(".text", {
  text: "JAVAID",
  duration: 1,
  ease: "none"
});

gsap.registerPlugin(TextPlugin);


ScrollTrigger.create({
  trigger: ".about",
  start: "top 80%",
  onEnter: () => {
gsap.to(".fd", {
  text: "Frontend Developer! ",
  duration: 1,
  ease: "none"
});  }
});


gsap.from(".left-side", {
  x: -200, opacity: 0,
  duration: 1, ease: "power2.out"
});

ScrollTrigger.create({
  trigger: ".main",
  start: "top 80%",
  onEnter: (e) => {
gsap.utils.toArray(".main").forEach((heading) => {
  gsap.from(heading, {
  filter: "blur(20px)", opacity: 0, scale: 0.9,
  duration: 1.5, ease: "power2.out",
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
    }
  });
});

}
});
