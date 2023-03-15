const aboutBtn = document.querySelector("#aboutBtn");
const scheduleBtn = document.querySelector("#scheduleBtn");
const contactBtn = document.querySelector("#contactBtn");
const arrows = document.querySelectorAll('.arrow');


const flex = document.querySelector("#flex-container");
const aboutPage = document.querySelector("#aboutPage");
const schedulePage = document.querySelector("#schedulePage");
const contactPage = document.querySelector("#contactPage");


  // Check if the user is on a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // If the user is on a mobile device, show the mobile warning
  if (isMobile) {
    const mobileWarning = document.getElementById('mobile-warning');
    mobileWarning.style.display = 'block';
  }

aboutBtn.addEventListener("click", openAbout)
scheduleBtn.addEventListener("click", openSchedule)
contactBtn.addEventListener("click", openContact)

function openAbout(){
    flex.style.display = "none";
    aboutPage.style.display = "block";
}

function openSchedule(){
    flex.style.display = "none";
    schedulePage.style.display = "block";
}

function openContact(){
    flex.style.display = "none";
    contactPage.style.display = "block";
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      aboutPage.style.display = 'none';
      contactPage.style.display = 'none';
      schedulePage.style.display = 'none';
      flex.style.display = 'flex';
    });
  });

