// gsap.to("#box",{
//     x:900,
//     y:300,
//     scale:1.5,
//     rotate:240,
//     delay:1,
//     duration:2,
//     backgroundColor:"burlywood",
// })
gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    // scrollTrigger:"#page2 #box",
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        // scrub:true,
        scrub:2,
    }
})