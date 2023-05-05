// @ts-nocheck
// @ts-ignore
//const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

var images = document.getElementsByClassName("little-img")
var mainImg = document.getElementById("main-img")
for (var i = 0; i < images.length; i += 1) {
  images[i].addEventListener("click", function () {
    mainImg.style.opacity = 0
    mainImg.src = this.src
    gsap.to(mainImg, {
      duration: 0.5,
      opacity: 1,
      ease: Power3.easeOut,
    })
  })
}

gsap.from(".about-content", {
  opacity: 0,
  scale: 0.7,
  duration: 4,
  ease: Power3.easeOut,
})

gsap.from(".about-img", {
  opacity: 0,
  scale: 0.7,
  duration: 4,
  ease: Power3.easeOut,
})

var listen = document.getElementById("listen-div")
listen.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#music", offsetY: 70 },
  })
})
