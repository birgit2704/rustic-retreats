import cabins from "./data.js";

// NAVIGATION

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
  .from("ul.featured-cabins", { y: 50, opacity: 0, stagger: 0.3 }, "-=.7");

// RENDER CABINS IN INDEX.HTML
const threeCabins = document.getElementById("three-featured-cabins");

if (threeCabins) {
  const threeCabinsHtml = cabins
    .slice(0, 3)
    .map(({ id, image, name, longDescription }) => {
      return `
  <li id="${id}" >
    <a name="cbn" href="cabininfo.html"
      ><img src="${image}" class="cabin-img" alt="cabin"
    /></a>
    <p class="cabin-title">${name}</p>
    <p class="cabin-desc">
    ${longDescription}
    </p>

    <a name="cbn" href="cabininfo.html" class="cabin-cta">
      <span>Cabin Info</span>
      <img src="imgs/arrows.svg" alt="arrow" />
    </a>
  </li>
  `;
    })
    .join("");

  threeCabins.innerHTML = threeCabinsHtml;
}

// RENDER CABINS IN CABIN.HTML

const allCabins = document.getElementById("featured-cabins");

if (allCabins) {
  const cabinsHtml = cabins
    .map(({ id, image, name, shortDescription }) => {
      return `
    <li id="${id}" >
      <a name="cbn" href="cabininfo.html"><img src="${image}" class="cabin-img" /></a>

      <p class="cabin-title">${name}</p>
      <p class="cabin-desc">
        ${shortDescription}
      </p>

      <a name="cbn" href="cabininfo.html" class="cabin-cta">
        <span class="black">Cabin Info</span>
        <img src="imgs/arrows-black.svg" />
      </a>
    </li>
`;
    })
    .join("");

  allCabins.innerHTML = cabinsHtml;
}

// RENDER CABIN DETAIL

document.body.addEventListener("click", (e) => {
  if (e.target.parentElement.name === "cbn") {
    const targetId = e.target.closest("li[id]").id;
    localStorage.setItem("cabinId", targetId);
  }
});

// => to continue go to cabininfo.js
