const positions = [
  { top: "0%", left: "0%"},
  { top: "0%", left: "10%"},
  { top: "0%", left: "60%"},
  { top: "16%", left: "15%"},
  { top: "16%", left: "40%"},
  { top: "16%", left: "90%"},
  { top: "32%", left: "50%"},
  { top: "32%", left: "75%"},
  { top: "48%", left: "0%"},
  { top: "64%", left: "30%"},
  { top: "64%", left: "50%"},
  { top: "64%", left: "90%"},
  { top: "80%", left: "20%"},
  { top: "80%", left: "70%"}
]

const imgs = document.querySelector(".img");

gsap.set(".img", {
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0)"
});

gsap.from("p", {
  y: 40,
  ease: "power4.inOut",
  duration: 1,
  stagger: {
    amount: 0.15
  },
  delay: 0.5
});

gsap.to(".img", {
  scale: 1,
  width: "300px",
  height: "400px",
  stagger: 0.15,
  duration: 0.75,
  ease: "power2.out",
  delay: 1,
  onComplete: () => {
    scatterAndShrink();
  }
})

gsap.to("p", {
  top: "40px",
  ease: "power4.inOut",
  duration: 1,
  stagger: {
    amount: 0.15
  },
  delay: 3,
  onComplete: () => {
    document.querySelector(".header").remove();
  }
})

gsap.from("a", {
  y: 20,
  opacity: 0,
  ease: "power2.out",
  duration: 1,
  stagger: 0.15,
  delay: 4
})

function scatterAndShrink() {
  gsap.to(".img", {
    top: (i) => positions[i].top,
    left: (i) => positions[i].left,
    transform: "none",
    width: "75px",
    height: "100px",
    stagger: 0.075,
    duration: 0.75,
    ease: "power2.out"
  })
}

