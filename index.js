document
  .getElementById("menu-btn")
  .addEventListener(
    "click",
    () => (document.getElementById("nav").style.display = "block")
  );

document
  .getElementById("exit-btn")
  .addEventListener(
    "click",
    () => (document.getElementById("nav").style.display = "none")
  );

//   GSAP ANIMATION

var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".main-copy", { y: 50, opacity: 0 })
  .to(
    "h1 span",
    { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
    "-=.7"
  )
  .from("ul.featured-cabins li", { y: 50, opacity: 0, stagger: 0.3 }, "-=.7");
