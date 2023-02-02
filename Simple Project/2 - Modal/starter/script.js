'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Open declaration
const OpenModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close declaration
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Buttons clicked
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

//Close Modal
btnCloseModal.addEventListener('click', closeModal);

//Close Overlay
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
