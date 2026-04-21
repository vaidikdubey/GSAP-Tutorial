let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");

let tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.6,
});

tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
});

tl.from("#full i", {
    opacity: 0,
});

tl.pause(); //Used to pause the timeline. Can also be passed as object gasp.timeline({paused: true})

menu.addEventListener("click", function () {
    tl.play(); //To play the timeline on click of menu button
});

cross.addEventListener("click", function () {
    tl.reverse(); //To reverse the timeline on click of close button
});
