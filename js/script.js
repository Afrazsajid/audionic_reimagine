gsap.registerPlugin(ScrollTrigger)

function page1scrollingeffect(tl) {
    tl.to(".vert-cont", {

        y: (index) => {
            if ((index === 0) | (index == 3)) return 0; // First element moves up
            if (index === 1) return 670;
            return -770;// Second element moves down

        },
        duration: 1.5,
        opacity: 1,
        ease: "power1.out"
        // Stagger the animations by 0.5 seconds
    });
}

function textanimate(tl) {
    tl.from(".mainhead", {
        scale: 0,
        opacity: 1,
        duartion: 1,




    })
}

function firstpageani() {
    let tl = gsap.timeline()
    page1scrollingeffect(tl)
    textanimate(tl)

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#page1',

            start: "10% top",



            scrub: true,
            pin:true



        }

    })



    tl2.staggerTo(["#vert2","#vert1","#vert3"],8, {
        y: "-200vh", // move div1 100px to the right
        y: "-199vh", // move div2 100px up
        y: "0", // move div3 100px to the left
        stagger: 0.1 // add a 0.1 second delay between each animation
      });

}





function secondpageani() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#page2',
            start: "-40% top",
            end: "120px top",
            scrub: 2,
       
        }
    })

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#page2',
            start: "top top",
            end:"30% top",
            pin:true,
            
       
            
            scrub: 2,
   
        }
    })

    tl.to('.rounddiv', {

        height: 0,
        marginTop: 0,
        ease: "power1.out",


    });

 

    tl.to("#page2", {
        backgroundColor: "black",
        duration: 3,
        delay:2,
    })

    tl2.to("#reveal",{
        width:"28%",
       ease: "power3.out",
     
    
    })

    

  

    
}



document.addEventListener("DOMContentLoaded", function () {
    gsap.to("#main", {
        opacity: 1,
        duartion: 1.1
    })

    firstpageani()
    secondpageani()






});
window.onload = function() {
    console.log(0)

    lenis.scrollTo({
        y: 0, // scroll to the top of the page (y-coordinate 0)
      // optional, but you can add a duration for the scroll animation
      }); // scroll to the top of the page
  }






