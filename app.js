// const { topHeading } = require("npmlog")

export const cardData = [
  {
    topHeading: 'My Recent Works',
    imgLine: 'images/line.png',
  },
  {
    img1: 'images/gym-image.png',
    img2: 'images/gym 2.png',
    topHeading: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s when an unknown printer took a standard dummy text.",
    link: 'https://github.com/tumainimaganiko/Portfolio',
    popUpmg: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    topHeading: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    techStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    popUpmg: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    topHeading: 'Website Portfolio',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    techStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    popUpmg: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    topHeading: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    techStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    topHeading: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    techStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    popUpmg: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    topHeading: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    techStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    popUpmg: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    topHeading: 'Website Portfolio',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    techStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    popUpmg: 'images/snapshoot.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
];

const works = document.querySelector('.works');
function inputFunction(value, index) {
  const div = document.createElement('div');
  div.id = index;
  if (index === 0) {
    div.className = 'card-1';
    div.innerHTML = `
    <h2 >${value.topHeading}</h2>
    <img src="${value.imgLine}" alt="line">
    `;
  } else if (index === 1) {
    div.className = 'card-2';
    div.id = index;
    div.innerHTML = `
    <img id="gym-1" src="${value.img1}" alt="Placeholder">
    <img id="gym-2" src="${value.img2}" alt="Placeholder">
    <div id="1">
        <h3 id="story">${value.topHeading}</h3>
    <p>${value.description}</p>
    <ul class="link-1 btn">
        <li><a href="#">CSS</a></li>
        <li><a href="#">HTML</a></li>
        <li><a href="#">Bootstrap</a></li>
        <li><a href="#">RUBY</a></li>
    </ul>
    <a class="see-project btn-click button-1" href="">See project</a>
    </div>
    `;
  } else {
    div.className = 'card-3';
    div.id = index;
    div.innerHTML = `
  <h2>${value.topHeading}</h2>
  <p>${value.description}</p>
  <ul class="link-1">
      <li><a href="#">HTML</a></li>
      <li><a href="#">Bootstrap</a></li>
      <li><a href="#">RUBY</a></li>
  </ul>
  <a  class="see-project none btn-click" href="">See project</a>
  `;
  }
  works.appendChild(div);
}
cardData.forEach(inputFunction);

const btnClick = document.querySelectorAll('.btn-click');

btnClick.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const x = btn.parentNode.id;
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
    <div class="modal-header">
    <h2 class="h2-color">${cardData[x].topHeading}</h2>
    <button class="close-button">&times;</button>
</div>
<ul>
    <li><a href="#">HTML</a></li>
    <li><a href="#">Bootstrap</a></li>
    <li><a href="#">Ruby on Rails</a></li>
</ul>
<div class="modal-body">
   
    <img src="${cardData[x].popUpmg}" alt="">
    <div>
        <p>${cardData[x].details}</p>
        <ul class="bottom-btn">
            <li id="first-list"><a href="#${cardData[x].liveLink}"><span>See live</span><img src="images/watch.png" alt=""></a></li>
            <li><a href="#${cardData[x].sourceLink}"><span>See Source</span><img src="images/github.png" alt=""></a></li>
        </ul>
    </div>
</div>
</div>
    `;
    works.append(modal);
  });
});

document.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  const target = e.target.closest('.close-button');
  const overlay = document.querySelector('#overlay');
  if (target) {
    modal.remove();
    overlay.style.display = 'none';
  }
});