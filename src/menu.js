export function menuPage() {

  const divContent = document.createElement("div");


  const wagyuBeef = document.createElement("p");
  wagyuBeef.textContent = "Wagyu Beef";


  const foieGras = document.createElement("p");
  foieGras.textContent = "Foie Gras";

  const filetMignon = document.createElement("p");
  filetMignon.textContent = "Filet Mignon";

  divContent.appendChild(wagyuBeef);
  divContent.appendChild(foieGras);
  divContent.appendChild(filetMignon);

  return divContent;
}
