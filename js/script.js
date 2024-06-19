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

            start: "top top",



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





// function secondpageani() {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#page2',
//             start: "-40% top",
//             end: "120px top",
//             scrub: 2,
       
//         }
//     })

//     let tl2 = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#page2',
//             start: "top top",
//             end:"30% top",
//             pin:true,
            
       
            
//             scrub: 2,
   
//         }
//     })

//     tl.to('.rounddiv', {

//         height: 0,
//         marginTop: 0,
//         ease: "power1.out",


//     });

 

//     tl.to("#page2", {
//         backgroundColor: "black",
//         duration: 3,
//         delay:2,
//     })

//     tl2.to("#reveal",{
//         width:"28%",
//        ease: "power3.out",
     
    
//     })

    

  

    
// }



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


  function showproductbar() {
    const barplay = document.getElementById("product")
    const barreverse = document.querySelector(".cross-icon")

    const bar = gsap.timeline()
    bar.to(".product-bar", {
        left: 0,
        duration: 0.8,
        ease: "ease-in",
    })

    bar.from(".icon-div", {
        x: -100,
        duration: 0.6,
        opacity: 0
    })

    bar.from(".bar_div h1", {
        x: -100,
        duration: 0.6,
        opacity: 0,
        stagger: 0.25
    })

    bar.pause()

    barplay.addEventListener('click', function () {
        bar.play()
        
    })


    barreverse.addEventListener('click', function () {
        bar.reverse()
    })

}
showproductbar()

function movingobject() {

    gsap.to(".blur-icon1", {
        top: 2,
        left: 2,
        duration: 10,
        delay: 0,
        yoyo: true,
        repeat: -1
    })
    gsap.to(".blur-icon2", {
        bottom: 2,
        right: 2,
        duration: 10,
        delay: 0,
        yoyo: true,
        repeat: -1,
    })
}
movingobject()


function airpodsplay(){
    const show_airpods = gsap.timeline()
    show_airpods.to("#product_airpods", {
        top: 0,
        duration: 1,
        opacity: 1

    }, "a")

    show_airpods.to(".page2inner", {
        duration: 0.6,
        ease: "linear",
        opacity: 0,

    }, "a")

    show_airpods.to(".product-background", {
        scale: 1,
        opacity: 1,
        ease: "ease-out",
    },)
    show_airpods.to(".blur-icon", {
        scale: 1,

    })

}
function airpodsreverse(){
    const show_airpods = gsap.timeline()
    show_airpods.to(".product-background", {
        duration: 0.6,
        opacity: 0,
        ease: "ease-out",
    },)
    show_airpods.to(".product-background", {
        scale: 1.2,
    },"b")
    show_airpods.to(".blur-icon", {
        scale: 0,

    },"b")
    show_airpods.to("#product_airpods", {
        top: -1000,
        duration: 1,
        opacity: 0
    
    }, "a")
    
    show_airpods.to(".page2inner", {
        duration: 0.7,
        ease: "linear",
        opacity: 1,
    
    }, "a")

}
function speakersplay(){
    const show_speakers = gsap.timeline()
    show_speakers.to("#product_speakers", {
        top: 0,
        duration: 1,
        opacity: 1

    }, "a")

    show_speakers.to(".page2inner", {
        duration: 0.6,
        ease: "linear",
        opacity: 0,

    }, "a")

    show_speakers.to(".product-background", {
        scale: 1,
        opacity: 1,
        ease: "ease-out",
    },)
    show_speakers.to(".blur-icon", {
        scale: 1,

    })

}
function speakersreverse(){
    const show_speakers = gsap.timeline()
    show_speakers.to(".product-background", {
        duration: 0.6,
        opacity: 0,
        ease: "ease-out",
    },)
    show_speakers.to(".product-background", {
        scale: 1.2,
    },"b")
    show_speakers.to(".blur-icon", {
        scale: 0,

    },"b")
    show_speakers.to("#product_speakers", {
        top: -1000,
        duration: 1,
        opacity: 0
    
    }, "a")
    
    show_speakers.to(".page2inner", {
        duration: 0.7,
        ease: "linear",
        opacity: 1,
    
    }, "a")

}
function powerbanksplay(){
    const show_powerbank = gsap.timeline()
    show_powerbank.to("#product_powerbanks", {
        top: 0,
        duration: 1,
        opacity: 1

    }, "a")

    show_powerbank.to(".page2inner", {
        duration: 0.6,
        ease: "linear",
        opacity: 0,

    }, "a")

    show_powerbank.to(".product-background", {
        scale: 1,
        opacity: 1,
        ease: "ease-out",
    },)
    show_powerbank.to(".blur-icon", {
        scale: 1,

    })

}
function powerbanksreverse(){
    const show_powerbank = gsap.timeline()
    show_powerbank.to(".product-background", {
        duration: 0.6,
        opacity: 0,
        ease: "ease-out",
    },)
    show_powerbank.to(".product-background", {
        scale: 1.2,
    },"b")
    show_powerbank.to(".blur-icon", {
        scale: 0,

    },"b")
    show_powerbank.to("#product_powerbanks", {
        top: -1000,
        duration: 1,
        opacity: 0
    
    }, "a")
    
    show_powerbank.to(".page2inner", {
        duration: 0.7,
        ease: "linear",
        opacity: 1,
    
    }, "a")

}


function showall() {
    const airpods = document.querySelector(".airpods")
    const closeairpods = document.querySelector("#close-airpods")
    const speakers = document.querySelector(".speakers")
    const closespeakers = document.querySelector("#close-spekers")
    const powerbanks = document.querySelector(".powerbanks")
    const closepowerbanks = document.querySelector("#close-powerbanks")

    
    // AIRPODS
    airpods.addEventListener('click', function () {
        airpodsplay();
    })
    closeairpods.addEventListener('click', function () {
        airpodsreverse();
    })

    // SPEAKERS
    speakers.addEventListener('click', function () {
        speakersplay();
    })    
    closespeakers.addEventListener('click', function () {
        speakersreverse();
    })

    // POWERBANKS
    powerbanks.addEventListener('click', function () {
        powerbanksplay();
    })    
    closepowerbanks.addEventListener('click', function () {
        powerbanksreverse();
    })
}
showall()





