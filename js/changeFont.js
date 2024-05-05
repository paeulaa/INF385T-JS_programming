// font&font family lists
const fontFamilies = {
    serif: [
        'Playfair+Display:ital,wght@0,400..900;1,400..900', //"Playfair Display", serif;
        'Noto+Serif:ital,wght@0,100..900;1,100..900',
        'EB+Garamond:ital,wght@0,400..800;1,400..800',
        'Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700'
    ],
    sansSerif: [
        'Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900', //"Roboto", sans-serif;
        'Open+Sans:ital,wght@0,300..800;1,300..800', //"Open Sans", sans-serif;
        'Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900', //"Lato", sans-serif;
        'Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
        'Montserrat:ital,wght@0,100..900;1,100..900',
        'Ysabeau+Infant:ital,wght@0,1..1000;1,1..1000'
    ],
    cursive: [
        'Pacifico',
        'Dancing+Script:wght@400..700',
        'Nothing+You+Could+Do',
        'Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700'
    ],
    monospace: [
        'Oxygen+Mono', //"Oxygen Mono", monospace;
        'Courier+Prime:ital,wght@0,400;0,700;1,400;1,700',
        'Inconsolata:wght@200..900',
    ]
};


function loadAllFonts() {
    for (const family in fontFamilies) {
        fontFamilies[family].forEach(font => {
            var link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        });
    }
}

//Load Fonts
loadAllFonts();

// Store last selected font
var lastSelectedFont = null;

function changeFontFamily() {
    // Randomly Pick a Font-Family
    var randomFamilyIndex = Math.floor(Math.random() * Object.keys(fontFamilies).length);
    var randomFamily = Object.keys(fontFamilies)[randomFamilyIndex];

    // Randomly Pick a font-style form the above font-family
    var randomFontIndex;
    do {
        randomFontIndex = Math.floor(Math.random() * fontFamilies[randomFamily].length);
    } while (fontFamilies[randomFamily][randomFontIndex] === lastSelectedFont); // if last selected font is equal to random picked font, then reselect
    var randomFont = fontFamilies[randomFamily][randomFontIndex];

    // update last selected font
    lastSelectedFont = randomFont;


    var mytxt = document.getElementById('h1');
    if (mytxt) {
        var fontParts = randomFont.split(':');
        var fontName = fontParts[0].replace(/\+/g, ' ');
        var fontFamily = randomFamily;
        if (randomFamily == "sansSerif") fontFamily = 'sans-serif';

        console.log(fontName);
        console.log(fontFamily);
        mytxt.style.fontFamily = `${fontName}, ${fontFamily}`;
    }

}