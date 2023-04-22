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

// ---------------form validation

const form = document.querySelector('form');
const email = document.querySelector('#email-id');
const errorMessage = document.querySelector('#msg');

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

// ---------------------popUp section-----------------------
const cardData = [
  {
    heading: "Data Dashboard ",
    heading3: "Keeping track of hundreds  of components website",
    text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lists: ["html", "bootstrap", "Ruby on Rails"],
    btn: "see project",
    btn1: "get-my-resume-btn",
  },
  {
    heading: "Data Dashboard ",
    text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lists: ["html", "bootstrap", "Ruby on Rails"],
    btn: "see project",
    btn1: "get-my-resume-btn",
  },
  {
    heading: "Data Dashboard ",
    heading2: "Website Portfolio",
    text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lists: ["html", "bootstrap", "Ruby on Rails"],
    btn: "see project",
    btn1: "get-my-resume-btn",
  },
  {
    heading: "Data Dashboard ",
    text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lists: ["html", "bootstrap", "Ruby on Railsy"],
    btn: "see project",
    btn1: "get-my-resume-btn",
  },
  {
    heading: "Data Dashboard ",
    heading3: "Keeping track of hundreds  of components website",
    text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lists: ["html", "bootstrap", "Ruby on Rails"],
    btn: "see project",
    btn1: "get-my-resume-btn",
  },
  {
    heading: "Data Dashboard ",
    heading3: "Keeping track of hundreds  of components website",
    heading2: "Website Portfolio",
    text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lists: ["html", "bootstrap", "rRuby on Rails"],
    btn: "see project",
    btn1: "get-my-resume-btn",
  },
];

const work = document.getElementById('test');

cardData.forEach((value, index) => {
  const div = document.createElement('div');
  div.className = 'details';
  if (index === 0 || index === 3) {
    div.id = index;
    div.innerHTML = `
    <h2 class="card1-head">${value.heading}</h2>
    <p class="data-arc">${value.text}</p>
    <div class="programs programs1">
        <ul class="position-items">
            <li class="stack-position">html </li>
            <li class="stack-position">bootstrap </li>
            <li class="stack-position">Ruby</li>
        </ul>
    </div>
     <button type="button" class="see-project-btn button-hov hov" id="1">See Project </button>
    `;
  } else if (index === 1 || index === 4) {
    div.className = 'details1';
    div.id = index;
    div.innerHTML = `
    <h2 class="card1-head">${value.heading}</h2>
    <p class="data-arc">${value.text}</p>
    <div class="programs">
        <ul class="position-items">
            <li class="stack-position">html </li>
            <li class="stack-position">bootstrap </li>
            <li class="stack-position">Ruby</li>
        </ul> 
    </div>
    <button type="button" class="see-project-btn button-hov hov">See Project </button>
    `;
  } else if (index === 2 || index === 5) {
    div.className = 'details2';
    div.id = index;
    div.innerHTML = `
    <h2 class="mobile-head">${value.heading}</h2>
    <h2 class="web-padd">${value.heading2}</h2>
    <p class="data-arc">${value.text}</p>
    <div class="programs">
        <ul class="position-items">
            <li class="stack-position">html </li>
            <li class="stack-position">bootstrap </li>
            <li class="stack-position">Ruby</li>
        </ul>
    </div>
    <button type="button" class="see-project-btn button-hov hov">See Project </button>
    `; 
  }

  work.appendChild(div);
});

const btnClick = document.querySelectorAll('.see-project-btn');
const btnClick1 = document.querySelectorAll('.get-my-resume-btn');


btnClick.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const x = btn.parentNode.id;
    const pop = document.createElement('div');
    const overlay = document.getElementById('overlay');
    pop.className = 'popUp';
    pop.style.display = 'block';
    overlay.style.display = 'block';
    pop.innerHTML = `
    <div id="top-popup">
    <h3 class="top-stories mobile-heading">${cardData[x].heading}</h3>
    <h3 class="top-stories desktop-heading">${cardData[x].heading}</h3>
    <h3 class="top-stories top-hd">${cardData[x].heading3} </h3>
<h3 class="top-hd">Keeping track of hundreds  of components website</h3>
    <button class="close-button">&times;</button>
    
    <div class="programs">
        <div class="position-buttons">
            <button class="recentBtn" type="button" id="color">html </button>
            <button class="recentBtn" type="button" id="color">bootstrap </button>
            <button class="recentBtn" type="button" id="color">Ruby</button>
        </div>
    </div>
   </div> 
<div class="destop5">
<div class="popup-photo">
<img class="recent-pic5" src="images/snapshoot.png" alt="snapshoot Portfolio">
</div>
  
    <div class="popup-para">
    <span class="recent-para1 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent </>
    </span>
    <span class="recent-para2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
    </span>
    </div>
  </div> 

<div class="btn">
<button type="button" class="get-my-resume-btn">See live <a href="#"><img src="images/Icon2g.png" alt="GitHub" class="github"> </button>
<button type="button" class="get-my-resume-btn">See source  <a href="#"><img src="images/github.png" alt="GitHub" class="github"></a> </button>
</div>
    `;
    work.appendChild(pop);
  });
});





btnClick1.forEach((btn1) => {
  btn1.addEventListener("click", (e) => {
    e.preventDefault();
    const x = btn1.parentNode.id;
    const pop = document.createElement("div");
    const overlay = document.getElementById("overlay");
    pop.className = "popUp";
    pop.style.display = "block";
    overlay.style.display = "block";
    pop.innerHTML = `
  <div id="top-popup">
    <h3 class="top-stories mobile-heading">${cardData[x].heading}</h3>
    <h3 class="top-stories desktop-heading">${cardData[x].heading}</h3>
    <h3 class="top-stories top-hd">${cardData[x].heading3} </h3>
<h3 class="top-hd">Keeping track of hundreds  of components website</h3>
    <button class="close-button">&times;</button>
    
    <div class="programs">
        <div class="position-buttons">
            <button class="recentBtn" type="button" id="color">html </button>
            <button class="recentBtn" type="button" id="color">bootstrap </button>
            <button class="recentBtn" type="button" id="color">Ruby</button>
        </div>
    </div>
   </div> 
<div class="destop5">
<div class="popup-photo">
<img class="recent-pic5" src="images/snapshoot.png" alt="snapshoot Portfolio">
</div>
  
    <div class="popup-para">
    <span class="recent-para1 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent </>
    </span>
    <span class="recent-para2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
    </span>
    </div>
  </div> 

<div class="btn">
<button type="button" class="get-my-resume-btn">See live <a href="#"><img src="images/Icon2g.png" alt="GitHub" class="github"> </button>
<button type="button" class="get-my-resume-btn">See source  <a href="#"><img src="images/github.png" alt="GitHub" class="github"></a> </button>
</div>
    `;
    work.appendChild(pop);
  });
});

document.addEventListener('click', (e) => {
  const popUp = document.querySelector('.popUp');
  const target = e.target.closest('.close-button');
  const overlay = document.querySelector('#overlay');
  if (target) {
    popUp.remove();
    overlay.style.display = 'none';
  }
});
