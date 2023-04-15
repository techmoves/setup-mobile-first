// const { default: validation } = require("ajv/dist/vocabularies/validation");

// const { message } = require("statuses");

const menuBtn = document.querySelector('.humburger');

const menuDisplay = () => {
  const modal = document.createElement('section');
  modal.id = 'custom-modal';

  const deleteBtn = document.createElement('div');
  deleteBtn.textContent = 'X';
  deleteBtn.id = 'modal-delete';
  modal.appendChild(deleteBtn);

  const menuList = document.createElement('ul');
  menuList.id = 'menu-list';

  const item1 = document.createElement('li');
  const portfolio = document.createElement('a');
  portfolio.href = '#work-section';
  portfolio.className = 'menu-content';
  portfolio.textContent = 'Portfolio';
  item1.appendChild(portfolio);
  portfolio.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  const item2 = document.createElement('li');
  const about = document.createElement('a');
  about.href = '#about-me-sec';
  about.className = 'menu-content';
  about.textContent = 'About';
  item2.appendChild(about);
  about.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  const item3 = document.createElement('li');
  const contact = document.createElement('a');
  contact.href = '#form-area1';
  contact.className = 'menu-content';
  contact.textContent = 'Contact';
  item3.appendChild(contact);
  contact.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  menuList.appendChild(item1);
  menuList.appendChild(item2);
  menuList.appendChild(item3);
  modal.appendChild(menuList);
  document.body.appendChild(modal);

  const removeModal = () => {
    modal.style.visibility = 'hidden';
  };

  deleteBtn.addEventListener('click', removeModal);
};
menuBtn.addEventListener('click', menuDisplay);






// ---------------form validation



// const email = document.querySelector('#e-mail');
// const emailMob = document.querySelector('#e-mail-mob');
// const messageMob = document.querySelector('.message-mob');
// const messageDesk = document.querySelector('.message-desk');
// const formDesktop = document.querySelector('.main-form');
// const formMobile = document.querySelector('.form-mobile');

const form = document.querySelector('form');
const email = document.querySelector('#email-id');
const errorMessage = document.querySelector('#msg');
console.log(errorMessage);



function isValid(str) {
  if (str.toLowerCase() !== str) {
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  if (isValid(email.value) === false) {
    errorMessage.textContent = 'Email must be in lowercase!';
    event.preventDefault();
  } else {
    errorMessage.textContent = '';
  }
});
