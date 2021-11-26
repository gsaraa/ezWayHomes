// const carouselSlide = document.querySelector('.gallery');
// const carouselImages = document.querySelectorAll('.gallery img');

// // Button
// const prevBtn = document.querySelector('#prev');
// const nextBtn = document.querySelector('#next');

// // Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// const galleryItems = document.querySelectorAll('.galleryImg');

// const galleryImg = function() {
//     prevBtn.addEventListener('click', function() {
//         if ()
//     })
// }

// carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// // Button Listeners

// nextBtn.addEventListener('click', function() {
//     if (counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";

//     counter++;

//     carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     // console.log(counter);
// });

// prevBtn.addEventListener('click', function() {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";

//     counter--;

//     carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     // console.log(counter);
// });

// carouselSlide.addEventListener('transitionend', function() {
//     // console.log(carouselImages[counter]);
//     if (carouselImages[counter].id === 'lastClone') {

//         carouselSlide.style.transition = 'none';

//         counter = carouselImages.length - 2;

//         carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//         // console.log('none');
//     }

//     if (carouselImages[counter].id === 'firstClone') {

//         carouselSlide.style.transition = 'none';

//         counter = carouselImages.length - counter;

//         carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//         // console.log('none');
//     }
// })


AOS.init();