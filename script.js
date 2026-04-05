const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

const wrapper = document.getElementById("heroWrapper");
const nextBtn = document.getElementById("nextHero");
const dots = document.querySelectorAll(".hero .dot");

let index = 0;

function updateHero() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index > 1) index = 0;
  updateHero();
});

// Howto

const howtoCards = document.querySelectorAll(".howto-card");
const howtoDots = document.querySelectorAll(".howto-dot");
const howtoNext = document.getElementById("howtoNext");

let indexHowto = 0;

function updateHowto() {
  howtoCards.forEach((card) => card.classList.remove("active"));
  howtoDots.forEach((dot) => dot.classList.remove("active"));

  howtoCards[indexHowto].classList.add("active");
  howtoDots[indexHowto].classList.add("active");

  const offset = (indexHowto - 1) * 310; // CENTER LOGIC
  document.getElementById("howtoWrapper").style.transform =
    `translateX(-${offset}px)`;
}

howtoNext.addEventListener("click", () => {
  indexHowto++;
  if (indexHowto > 2) indexHowto = 0;
  updateHowto();
});

updateHowto();
