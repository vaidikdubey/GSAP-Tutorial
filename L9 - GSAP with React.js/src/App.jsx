import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

// const App = () => {
//     // useGSAP(() => {
//     //   gsap.to(".box", {
//     //     x: 1000,
//     //     duration: 2,
//     //     delay: 1,
//     //   })
//     // })

//     // const gsapRef = useRef()

//     // useGSAP(() => {
//     //   gsap.to(gsapRef.current, {
//     //     x: 1000,
//     //     duration: 2,
//     //     delay: 1,
//     //     rotate: 720,
//     //   })
//     // })

//     // const boxRef = useRef()

//     // useGSAP(() => {
//     //   gsap.from(".box", {
//     //     y: 300,
//     //     opacity: 0,
//     //     rotate: 360,
//     //     duration: 1,
//     //     delay: 1
//     //     })
//     //   })

//     // useGSAP(() => {
//     //   gsap.from(boxRef.current, {
//     //     rotate: 360,
//     //     delay: 1,
//     //     duration: 1
//     //   })
//     // })

//     // const containerRef = useRef();

//     // useGSAP(() => {
//     //   gsap.from(".box", {
//     //     rotate: 360,
//     //     scale: 0,
//     //     duration: 1,
//     //     opacity: 0,
//     //     delay: 0.5
//     //   })
//     // }, {scope: containerRef})

//     // const [circle, setCircle] = useState(0)

//     // const random = gsap.utils.random(-500, 500, 100);

//     // useGSAP(() => {
//     //   gsap.to(".circle", {
//     //     x: circle,
//     //     duration: 0.5,
//     //   })
//     // }, [circle])

//     // const randomX = gsap.utils.random(-500, 500, 100);
//     // const randomY = gsap.utils.random(-300, 300, 100);
//     // const rotateX = gsap.utils.random(-360, 360, 30);

//     // const [xValue, setXValue] = useState(0);
//     // const [yValue, setYValue] = useState(0);

//     // const [rotate, setRotate] = useState(0);

//     // const imgRef = useRef();

//     // useGSAP(
//     //     () => {
//     //         gsap.to(imgRef.current, {
//     //             x: xValue,
//     //             y: yValue,
//     //             duration: 1,
//     //             rotate: rotate,
//     //         });
//     //     },
//     //     { scope: "main", dependencies: [xValue, yValue, rotate] },
//     // );

//     return (
//         <main className="h-screen w-full bg-black text-white p-5 flex items-center justify-evenly flex-col">
//             {/* <div ref={gsapRef} className="box h-75 w-75 bg-red-600 rounded-2xl">
//       </div> */}

//             {/* <div ref={containerRef} className="container p-10 border-2 border-white rounded-3xl w-fit">
//                 <div className="circle h-75 w-75 rounded-full bg-blue-200"></div>
//                 <div ref={boxRef} className="box h-75 w-75 bg-red-600 rounded-2xl"></div>
//             </div>
//             <div className="kuch">
//                 <div className="circle h-75 w-75 rounded-full bg-blue-200"></div>
//                 <div className="box h-75 w-75 bg-red-500 rounded-2xl"></div>
//             </div> */}

//             {/* <button

//             >
//                 Animate
//             </button> */}
//             {/* <img
//                 onClick={() => {
//                     setXValue(randomX);
//                     setRotate(rotateX);
//                     setYValue(randomY);
//                 }}
//                 ref={imgRef}
//                 src="data:image/png;base64,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"
//                 alt=""
//             /> */}
//         </main>
//     );
// };

const App = () => {
    const boxRef = useRef();

    const { contextSafe } = useGSAP(); //Clears the animation once it's done. Helps in memory management

    const rotateBox = contextSafe(() => {
        gsap.to(".box", {
            rotate: 360,
            duration: 1,
        });
    });

    return (
        <main>
            <button onClick={rotateBox}>Animate</button>
            <div ref={boxRef} className="box"></div>
        </main>
    );
};

export default App;
