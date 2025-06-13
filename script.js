
// TypeWriter effect
const text = "Total Pipeline Integrity Management Solutions (T-PIMS)";
const speed = 150;
let i = 0;
function typeWriter(){
    if(i<text.length){
        document.getElementById("typeWriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

// Flipbook
// let currentPage = 1;

// const pages = [
//   {
//     title: "Lorem Ipsum",
//     content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     title: "About Us",
//     content: "This is the second page of the book. We are a creative design company focused on bringing ideas to life through beautiful user experiences."
//   },
//   {
//     title: "Our Mission",
//     content: "Our mission is to deliver top-quality digital products with a strong focus on customer satisfaction, innovation, and integrity."
//   },
//   {
//     title: "Thank You",
//     content: "You have reached the last page of the 3D book. We hope you enjoyed the experience! Click below to restart."
//   }
// ];

// function flipPage() {
//   const book = document.getElementById("book");
//   const title = document.getElementById("title");
//   const paragraph = document.getElementById("paragraph");

//   if (currentPage < pages.length - 1) {
//     currentPage++;
//     book.style.transform = `rotateY(-${currentPage * 5}deg)`; // subtle flip
//     title.textContent = pages[currentPage].title;
//     paragraph.textContent = pages[currentPage].content;
//   } else {
//     // Last page reached
//     currentPage = 0;
//     book.style.transform = "rotateY(0deg)";
//     title.textContent = pages[0].title;
//     paragraph.textContent = pages[0].content;
//   }
// }
// const link = document.querySelector(".text a");

// if (currentPage === pages.length - 1) {
//   link.innerHTML = 'Start Over <i class="fa fa-refresh"></i>';
// } else {
//   link.innerHTML = 'Read More <i class="fa fa-long-arrow-right"></i>';
// }


let currentPage = 0;
    function flipNext() {
      currentPage++;
      document.getElementById("book").style.transform = `rotateY(-${currentPage * 180}deg)`;
    }

    function flipBack() {
      currentPage = 0;
      document.getElementById("book").style.transform = `rotateY(0deg)`;
    }
// auto-type effect
var typed = new Typed(".auto-type", {
    strings: ["User Management", "Asset Master", "CP Module", "ILI Module", "GIS Integration", "Risk Management", "Activity Scheduler"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})


//Initialize swiper

const swiper = new Swiper('.swiper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
//Responsive breakpoints
    breakpoints: {
       
        0:{
            slidesPerView: 1
        },

        768:{
            slidesPerView: 2
        },

        1024:{
            slidesPerView: 3
        }
    }
  });

  //override navigation button behavior to swap directions
  document.querySelector('.swiper-button-next').addEventListener('click', function(e){
    e.preventDefault();
    swiper.slidePrev();
  });

  document.querySelector('.swiper-button-prev').addEventListener('click', function(e){
    e.preventDefault();
    swiper.slideNext();
  });

//  Card flip functionality
 function flipCard(event, cardId) {
            event.preventDefault();
            const card = document.querySelector(`[data-card-id="${cardId}"]`);
            card.classList.toggle('flipped');
        }