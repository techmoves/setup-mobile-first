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

  // featuer added by gergito
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











// preserve-data------------


// ...portfolio-Preserve data in the browser...

// formMobile.addEventListener('change', () => {
//   const formDataMobile = {
//     name: mobileName.value,
//     email: emailMob.value,
//     mass: mobileText.value,
//   };
//   const stringifyFormDataMobile = JSON.stringify(formDataMobile);
//   localStorage.setItem('mobileData', stringifyFormDataMobile);
// });

// formDesktop.addEventListener('change', () => {
//   const formDataDesktop = {
//     name: desktopName.value,
//     email: email.value,
//     text: desktopText.value,
//   };
//   const stringifyFormDataDesktop = JSON.stringify(formDataDesktop);
//   localStorage.setItem('desktopData', stringifyFormDataDesktop);
// });

// const storedMobileData = JSON.parse(localStorage.getItem('mobileData'));


// window.addEventListener('load', () => {
//   mobileName.value = storedMobileData.name;
//   emailMob.value = storedMobileData.email;
//   mobileText.value = storedMobileData.text;
  
 
// });