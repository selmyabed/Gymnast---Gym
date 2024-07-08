// Add Active Class ?? Table ??
let nav = document.querySelectorAll(".table-nav li");
let tdArr = Array.from(document.querySelectorAll(".table table td"));

console.log(tdArr);
// nav.forEach((element) => {
//     element.addEventListener('click' ,function(e) {
//         // console.log(this)
//         nav.forEach((element) => {
//             element.classList.remove('active')
//         })
//         e.currentTarget.classList.add('active');
//         // console.log(e.currentTarget.getAttribute('data-cont'))
//         let row = document.querySelectorAll(e.currentTarget.getAttribute('data-cont'));
//         let rowArr = Array.from(row)
//         rowArr.map((ele)=> {
//             ele.classList.contains("done") ? ele.classList.remove('done') : ele.classList.add('done')
//         })

//     })
// })

nav.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangeTd);
});
function removeActive() {
  nav.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function mangeTd() {
  tdArr.forEach((td) => {
    td.classList.remove("done");
  });
  document.querySelectorAll(this.dataset.cont).forEach((ele) => {
    ele.classList.add("done");
  });
}

// let headerLinks = document.querySelectorAll('header nav ul li a');
// console.log(headerLinks)
//     headerLinks.forEach(function(element){
//         element.onclick = function() {
//             headerLinks.forEach(function(ele) {
//                 ele.classList.remove('active');
//             })
//             this.classList.add('active')
//         }
//     })

// ANCHOR UP TO TOP
let anchor = document.querySelector(".anchor");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    anchor.style.display = "flex";
  } else anchor.style.display = "none";
};
anchor.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// لسه مش شغاله
// let barIcon = document.querySelector('.icon-bar');
// let smallScreenNav = document.querySelector('header .icon-bar~nav')
// let w = window.innerWidth
// console.log(smallScreenNav)
// function show() {
//     if(w <= 991) {
//         barIcon.onclick = function() {
//             smallScreenNav.style.cssText = 'height: fit-content; padding: 25px 45px; overflow: visible;'
//         }
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////
// let carousel = ['carousel-1.jpg','carousel-2.jpg','blog-2.jpg','blog-1.jpg']
// let count = 0;
// document.querySelector(".arrow-right").onclick = function(){
//     if(count >= 4) {
//         console.log(count, 'Over')
//     } else {
//         count++;
//         let img = document.querySelector('.carousel .image img');
//         img.setAttribute('src',`images/${carousel[count]}`)
//         // console.log(img.getAttribute('src'));
//     }
//     console.log(count);
// }
// document.querySelector(".arrow-left").onclick = function(){
//     count--;
//     let img = document.querySelector('.carousel .image img');

//     if(carousel[count] == undefined) {
//         count = 0;
//     } else {
//         img.setAttribute('src',`images/${carousel[count]}`)
//         // console.log(carousel[count]);
//         // console.log(count);
//     }
// }
// console.log(document.querySelector(".arrow-right"))

/////////////// [[[[[[ landing slider ]]]]]] ///////////////
document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".slider");
  let slides = document.querySelectorAll(".slide");
  let slideIndex = 0;
  const slideInterval = 5000; // 5 seconds

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlidePosition();
  }

  function updateSlidePosition() {
    let offset = -slideIndex * slides[0].clientWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  setInterval(nextSlide, slideInterval);
});

/////////////// [[[[[[ End ]]]]]] ///////////////

document.querySelector("header .icon-bar").onclick = function () {
  document.querySelector("header nav").classList.toggle("clicked");
  this.querySelector('span:nth-child(2)').classList.toggle('clicked')
  console.log("click");
};
