import restaurantImg from "./jason-leung-poI7DelFiVA-unsplash.jpg"

export function homePage() {
  const divContent = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Web Restaurant";

  const img = document.createElement("img");
  img.src = restaurantImg;

  const description = document.createElement("p");
  description.textContent = "An elite sanctuary of culinary artistry, where gastronomic innovation meets timeless sophistication. Each dish is a masterclass in flavor, meticulously crafted from the world’s rarest ingredients and presented with flawless, bespoke service. Immersed in an atmosphere of understated opulence, guests are treated to an unforgettable sensory journey that redefines the pinnacle of fine dining.";

  divContent.appendChild(h1);
  divContent.appendChild(img);
  divContent.appendChild(description);

  return divContent;
}
