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

// document.addEventListener("DOMContentLoaded", function () {
//   const defaultVideo = "assets/-4b32-4628-b617-a1591fc67a0b.mov";
//   const smallVideo = "assets/-960d-4f42-b7c8-3b3ac25ec1a0.mp4";
//   const videoContainer = document.getElementById("myVideo");

//   function updateVideo() {
//     if (window.innerWidth <= 700) {
//       videoContainer.src = smallVideo;
//       console.log("i running");
//     } else {
//       videoContainer.src = defaultVideo;
//     }
//   }
//   console.log("hello");
//   updateVideo();

//   window.addEventListener("resize", updateVideo);
// });

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
    const maxIndex = window.innerWidth <= 768 ? blogDivs.length - 1 : blogDivs.length - 2.5; // Adjust max index based on screen size
    if (currentIndex < maxIndex) {
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


const searchIcon = document.querySelector(".nav-search-icon")
const searchDiv = document.querySelector(".searchBox")
const smallSearchIcon = document.querySelector(".search-icon")
searchIcon.addEventListener('click',()=>{
  if(searchDiv.style.display==="flex"){
    searchDiv.style.display="none"
  } else{
    searchDiv.style.display="flex"
  }
})


smallSearchIcon.addEventListener('click',()=>{
  if(searchDiv.style.display==="flex"){
    searchDiv.style.display="none"
  } else{
    searchDiv.style.display="flex"
  }
})

const feedbackSliderWrapper = document.querySelector('.feedback-slider-wrapper');
const reviewBoxes = document.querySelectorAll('.review-box');
const feedbackDots = document.querySelector('.feedback-dots');
let reviewIndex = 0;
let slidesToShow = calculateSlidesToShow(); // Initially calculate slides to show

// Function to calculate number of slides to show based on screen width
function calculateSlidesToShow() {
  return window.innerWidth <= 600 ? 1 : 2; // Show 1 slide on small screens, 2 on larger screens
}

// Function to show reviews based on the current index
function showReview(index) {
  const totalReviews = reviewBoxes.length;
  const totalVisibleWidth = 100 / slidesToShow;

  if (index >= 0 && index <= totalReviews - slidesToShow) {
    feedbackSliderWrapper.style.transform = `translateX(${-index * totalVisibleWidth}%)`;
    updateDots(index);
  }
}

// Function to update dots based on current review index
function updateDots(index) {  
  const totalReviews = reviewBoxes.length;
  feedbackDots.innerHTML = ''; // Clear existing dots

  for (let i = 0; i < totalReviews; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i >= index && i < index + slidesToShow) {
      dot.classList.add('active');
    }
    feedbackDots.appendChild(dot);
  }
}

// Function to go to the next review
function nextReview() {
  const totalReviews = reviewBoxes.length;

  if (reviewIndex < totalReviews - slidesToShow) {
    reviewIndex++;
    showReview(reviewIndex);
  }
}

// Function to go to the previous review
function prevReview() {
  if (reviewIndex > 0) {
    reviewIndex--;
    showReview(reviewIndex);
  }
}

// Update slides to show on window resize
window.addEventListener('resize', () => {
  slidesToShow = calculateSlidesToShow();
  showReview(reviewIndex);
});

// Show the first review initially
showReview(reviewIndex);


document.addEventListener("DOMContentLoaded", function () {
  const videos = [
      "assets/big1.mp4",
      "assets/big2.mov",
      "assets/big1.mp4"
  ];
  const smallVideos = [
      "assets/small1.mp4",
      "assets/small2.mp4",
      "assets/small1.mp4"
  ];
  const videoContainer = document.getElementById("myVideo");
  const numRow = document.getElementById("numRow");
  let currentIndex = 0;

  function updateVideo() {
      const isMobile = window.innerWidth <= 700;
      videoContainer.src = isMobile ? smallVideos[currentIndex] : videos[currentIndex];
  }

  function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

  function highlightNumber() {
      Array.from(numRow.children).forEach((span, index) => {
          if (index === currentIndex) {
              span.classList.add("active");
          } else {
              span.classList.remove("active");
          }
      });
  }

  function switchVideo(index) {
      if (index >= 0 && index < videos.length) {
          currentIndex = index;
          updateVideo();
          highlightNumber();
      }
  }

  videos.forEach((_, index) => {
      const span = document.createElement("span");
      span.textContent = formatNumber(index + 1);
      span.addEventListener("click", () => switchVideo(index));
      numRow.appendChild(span);
  });

  updateVideo();
  highlightNumber();

  window.addEventListener("resize", updateVideo);

  // Swipe functionality for mobile view
  let touchStartX = 0;
  let touchEndX = 0;

  function handleSwipe() {
      if (touchEndX < touchStartX) {
          // Swiped left
          switchVideo((currentIndex + 1) % videos.length);
      }
      if (touchEndX > touchStartX) {
          // Swiped right
          switchVideo((currentIndex - 1 + videos.length) % videos.length);
      }
  }

  videoContainer.addEventListener("touchstart", e => {
      touchStartX = e.changedTouches[0].screenX;
  });

  videoContainer.addEventListener("touchend", e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   const videoContainer = document.getElementById("myVideo");
//   const numRow = document.getElementById("numRow");
//   let videos = [];
//   let smallVideos = [];
//   let currentIndex = 0;

//   function formatNumber(number) {
//       return number < 10 ? `0${number}` : number;
//   }

//   function updateVideo() {
//       const isMobile = window.innerWidth <= 700;
//       videoContainer.src = isMobile ? smallVideos[currentIndex] : videos[currentIndex];
//   }

//   function highlightNumber() {
//       Array.from(numRow.children).forEach((span, index) => {
//           if (index === currentIndex) {
//               span.classList.add("active");
//           } else {
//               span.classList.remove("active");
//           }
//       });
//   }

//   function switchVideo(index) {
//       if (index >= 0 && index < videos.length) {
//           currentIndex = index;
//           updateVideo();
//           highlightNumber();
//       }
//   }

//   function fetchVideos() {
//       fetch('getVideos.php')
//           .then(response => response.json())
//           .then(data => {
//               data.forEach(video => {
//                   videos.push(video.default);
//                   smallVideos.push(video.small);
//               });
//               populateNumRow();
//               updateVideo();
//               highlightNumber();
//           })
//           .catch(error => console.error('Error fetching videos:', error));
//   }

//   function populateNumRow() {
//       videos.forEach((_, index) => {
//           const span = document.createElement("span");
//           span.textContent = formatNumber(index + 1);
//           span.addEventListener("click", () => switchVideo(index));
//           numRow.appendChild(span);
//       });
//   }

//   fetchVideos();

//   window.addEventListener("resize", updateVideo);

//   // Swipe functionality for mobile view
//   let touchStartX = 0;
//   let touchEndX = 0;

//   function handleSwipe() {
//       if (touchEndX < touchStartX) {
//           // Swiped left
//           switchVideo((currentIndex + 1) % videos.length);
//       }
//       if (touchEndX > touchStartX) {
//           // Swiped right
//           switchVideo((currentIndex - 1 + videos.length) % videos.length);
//       }
//   }

//   videoContainer.addEventListener("touchstart", e => {
//       touchStartX = e.changedTouches[0].screenX;
//   });

//   videoContainer.addEventListener("touchend", e => {
//       touchEndX = e.changedTouches[0].screenX;
//       handleSwipe();
//   });
// });