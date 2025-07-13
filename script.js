// Slider

const imagens = [
  "./imagens/slider1.jpg",
  "./imagens/slider2.jpg",
  "./imagens/slider3.jpg"
];

let currentSlide = 0;
const sliderImg = document.getElementById("slider-img");
const dotsContainer = document.getElementById("dots-container");

let dots = [];
imagens.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

function showSlide(index) {
  currentSlide = index;
  sliderImg.src = imagens[currentSlide];

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  let nextIndex = (currentSlide + 1) % imagens.length;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (currentSlide - 1 + imagens.length) % imagens.length;
  showSlide(prevIndex);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

showSlide(currentSlide);

setInterval(nextSlide, 5000);

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('open');
});

// Fechar menu ao clicar num link (modo mobile)
const navLinks = document.querySelectorAll('.menu a');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.remove('open');
	});
});



// POPUP Data Atual e Hora
const popup = document.getElementById('datetime-popup');
  const openBtn = document.getElementById('open-popup');
  const closeBtn = document.getElementById('close-popup');
  const datetimeEl = document.getElementById('datetime');

  function updateDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    const formatted = now.toLocaleDateString('pt-PT', options);
    datetimeEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();

  openBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
    openBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    openBtn.style.display = 'block';
  });

