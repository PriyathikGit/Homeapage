document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const video = document.querySelector(".vdo");
  const navList = document.querySelectorAll("nav ul li");
  const img = document.querySelector(".img-top");
  const icon = document.querySelector(".nav-search-icon");

  const videoHeight = video.offsetHeight; // Height of the video element

  // Adjust as needed, this example assumes the video's height should be scrolled past
  const scrollThreshold = videoHeight;

  function toggleHeaderBackground() {
    if (window.scrollY >= scrollThreshold) {
      header.classList.add("scrolled");

      navList.forEach((item) => {
        item.classList.add("scrolled");
      });
      img.classList.add("scrolled");
      icon.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      navList.forEach((item) => {
        item.classList.remove("scrolled");
      });
      img.classList.remove("scrolled");
      icon.classList.remove("scrolled");
    }
  }

  // Initial call to set header background based on initial scroll position
  toggleHeaderBackground();

  // Listen for scroll events to toggle header background
  window.addEventListener("scroll", toggleHeaderBackground);
});

document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelectorAll(".star-container");
  starContainer.forEach((item) => {
    for (let i = 0; i < 5; i++) {
      const starIcon = document.createElement("img");
      starIcon.src = "assets/star-svgrepo-com.png";
      starIcon.alt = "star";
      item.appendChild(starIcon);
    }
  });
});

const opener = document.querySelector(".arrow-icon");
const accordItem = document.querySelector(".accordion-item");
const openBtn = document.getElementById("accord-open");

openBtn.addEventListener("click", () => {
  if (accordItem.style.display === "flex") {
    accordItem.style.display = "none";
    opener.style.transform = "rotate(0deg)";
  } else {
    accordItem.style.display = "flex";
    opener.style.transform = "rotate(180deg)"; // Rotate 180 degrees for a downward arrow
    accordItem.classList.add = "accordion-item";
  }
});

// slider functionality

const leftBtn = document.getElementById("left-arrow");
const rightBtn = document.getElementById("right-arrow");

document.addEventListener("DOMContentLoaded", function () {
  const defaultVideo = "assets/-4b32-4628-b617-a1591fc67a0b.mov";
  const smallVideo = "assets/-960d-4f42-b7c8-3b3ac25ec1a0.mp4";
  const videoContainer = document.getElementById("myVideo");

  function updateVideo() {
    if (window.innerWidth <= 700) {
      videoContainer.src = smallVideo;
      console.log("i running");
    } else {
      videoContainer.src = defaultVideo;
    }
  }
  console.log("hello");
  updateVideo();

  window.addEventListener("resize", updateVideo);
});

const mobileScreen = document.querySelector(".mobile-nav");
const hamBtn = document.querySelector(".menu");

hamBtn.addEventListener("click", function () {
  if (mobileScreen.style.display === "flex") {
    mobileScreen.style.display = "none";
    console.log("closed");
  } else {
    mobileScreen.style.display = "flex";
    console.log("opened");
  }
});

function nextPage() {
  window.location.href = "productpage.html";
}

let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 3;
    } else if (currentSlide >= totalSlides - 2) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}


document.addEventListener('DOMContentLoaded', () => {
  const blogSection = document.querySelector('.blog-section');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const blogDivs = document.querySelectorAll('.blog-section div');

  let currentIndex = 0;

  function updateSlider() {
      const width = blogDivs[0].clientWidth;
      blogSection.style.transform = `translateX(${-currentIndex * width}px)`;
  }

  nextBtn.addEventListener('click', () => {
      if (currentIndex < blogDivs.length - 2.5) {
          currentIndex++;
          updateSlider();
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  });

  window.addEventListener('resize', updateSlider);
});
