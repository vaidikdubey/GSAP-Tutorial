// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
// });

// //Scroll Trigger: Now page2 box will get animation only when the  user scrolls to it
// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box",
//     scrollTrigger: {
//         trigger: "#page2 #box", //Trigger point of animation
//         scroller: "body",
//         markers: true, //Help us in determining the start and end of trigger
//         start: "top 60%",
//     },
// });

// gsap.from("#page2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     },
// });

// gsap.from("#page2 h2", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     },
// });

// gsap.from("#page2 h3", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h3",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     },
// });

// gsap.from("#page2 h4", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h4",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     },
// });

// gsap.from("#page2 h5", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h5",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     },
// });

// gsap.from("#page2 #box", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     rotate: 720,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 3, //Makes animation completely dependent on scrolling, animation controller by scroll (boolean, number (1 - 5) which means smoothness)
//         pin: true, //Used to pin element
//     },
// });

//Whenever we use pin and want a stopping effect we always trigger parent.
//In this case parent is #page2, so we change trigger to #page2 from #page2 h1
gsap.to("#page2 h1", {
    transform: "translateX(-190%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
    },
});
