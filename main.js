var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//  we store the result of the selection in the variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//  Use querySelectorAll for all elements with the same class
//  Creates a "NodeList" which we can loop through
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal() {
  //  this removes the class 'hidden' from modal, do not use '.'
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//  create a function to reduce repeat code
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//  looping through a node list exactly like an array
//  .textContent will display the text content only, not the html
for (let i = 0; i < btnsOpenModal.length; i++) {
  //  this adds an event listener for each iteration of btnsOpenModal
  btnsOpenModal[i].addEventListener('click', openModal);
}

//  instead of using the default eventlistener function, use closeModal
//  we are not calling the function, it would call it immediately
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//  think of document as a large object which contains a bunch of methods
//  this includes addeventListener
//  key presses are considered a global event

//  hey JS, call this function when a keydown event happens, and when you do so, pass in the 'event' argument
document.addEventListener('keydown', function (event) {
  //  check if the 'argument'.key is equal to the wanted keydown event
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    //  we want the modal to close if it is *NOT* hidden already
  }
});
