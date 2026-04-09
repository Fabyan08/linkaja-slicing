document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const nextBtns = document.querySelectorAll(".next-btn");
  const mobileIndicator = document.getElementById("mobile-indicator");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");

    tabBtns.forEach((btn) => btn.classList.remove("active"));
    if (tabBtns[index]) {
      tabBtns[index].classList.add("active");
    }

    if (tabBtns[index]) {
      mobileIndicator.textContent = tabBtns[index].textContent;
    }

    prevBtns.forEach((btn) => (btn.disabled = index === 0));
    nextBtns.forEach((btn) => (btn.disabled = index === totalSlides - 1));
  }

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider(currentIndex);
      }
    });
  });

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider(currentIndex);
      }
    });
  });

  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  // Inisialisasi awal
  updateSlider(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // (Opsional) Tutup semua item lain yang sedang terbuka
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Jika item yang diklik sebelumnya tidak aktif, buka item tersebut
      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        // Set max-height sesuai tinggi konten agar transisi mulus
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
