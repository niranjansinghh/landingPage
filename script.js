function pg1Anim() {
    var tl = gsap.timeline()

    tl.from("nav h1,nav h4,nav buttton", {
        y: -30,
        duration: 0.4,
        delay: 0.3,
        opacity: 0,
        stagger: 0.2

    })
    tl.from(".center-part1 h1", {
        x: -100,
        opacity: 0,
        duration: 0.1
    })
    tl.from(".center-part1 p", {
        x: -50,
        opacity: 0,
        duration: 0.2
    })
    tl.from(".center-part1 button", {
        opacity: 0,

    })
    tl.from(".center-part2 img", {
        opacity: 0,
        x: 100

    }, "-=0.2")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.4
    })

}

function pg2Anim(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top -60%",
            scrub: 2
        }
    })
    
    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 1
    })
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"anim1")
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"anim2")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"anim1")
    
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"anim2")
    
}
pg1Anim();
pg2Anim();
