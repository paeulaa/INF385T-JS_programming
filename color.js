// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the background color of the body
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Function to toggle the font color between black and white
function toggleTextColor() {
  const h1 = document.getElementById("h1");
  const h2 = document.getElementById("h2");
  const content = document.getElementById("content");

  const currentColorh1 = h1.style.color;
  const currentColorh2 = h2.style.color;
  const currentColorContent = content.style.color;

  if (
    currentColorh1 === "white" ||
    currentColorh2 === "white" ||
    currentColorContent === "white"
  ) {
    currentColorh1.style.color = "white";
    currentColorh2.style.color = "white";
    currentColorContent.style.color = "white";
  } else if (
    currentColorh1 === "black" ||
    currentColorh2 === "black" ||
    currentColorContent === "black"
  ) {
    currentColorh1.style.color = "black";
    currentColorh2.style.color = "black";
    currentColorContent.style.color = "black";
  }
}

// Adding click event listener to the button
document
  .getElementById("selectBGColor")
  .addEventListener("click", changeBackgroundColor);
