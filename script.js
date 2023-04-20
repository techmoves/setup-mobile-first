// const { constants } = require("buffer");

// const { Container } = require("postcss");

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


//---------------------popUp section-----------------------

// const workSection = document.querySelector('#work-section');




//     const div1 =document.createElement('div')
//     const div2 =document.createElement('div')
//     div2.className = "main-section";
//     div2.innerHTML = ` 
//     <div class="current-project">
//     <div class="line-flex">
      
//         <h2 class="main-1st-Title">My Recent works</h2>
//     <div class="underlined">
//         <hr>
//      </div>
//     </div>
    
//     <div class="pic-ajust">
  
//     <img class="recent-pic" src="images/cards-img.png" alt="recent photo"> 

//         <div class="work-story">
//             <h3 class="top-stories">Multi-Post Stories </h3>
//             <span class="recent-para">
//                 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
//                 industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy
//                 text.
//             </span>
//             <div class="programs">
//                 <div class="position-buttons">
//                     <button class="recentBtn" type="button" id="color">css </button>
//                     <button class="recentBtn" type="button" id="color">html </button>
//                     <button class="recentBtn" type="button" id="color">bootstrap </button>
//                     <button class="recentBtn" type="button" id="color">Ruby</button>
//                 </div>
//             </div>
//             <button type="button" class="get-my-resume-btn">See Project </button>
//         </div>
//     </div>
//     </div>
//     `
//     div1.appendChild(div2);
//     workSection.appendChild(div1)

//     const div3 = document.createElement('div');
//     div3.className = 'professional-art'
//     div3.innerHTML = ` 
//      <div class="details">
//     <h2>Data Dashboard <br> Healthcare</h2>
//     <p class="data-arc">
//         A daily selection of privately personalized reads; no accounts or sign-ups required. has been
//         the industry's standard
//     </p>
//     <div class="programs">
//         <ul class="position-items">
//             <li class="stack-position">html </li>
//             <li class="stack-position">bootstrap </li>
//             <li class="stack-position">Ruby</li>
//         </ul>
//     </div>
//     <button type="button" class="see-project-btn">See Project </button>
// </div>
//     `
//     div1.appendChild(div3)

//     const cardData = [
//       {
//         heading: 'Data Dashboard ',
//         text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//         lists: ['html','bootstrap','ruby'],
//         btn: 'see project'

//       },
//       {
//         heading: 'Data Dashboard ',
//         text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//         lists: ['html','bootstrap','ruby'],
//         btn: 'see project'

//       },
//       {
//         heading: 'Data Dashboard ',
//         text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//         lists: ['html','bootstrap','ruby'],
//         btn: 'see project'

//       },
//       {
//         heading: 'Data Dashboard ',
//         text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//         lists: ['html','bootstrap','ruby'],
//         btn: 'see project'

//       },
//       {
//         heading: 'Data Dashboard ',
//         text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//         lists:  ['html','bootstrap','ruby'],
//         btn: 'see project'

//       },
//       {
//         heading: 'Data Dashboard ',
//         text: "selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//         lists:  ['html','bootstrap','ruby'],      
//         btn: 'see project'

//       },
//     ]


//     const divH = document.createElement('div');
//     divH.className = 'details';
//     divH.innerHTML = `
//     <h2>${cardData[0].heading}</h2>
//     <p class="data-arc">
//       ${cardData[0].text}
//     </p>
//     <div class="programs">
//         <ul class="position-items">
//         <li class="stack-position">${cardData[0].lists[0]}</li>
//         <li class="stack-position">${cardData[0].lists[1].bootstrap}</li>
//         <li class="stack-position">${cardData[0].lists[2].ruby}</li>
//         </ul>
//     </div>
//     <button type="button" class="see-project-btn">${cardData[0].btn} </button>
//     `
//     div3.appendChild(divH)
//     const div9 = document.createElement('div');
//     div9.className = 'details';
//     div9.innerHTML = `
//     <h2>${cardData[1].heading}</h2>
//     <p class="data-arc">
//       ${cardData[1].text}
//     </p>
//     <div class="programs">
//         <ul class="position-items">
//         <li class="stack-position">${cardData[1].lists[0].html}</li>
//         <li class="stack-position">${cardData[1].lists[0].bootstrap}<li>
//         <li class="stack-position">${cardData[1].lists[0].ruby}</li>
       
//         </ul>
//     </div>
//     <button type="button" class="see-project-btn">${cardData[1].btn} </button>
//     `
//     div3.appendChild(div9)



  
//     const divC = document.createElement('div');
//     divC.className = 'details';
//     divC.innerHTML = `
//     <h2>${cardData[2].heading}</h2>
//     <p class="data-arc">
//       ${cardData[2].text}
//     </p>
//     <div class="programs">
//         <ul class="position-items">
//         <li class="stack-position">${cardData[2].lists[0].html}</li>
//         <li class="stack-position">${cardData[2].lists[0].bootstrap}</li>
//         <li class="stack-position">${cardData[2].lists[0].ruby}</li>
       
//         </ul>
//     </div>
//     <button type="button" class="see-project-btn">${cardData[2].btn} </button>
//     `
//     div3.appendChild(divC)
// // --------------------------------------------------------b-----
    
//     const divB = document.createElement('div');
//     divB.className = 'details';
//     divB.innerHTML = `
//     <h2>${cardData[3].heading}</h2>
//     <p class="data-arc">
//       ${cardData[3].text}
//     </p>
//     <div class="programs">
//         <ul class="position-items">
//         <li class="stack-position">${cardData[3].lists[0].html}</li>
//         <li class="stack-position">${cardData[3].lists[0].bootstrap}</li>
//         <li class="stack-position">${cardData[3].lists[0].ruby}</li>
       
//         </ul>
//     </div>
//     <button type="button" class="see-project-btn">${cardData[3].btn} </button>
//     `
//     div3.appendChild(divB)
    
// // ----------------------
// const divG = document.createElement('div');
// divG.className = 'details';
// divG.innerHTML = `
// <h2>${cardData[4].heading}</h2>
// <p class="data-arc">
//   ${cardData[4].text}
// </p>
// <div class="programs">
//     <ul class="position-items">
//     <li class="stack-position">${cardData[4].lists[0].html}</li>
//     <li class="stack-position">${cardData[4].lists[0].bootstrap}</li>
//     <li class="stack-position">${cardData[4].lists[0].ruby}</li>
   
//     </ul>
// </div>
// <button type="button" class="see-project-btn">${cardData[4].btn} </button>
// `
// div3.appendChild(divG)







