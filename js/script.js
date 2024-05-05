let currentTargetColumn = null;

window.addEventListener("load", function () {
  applyLayout("twoColumns");
});

function showOverlay() {
  document.getElementById("layoutOverlay").style.display = "flex"; // Show the overlay
}

function closeOverlay() {
  document.getElementById("layoutOverlay").style.display = "none"; // Hide the overlay
}

function showLayoutDesigner() {
  document.getElementById("layoutDesigner").style.display = "flex"; // Show the layout designer
}

function hideLayoutDesigner() {
  document.getElementById("layoutDesigner").style.display = "none"; // Hide the layout designer
}

function applyDynamicLayout(layouts) {
  let mainContent = document.getElementById("mainContent");
  // Clear existing content
  mainContent.innerHTML = "";

  // Iterate over each row configuration in layouts
  layouts.forEach((rowConfig) => {
    let row = document.createElement("div");
    row.className = "row g-2 mb-2"; // Bootstrap row with gutters and margin-bottom

    // Create columns based on the row configuration
    rowConfig.forEach((colSize) => {
      row.appendChild(createBootstrapColumn(colSize));
    });

    // Append the configured row to the main content
    mainContent.appendChild(row);
  });

  closeOverlay();
}

function applyLayout(layoutType) {
  // Create layouts based on selection
  switch (layoutType) {
    case "oneColumn":
      applyDynamicLayout([[12]]);
      break;
    case "twoColumns":
      applyDynamicLayout([[6, 6]]);
      break;
    case "threeColumns":
      applyDynamicLayout([[4, 4, 4]]);
      break;
    case "twoPlusOne":
      applyDynamicLayout([[8, 4]]);
      break;
    case "onePlusTwo":
      applyDynamicLayout([[4, 8]]);
      break;
    case "twoPlusTwo":
      applyDynamicLayout([
        [6, 6],
        [6, 6],
      ]);
      break;
    case "twoRows":
      applyDynamicLayout([[12], [12]]);
      break;
    case "twoRowsOnePlusTwo":
      applyDynamicLayout([[12], [6, 6]]);
      break;
    case "twoRowsTwoPlusOne":
      applyDynamicLayout([[6, 6], [12]]);
      break;
  }
}

function createColumn(size) {
  let col = document.createElement("div");
  col.className = "col-" + size; // Bootstrap column
  return col;
}

function createColumnInnerContent(size) {
  let content = document.createElement("div");
  content.style.height = "100px"; // Set a fixed height for demonstration
  content.style.fontSize = "1.5rem"; // Set a larger font size for demonstration
  content.style.color = "white"; // Set a color for demonstration
  content.style.backgroundColor = "black";
  content.style.borderRadius = "10px";
  content.innerHTML = "<div id='demo-text'>Demo Text</div>";
  content.style.padding = "1rem"; // Use Bootstrap padding classes
  content.style.position = "relative";
  return content;
}

function createPopover() {
  // Create popover element
  let popover = document.createElement("div");
  popover.className = "popover fade show bs-popover-top";
  popover.innerHTML = `
    <div class="popover-body">
        <button class="btn btn-default btn-circle">
            <i class="fa-solid fa-pen"></i>
        </button>
    </div>
  `;
  popover.style.position = "absolute";
  popover.style.display = "none"; // Initially hidden
  popover.style.zIndex = "1000"; // Ensure it's above other elements
  return popover;
}

function createBootstrapColumn(size) {
  let col = createColumn(size);
  let content = createColumnInnerContent(size);
  let popover = createPopover();
  content.appendChild(popover); // Append popover to content
  col.appendChild(content);

  // Event listeners for popover buttons
  col.addEventListener("mouseenter", function () {
    popover.style.display = "block"; // Show popover on mouse enter
    col.style.opacity = "0.75"; // Optional: change opacity for visual feedback
  });
  col.addEventListener("mouseleave", function () {
    popover.style.display = "none"; // Hide popover on mouse leave
    col.style.opacity = "1";
  });

  // Handling popover button clicks to show font styling overlay
  popover.addEventListener("click", function () {
    showFontStylingOverlay(col); // Pass the column as an argument
  });

  return col;
}

document
  .getElementById("layoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    const rows = document.querySelectorAll(".row-input");
    let layoutConfig = Array.from(rows).map((row) => {
      const columns = Array.from(row.querySelectorAll(".col-input")).map(
        (input) => parseInt(input.value) || 12 // Ensure that every input converts correctly, default to 12 if invalid
      );
      return columns.length > 0 ? columns : [12]; // Check if there are any columns, default to one column of width 12
    });

    // Check if there are any rows, default to one row with one column of width 12 if none
    if (
      layoutConfig.length === 0 ||
      layoutConfig.every((row) => row.length === 0)
    ) {
      layoutConfig = [[12]];
    }

    applyDynamicLayout(layoutConfig); // Apply the dynamically created layout
  });

function addRow() {
  const rowDiv = document.createElement("div");
  rowDiv.className = "row row-input border";
  rowDiv.innerHTML = `
      <span class="col-1 row-label">Row:</span>
      <div class="col-11 cols-container"></div>
      <button type="button" class="btn btn-default" onclick="addColumn(this.parentElement)">
        <i class="fas fa-plus"></i> Add Column
      </button>
      <button type="button" class="btn btn-default" onclick="removeRow(this.parentElement)">
        <i class="fas fa-trash"></i> Remove Row
      </button>
    `;
  document.getElementById("rowsContainer").appendChild(rowDiv);
}

function addColumn(rowDiv) {
  const colDiv = document.createElement("input");
  colDiv.type = "text";
  colDiv.min = "1";
  colDiv.max = "12";
  colDiv.className = "form-text col-input";
  colDiv.placeholder = "Column width e.g. 4";
  rowDiv.querySelector(".cols-container").appendChild(colDiv);
}

function removeRow(rowDiv) {
  rowDiv.remove();
}

function showFontStylingOverlay(targetColumn) {
  currentTargetColumn = targetColumn; // Set the current target column
  document.getElementById("fontStylingOverlay").style.display = "flex"; // Show the overlay
}

function closeFontStylingOverlay() {
  document.getElementById("fontStylingOverlay").style.display = "none"; // Hide the overlay
}

function applyFontStyling() {
  const fontSize = document.getElementById("fontSize").value;
  const fontStyle = document.getElementById("fontStyle").value;
  const fontColor = document.getElementById("fontColor").value;
  const textContent = document.getElementById("textContent").value;

  if (currentTargetColumn) {
    let contentDiv = currentTargetColumn.querySelector("div");
    contentDiv.style.fontSize = fontSize;
    contentDiv.style.fontWeight = fontStyle.includes("bold")
      ? "bold"
      : "normal";
    contentDiv.style.fontStyle = fontStyle.includes("italic")
      ? "italic"
      : "normal";
    contentDiv.style.color = fontColor;
    contentDiv.firstChild.textContent = textContent; // Set text content

    closeFontStylingOverlay(); // Close the overlay after applying the styles
  }
}
