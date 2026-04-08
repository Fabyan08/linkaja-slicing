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
const howtoWrapper = document.getElementById("howtoWrapper");

let startX = 0;
let isDragging = false;

// TOUCH (HP)
howtoWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

howtoWrapper.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  handleSwipe(startX, endX);
});

// MOUSE (DESKTOP)
howtoWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

howtoWrapper.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;

  let endX = e.clientX;
  handleSwipe(startX, endX);
});

// FUNCTION SWIPE
function handleSwipe(start, end) {
  let diff = start - end;

  if (diff > 50) {
    // swipe kiri → next
    indexHowto++;
    if (indexHowto > 2) indexHowto = 0;
  } else if (diff < -50) {
    // swipe kanan → prev
    indexHowto--;
    if (indexHowto < 0) indexHowto = 2;
  }

  updateHowto();
}

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

// FAQ

const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
