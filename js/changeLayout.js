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

  closeOverlay();
}

function createBootstrapColumn(size, rowIndex) {
  let col = document.createElement("div");
  let content = document.createElement("textarea");
  col.className = "col-" + size;
  if (rowIndex === 0) {
      content.id = "h1";
      content.className = "heading";
    content.placeholder = "Heading";
  } else if (rowIndex === 1) {
    content.id = "h2";
    content.placeholder = "Sub-Heading";
    content.className = "subheading";
  } else {
    content.id = "content";
    content.className = "paragraph";
    content.placeholder = "Paragraph";
  }
  col.appendChild(content);
  return col;
}
