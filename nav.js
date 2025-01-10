import { html, render } from "https://unpkg.com/lit-html?module";

let navPages = [
  { name: "Home", link: "/" },
  { name: "MP0", link: "/mp0/" },
  { name: "MP1", link: "/mp1/" },
  { name: "MP2", link: "/mp2/" },
  { name: "MP3", link: "/mp3/" },
];

function makeNav(links) {
  return html`<nav>
    ${links.map((page) => {
      return html`<a href="${page.link}">${page.name}</a>`;
    })}
  </nav>`;
}

render(makeNav(navPages), document.getElementById("nav-container"));
