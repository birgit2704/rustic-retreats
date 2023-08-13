import cabins from "./data.js";

console.log("hey");

renderCabin();

function renderCabin() {
  const selectedCabin = localStorage.getItem("cabinId");

  const selectedCabinIndex = cabins.findIndex((el) => el.id === selectedCabin);

  const {
    name,
    image,
    pricePerNight,
    shortDescription,
    longDescription,
    country,
    area,
    maxNoGuests,
  } = cabins[selectedCabinIndex];
  console.log(name);

  document.getElementById("idi").innerHTML = `
  <h1>${name}</h1>
  <h1 class="small">${shortDescription}</h1>
    <div class="cabin-info-container">
  <img src="${image}" class="cabin-info-img" alt="cabin" />
  <div class="cabin-info-text-container">
    <p class="cabin-info-desc">
      ${longDescription}
    </p>
    <p class="cabin-info-text">
      <strong>Country: </strong>${country}
    </p>
    <p class="cabin-info-text"><strong>Area: </strong>${area}</p>
    <p class="cabin-info-text">
      <strong>Price per night: </strong>${pricePerNight}
    </p>
    <p class="cabin-info-text">
      <strong>Maximum number of guests: </strong>${maxNoGuests}
    </p>
  </div>
</div>
<a href="#" class="cta"> Reserve </a>
    `;
}
