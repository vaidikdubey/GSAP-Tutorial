function splitText() {
    const h1 = document.querySelector("h1");

    const h1Text = h1.textContent;

    const splittedText = h1Text.split(""); //Splits every character, including spaces

    let clutter = "";

    splittedText.forEach(function (text, idx) {
        if (idx < Math.floor(splittedText.length / 2))
            clutter += `<span class="first">${text}</span>`;
        else clutter += `<span class="second">${text}</span>`;
    });

    h1.innerHTML = clutter;
}

splitText();

gsap.from(".first", {
    y: 70,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15, //+ve values left to right, -ve values right to left
});

gsap.from(".second", {
    y: 70,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15, //+ve values left to right, -ve values right to left
});
