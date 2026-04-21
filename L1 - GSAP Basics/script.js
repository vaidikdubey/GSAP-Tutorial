// gsap.to("#box", {
//     x: 1000,
//     y: 20,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 1000,
//     y: -20,
//     duration: 2,
//     delay: 2
// })

// gsap.to("#box2", {
//     x: 250,
//     y: -250,
//     duration: 2,
//     delay: 1,
// });

// gsap.from("#box", {
//     x: 250,
//     y: 250,
//     duration: 2,
//     delay: 1,
// });

// gsap.from("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "40%",
// });

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "orange",
//     borderRadius: "40%",
// });

// gsap.from("h1", {
//     // color: "red",
//     opacity: 0,
//     duration: 3,
//     y: 20,
//     delay: 1,
//     stagger: 0.3,
// });

// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 180,
//     repeat: 3, //Repeat counts from 0, 0 -> 1 animation, 1 -> 2 animations and so on. -1 -> infinite
//     yoyo: true, //Boolean, allows back and forth motion in repeat.
// });

// gsap.to("#box1", {
//     x: 1330,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// });

// gsap.to("#box2", {
//     x: 1330,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 2.5,
// });

// gsap.to("#box3", {
//     x: 1330,
//     scale: 0.8,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4,
// });

//Timeline in GSAP -> Handles that everything goes in sync, no explicit delay mentioning
// let tl = gsap.timeline();

// tl.to("#box1", {
//     x: 1330,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// });
// tl.to("#box2", {
//     x: 1330,
//     backgroundColor: "yellow",
//     duration: 1.5,
// });
// tl.to("#box3", {
//     x: 1330,
//     scale: 0.8,
//     borderRadius: "50%",
//     duration: 1.5,
// });

//Timeline example application
let tl = gsap.timeline();

tl.from("h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scale: 0.2,
});
tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
});
tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});
