export function contactPage() {
  const divContent = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Contacts";

  const p = document.createElement("p");
  p.textContent = "Sorry, but currently we still don't have any contacts.";

  divContent.appendChild(h1);
  divContent.appendChild(p);

  return divContent;
}
