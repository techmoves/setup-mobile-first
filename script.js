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