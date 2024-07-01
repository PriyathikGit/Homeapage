document.addEventListener("DOMContentLoaded", function () {
  const colourBox = document.querySelectorAll(".colour");
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "magenta",
  ];

  colourBox.forEach((item, index) => {
    item.style.backgroundColor = colors[index % colors.length];
  });
});

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const section = document.querySelector(".detail");
console.log(section);

if (openBtn && closeBtn && section) {
  // Attach event listeners to the buttons
  openBtn.addEventListener("click", () => {
    // Show the section when openBtn is clicked
    section.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    // Hide the section when closeBtn is clicked 
    section.style.display = "none";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
} else {
  console.error("One or more elements are missing in the HTML.");
}
