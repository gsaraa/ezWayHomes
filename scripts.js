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

// ==================== NEW CODE

// Declaring variables
// const itemClassName = 'gallerImg'
// const items = document.getElementsByClassName(itemClassName);
const items = document.querySelectorAll('.galleryImg');
totalItems = items.length,
slide = 0,
moving = true;
console.log("what up");
console.log(items);

// Setting class names
function setInitialClasses() {
    console.log(totalItems);
    items[totalItems - 1].classList.add('prev');
    items[0].classList.add('active');
    items[1].classList.add('next');
}

// Caching buttons and adding event listeners to them
function setEventListeners() {
    const next = document.querySelector('.button--next')[0];
    
    const prev = document.querySelector('.button--prev')[0];

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
}

// Creating functions to attach to buttons

// Function to move to the next slide
// function moveNext() {
//     // Checking if moving
//     if (!moving) {

//         // If it's the last slide, reset to ), else +1
//         if (slide === (totalItems - 1)) {
//             slide = 0;
//         } else {
//             slide++;
//         }

//         // This function moves carousel to updated slide
//         moveCarouselTo(slide);
//     }
// }

// // Function to move to the previous slide
// function movePrev() {
//     // Check if moving
//     if (!moving) {
//         // If it's the first slide, set as the last slide, else -1
//         if (slide === 0) {
//             slide = (totalItems - 1);
//         } else {
//             slide--;
//         }

//         // This function moves the carousel to updated slide
//         moveCarouselTo(slide);
//     }
// }

// // This function get "moving" to true when triggered, then back to false after our transition is finished
// function disableInteraction() {
//     // Set moving to true for the same duration as our transition
//     // (0.5s = 500ms)

//     moving = true;
    
//     // setTimeOut runs its function once after the given time

//     setTimeout(function() {
//         moving = false;
//     }, 500);
// }

// // This function controls the whole carousel and takes the slide number as an argument
// function moveCarouselTo(slide) {
//     // This translate to if carousel is moving, if false then allow interaction
//     if(!moving) {
//         // Temporarily disable interactivity
//         disableInteraction();

//         // Update the OLD adjecent slides with NEW ones
//         const newPrev = slide - 1;
//         const newNext = slide + 1;
//         const oldPrev = slide - 2;
//         const oldNext = slide + 2;

//         // Test if carousel has more than three items
//         if ((totalItems - 1) > 3) {
//             // Checks and updates if the new slides are out of bounds 
//             if (newPrev <= 0) {
//                 oldPrev = (totalItems - 1);
//             } else if (newNext >= (totalItems - 1)) {
//                 oldNext = 0;
//             }

//             // Checks and updates if slide is at the beginning or end
//             if (slide === 0) {
//                 newPrev = (totalItems - 1);
//                 oldPrev = (totalItems - 2);
//                 oldNext = (slide + 1); 
//             } else if (slide === (totalItems - 1)) {
//                 newPrev = (slide - 1);
//                 newNext = 0;
//                 oldNext = 1;
//             }

//             // Adding or removing classes will trigger the transitions

//             // Reseting old next/prev elements to default classes
//             items[oldPrev].className = "galleryImg";
//             items[oldNext].className = 'galleryImg';

//             // Add New Classes
//             items[newPrev].className = "galleryImg" + "prev";
//             items[slide].className = "gallerImg" + "active";
//             items[newNext].className = "galleryImg" + "next";
//         }
//     }
// }

// // Function to initialize everything
// function init() {
//     setInitialClasses();
//     setEventListeners();

//     // Set moving to false so that the carousel becomes inactive
//     moving = false;
// }

const buttons = document.querySelectorAll('[data-carouselButton]')

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1

        const slides = button
        .closest('[data-carousel]')
        .querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')

        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Calling init function 
init();

AOS.init();