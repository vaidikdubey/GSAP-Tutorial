function page1Animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        delay: 0.4,
        duration: 0.5,
        stagger: 0.15,
    });

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.6,
    });

    tl.from(".center-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4,
    });

    tl.from(
        ".center-part2 img",
        {
            x: 200,
            opacity: 0,
            duration: 0.5,
        },
        "-=1.5",
    ); //This means that the element will be animated as a part of timeline only but 1s before. This is how we provide timeline delay

    tl.from(".bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
    });
}

function page2Animation() {
    //Instead of specifying scrollTrigger individually for every element, we do it for timeline so it goes on sequentially
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 70%",
            end: "top -20%",
            scrub: 2,
        },
    });

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    });

    tl2.from(
        ".elem.line1.left",
        {
            x: -150,
            opacity: 0,
            duration: 1,
        },
        "line1-boxes",
    ); //Pass same name to all those elements in timeline which you wish to trigger together

    tl2.from(
        ".elem.line1.right",
        {
            x: 150,
            opacity: 0,
            duration: 1,
        },
        "line1-boxes",
    );

    tl2.from(
        ".elem.line2.left",
        {
            x: -150,
            opacity: 0,
            duration: 1,
        },
        "line2-boxes",
    ); //Pass same name to all those elements in timeline which you wish to trigger together

    tl2.from(
        ".elem.line2.right",
        {
            x: 150,
            opacity: 0,
            duration: 1,
        },
        "line2-boxes",
    );
}

page1Animation();
page2Animation();
