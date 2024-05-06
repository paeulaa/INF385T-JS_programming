function showOverlay() {
  document.getElementById("layoutOverlay").style.display = "flex"; // Show the overlay
}

function closeOverlay() {
  document.getElementById("layoutOverlay").style.display = "none"; // Hide the overlay
}

function applyDynamicLayout(layouts) {
  let mainContent = document.getElementById("main");
  let subHeadingContent = document.getElementById("subHeading");
  let paragraphContent = document.getElementById("content");
  // Clear existing content
  mainContent.innerHTML = "";
  subHeadingContent.innerHTML = "";
  paragraphContent.innerHTML = "";

  // Iterate over each row configuration in layouts
  layouts.forEach((rowConfig, rowIndex) => {
    let row = document.createElement("div");
    row.className = "row g-2 mb-2"; // Bootstrap row with gutters and margin-bottom

    // Create columns based on the row configuration
    rowConfig.forEach((colSize) => {
      row.appendChild(createBootstrapColumn(colSize, rowIndex));
    });

    if (rowIndex === 0) {
      mainContent.appendChild(row);
    } else if (rowIndex === 1) {
      subHeadingContent.appendChild(row);
    } else {
      paragraphContent.appendChild(row);
    }
  });
  colorChange();
  fontChange();
  closeOverlay();
}

function createBootstrapColumn(size, rowIndex) {
  let col = document.createElement("div");
  let content = document.createElement("textarea");
  col.className = "col-" + size;
  if (rowIndex === 0) {
    content.id = "h1";
    content.className = "heading dynamic-textarea";
    content.textContent = "Font pairing made simple";
  } else if (rowIndex === 1) {
    content.id = "h2";
    content.className = "subheading dynamic-textarea";
    content.textContent = "Generate a new font pairing!";
  } else {
    content.id = "cont";
    content.className = "paragraph dynamic-textarea";
    content.textContent =
      "Click (Generate) to create a new font pairing, (Lock) to lock fonts that you want to keep, and (Edit) to choose a font manually. The text is editable, try replacing it with your company name or other copy.\n\nThe goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.";
  }
  col.appendChild(content);
  return col;
}

window.addEventListener("click", function (event) {
  let modal = document.getElementById("layoutOverlay");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
