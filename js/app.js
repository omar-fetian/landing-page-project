//my functions

//create a new section
function createNewSection() {
  const currentSections = document.querySelectorAll('section');
  const newSection = document.createElement('section');
  const newDiv = document.createElement('div');
  const newHeader = document.createElement('h2');
  const newParagraph = document.createElement('p');

  newDiv.appendChild(newHeader);
  newDiv.appendChild(newParagraph);
  newSection.appendChild(newDiv);
  document.querySelector('main').appendChild(newSection);

  newSection.setAttribute('id', `section${currentSections.length + 1}`);
  newSection.setAttribute('data-nav', `Section ${currentSections.length + 1}`);
  newDiv.setAttribute('class', 'landing__container');
  newHeader.innerText = `Section ${document.querySelectorAll('section').length}`;
  newParagraph.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

  Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
}

//create a new list items according to the number of sections
function updateNavItem() {
  const navbar__list = document.querySelector('#navbar__list');

  document.querySelectorAll('section').forEach(
    function (section, sectionNum) {
      const newAnchorItem = document.createElement('a');
      const newListItem = document.createElement('li');

      newListItem.appendChild(newAnchorItem);
      navbar__list.appendChild(newListItem);

      newAnchorItem.setAttribute('href', `#${section.getAttribute('id')}`);
      newAnchorItem.setAttribute('class', 'menu__link');
      newAnchorItem.innerText = section.getAttribute('data-nav');
    })
}

// adding active class to section at the viewport
function addActiveClass() {
  // Select all anchors
  const myActiveLink = document.querySelectorAll(".menu__link");
  //adding scroll event to the page to check and apply the active classes 
  document.addEventListener('scroll', function () {
    document.querySelectorAll("section").forEach(function (section, sectionNum) {
      //Get the section location
      const activeBox = section.getBoundingClientRect();

      const dimension = 160;
      //section in viewport accourding to top and bottom boundings
      if (activeBox.top <= dimension && activeBox.bottom >= dimension) {
        //add the active class to the specific section and link
        section.classList.add("your-active-class");
        myActiveLink[sectionNum].classList.add("active-link");
      } else {
        //remove the active class to the specific section and link
        section.classList.remove("your-active-class");
        myActiveLink[sectionNum].classList.remove("active-link");
      }
    })
  })
}



//adding smooth scrolling by using js instead of CSS
function smoothScrollBehavoir() {
  document.querySelectorAll('a').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
      })
    })
  })
}



//to the top button
function toTheTop() {
  const scrollBtn = document.createElement('span');
  scrollBtn.setAttribute('class', 'toTheTop');
  document.querySelector('script').insertAdjacentElement('beforebegin', scrollBtn);
  window.addEventListener('scroll', function (event) {
    if (window.scrollY > 500) {
      scrollBtn.classList.add("show");
      scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
    } else {
      scrollBtn.classList.remove("show");
    }
  })
}


//the main code body

//create some new secions
let numberOfSections = 2;
for (let i = 0; i < numberOfSections; i++) {
  createNewSection();
}
//now let update our nav bar!
updateNavItem();
// the active class when the section within the viewport
addActiveClass();
//call the smooth scaroll to include it
smoothScrollBehavoir();
//add the to the top button
toTheTop();


