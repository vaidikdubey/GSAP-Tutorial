let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x - 5,
        y: e.y - 5,
        duration: 0.7,
        ease: "back.out(1.4)",
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff8a",
    });
});

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
    });
});
