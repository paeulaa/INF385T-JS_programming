// // document.addEventListener('DOMContentLoaded', function() {
// //     const slider = document.getElementById('fontsize-slider');
// //     const inputBox = document.getElementById('fontsize-input');
// //     const elements = document.querySelectorAll('.adjustable');  // Selecting elements by class
// //     const heading = document.querySelectorAll('.headingfont');

// //     // Function to update font size
// //     const updateFontSize = (size) => {
// //         elements.forEach(element => {
// //             element.style.fontSize = size + 'rem';
// //         });
// //     };

// //     // Event listener for slider input
// //     slider.addEventListener('input', function() {
// //         inputBox.value = slider.value; // Sync input box with slider
// //         updateFontSize(slider.value);
// //     });

// //     // Event listener for text input
// //     inputBox.addEventListener('input', function() {
// //         slider.value = inputBox.value; // Sync slider with input box
// //         updateFontSize(inputBox.value);
// //     });
// // });


// document.addEventListener('DOMContentLoaded', function() {
//     const headingSlider = document.getElementById('heading-slider');
//     const subheadingSlider = document.getElementById('subheading-slider');
//     const paragraphSlider = document.getElementById('paragraph-slider');

//     const headingElements = document.querySelectorAll('.heading');
//     const subheadingElements = document.querySelectorAll('.subheading');
//     const paragraphElements = document.querySelectorAll('.paragraph');

//     // Function to update font size
//     function updateFontSize(elements, size) {
//         elements.forEach(element => {
//             element.style.fontSize = `${size / 10}rem`;
//         });
//     }

//     // Event listener for heading slider
//     headingSlider.addEventListener('input', function() {
//         updateFontSize(headingElements, headingSlider.value);
//     });

//     // Event listener for subheading slider
//     subheadingSlider.addEventListener('input', function() {
//         updateFontSize(subheadingElements, subheadingSlider.value);
//     });

//     // Event listener for paragraph slider
//     paragraphSlider.addEventListener('input', function() {
//         updateFontSize(paragraphElements, paragraphSlider.value);
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('fontModal');
    const btn = document.getElementById('select-font-size');
    const span = document.getElementsByClassName('close')[0];
    const headingSlider = document.getElementById('heading-slider');
    const subheadingSlider = document.getElementById('subheading-slider');
    const paragraphSlider = document.getElementById('paragraph-slider');
    const headingElements = document.querySelectorAll('.heading');
    const subheadingElements = document.querySelectorAll('.subheading');
    const paragraphElements = document.querySelectorAll('.paragraph');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function updateFontSize(elements, size) {
        elements.forEach(element => {
            element.style.fontSize = `${size / 10}em`;
        });
    }

    headingSlider.addEventListener('input', function() {
        updateFontSize(headingElements, headingSlider.value);
    });

    subheadingSlider.addEventListener('input', function() {
        updateFontSize(subheadingElements, subheadingSlider.value);
    });

    paragraphSlider.addEventListener('input', function() {
        updateFontSize(paragraphElements, paragraphSlider.value);
    });
});
