"use strict";
window.onload = function () {

  const menuOpen = document.querySelector('.gnb .menuOpen');
  const menuBox = document.querySelector('.gnb .menuBox');

  menuOpen.addEventListener('click', () => {
    menuBox.classList.toggle('on');
  })

  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    scrollTrigger: {
      trigger: '.visual',
      start: '100% 100%', /*오브젝트 윈도우() */
      end: '100% 0%',
      scrub: 1, /* 지연시간 숫자가 크면 속도를 늦춰줌 */
      // markers: true,
    }
  })
  .to('.logoWrap #j',{x:-150, y:250, rotate:20, ease:'none', duration:5},0)
  .to('.logoWrap #y',{x:-30, y:150, rotate:-10, ease:'none', duration:5},0)
  .to('.logoWrap #o',{x:0, y:400, rotate:10, ease:'none', duration:5},0)
  .to('.logoWrap #u',{x:50, y:300, rotate:10, ease:'none', duration:5},0)
  .to('.logoWrap #n',{x:100, y:100, rotate:-10, ease:'none', duration:5},0)
  .to('.logoWrap #g',{x:50, y:450, rotate:20, ease:'none', duration:5},0);

  // .mainTextBox .title i 타이틀 문자 스크롤애니메이션
  gsap.utils.toArray('.mainTextBox .title i').forEach((selector)=> {
    gsap.timeline({
      scrollTrigger: {
        trigger:selector,
        start: '100% 100%',
        end: '100% 100%',
        scrub: 1,
        // markers: true,
      }
    }).from(selector, {overflow:'hidden', y:150, ease:'none', duration:5}, 0)
    // }).fromTo(selector, {overflow:'hidden', y:150}, {y:0, ease:'none', duration:5}, 0)
  });

    // .subText p 바디텍스트 스크롤애니메이션
  gsap.utils.toArray('.subText p').forEach((selector)=> {
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '100% 100%',
        end: '100% 100%',
        scrub: 1,
        // markers: true,
      }
    }).from(selector, {opacity: 0, y:100, ease:'none', duration:5}, 0)
  });
  // con1 textAni 텍스트체인지 gsap 애니메이션
  let textAniList = document.querySelectorAll('.con1 .textAni li');
  let textAni = gsap.timeline({
    repeat:-1
  });

  for (let i = 0; i < textAniList.length; i++) {
    textAni.to(textAniList[i], 0.8, {
      opacity: 1,
      repeat: 1,
      delay: 0,
      x:0,
      yoyo: true,
      ease: 'power4.out'
    })
    textAni.play();
  }
  // con4 listBox 스크롤애니메이션
  gsap.utils.toArray('.con4 .listBox .box').forEach((selector)=> {
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '0% 20%',
        end: '0% 0%',
        scrub: 1,
        // markers: true,
      }
    })
    .to(selector, {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter:'brightness(0.3)'},0)
  });
  // con3 listBox 카드 애니메이션
  gsap.utils.toArray('.con3 .listBox li').forEach((selector, t)=> {
    ScrollTrigger.create({
      trigger: selector,
      start: '30% 50%',
      onEnter: () => {
        gsap.set(selector, {
          rotationX: '-65deg',
          z: '-500px',
          opacity: 0
        }),
        gsap.to(selector, {
          rotationX: 0,
          z: 0,
          opacity: 1,
          delay: t % 3 * 0.05
        })
      },
      // markers: true
    })
  })
  // con5 listBox 리스트 호버이미지 애니메이션
  let listBox = document.querySelectorAll('.con5 .listBox li');
  let imgBox = document.querySelector('.con5 .imgBox');
  let img = document.querySelector('.con5 .imgBox img');

  for(let i =0; i < listBox.length; i++) {
    listBox[i].addEventListener('mouseover', function() {
      img.src = `images/img${i}.jpg`;
      gsap.set(imgBox, {scale: 0, opacity: 0, duration:0.3});
      gsap.to(imgBox, {scale:1, opacity: 1, duration:0.3});
    })
    listBox[i].addEventListener('mouseout', (e)=> {
      let imgBoxX = e.pageX + 20;
      let imgBoxY = e.pageY - 20;
      imgBox.style.left = imgBoxX + 'px';
      imgBox.style.top = imgBoxY + 'px';
    })
    listBox[i].addEventListener('mouseout', ()=> {
      gsap.to(imgBox, {scale:0, opacity: 0, duration: .3})
    })
  }
  gsap.timeline({
    scrollTrigger: {
      trigger:'.con5',
      start:'0% 100%',
      end: '100% 0%',
      toggleClass: {
        targets:'.wrap',
        className:'on'
      }
    }
  })
  // footer영역
  gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '0% 100%',
      end: '100% 0%',
      scrub: 1,
      // markers: true
    }
  }).to('.logoWrap', {top: '20%', ease:'none', duration: 5},0)
}

// loading
let loading = document.querySelector('.loading');
let rotate = document.querySelectorAll('.rotate');
let opacity = document.querySelectorAll('.opacity');

setTimeout(() => {
  loading.classList.add('scene1')
}, 0)
setTimeout(() => {
  loading.classList.add('scene2')
}, 1500)
setTimeout(() => {
  loading.classList.remove('scene1','scene2')
}, 2500)
setTimeout(()=>{
  rotate.forEach(
    (rotate) => {
      rotate.classList.add('on')
    }
  )
}, 2500)
setTimeout(()=>{
  opacity.forEach(
    (opacity) => {
      opacity.classList.add('on')
    }
  )
}, 2500)
