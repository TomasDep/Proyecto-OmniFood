/**
 * Pequela funcion para obtener la fecha actual
 */
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/**
 * navegador movile
 */
const bntNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

bntNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/**
 * Funcion para que el desplazamiento de una seccion a otra
 * sea más suave.
 */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll abajo hacia arriva
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll al dar click en cada una se las secciones
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Cerrar navegador movile
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//////////////////////////////////////////
// Sticky navigation
const sectionHeroeEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      console.log(ent);
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroeEl);

/**
 * Funcion para arreglar la propiedad gap que se da
 * en el navegador safari porque no la soporta.
 */
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSopported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSopported);

  if (!isSopported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
