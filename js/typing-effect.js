document.addEventListener("DOMContentLoaded", () => {
    const headerTexts = [
        "Physics 2nd Paper ",
        "Welcome to the Best Learning Experience",
        "Chapter 8 : Modern Physics"
    ];
    const headerElement = document.getElementById("header-text");
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (textIndex < headerTexts.length) {
            if (charIndex === 0) {
                headerElement.innerHTML = ""; // Clear the header text before starting a new line
            }
            if (charIndex < headerTexts[textIndex].length) {
                headerElement.innerHTML += headerTexts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                textIndex++;
                charIndex = 0;
                setTimeout(typeEffect, 500); // Pause before typing the next line
            }
        }
    }

    typeEffect();
});
