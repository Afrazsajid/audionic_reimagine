
function scrollingeffect(tl) {
    tl.to(".vert-cont", {

        y: (index) => {
            if ((index === 0) | (index == 3)) return 0; // First element moves up
            if (index === 1) return 670;
            return -770;// Second element moves down

        },
        duration: 1.4,
        opacity:1,
        ease: "power1.out"
        // Stagger the animations by 0.5 seconds
    });
}

function textanimate(tl) {
    tl.from(".mainhead",{
        scale:0,
        opacity:1,
        duartion:1,

        

        
    })
}

function firstpageani() {
    let tl = gsap.timeline()
    scrollingeffect(tl)
    textanimate(tl)


}

document.addEventListener("DOMContentLoaded", function(){
    gsap.to("#main",{
        opacity:1,
        duartion:1.1
    })

    firstpageani()
    
  });






