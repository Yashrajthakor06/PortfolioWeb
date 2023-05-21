//cross toggle icon navbar hamburger menu

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e) //
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});

/*function onclick work while clicking*/

window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // refrence to Document Object Model(dom )
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

//scrool section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
    });
     };
     });

    /*sticky navbar */
    let header = document.querySelector('.header');

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  };

  //scroll reveal animation
  ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
  });

ScrollReveal().reveal('.home-content, .heading', { delay: 500, origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form,' , { delay: 500, origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { delay: 500, origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content' , { delay: 500, origin:'right' });
ScrollReveal().reveal('.map, .input-box', { delay: 400, origin:'bottom' });

//I'm text

const typed = new Typed('.mult-text',{
  strings: ['Software Engineer','Cyber Analyst','Web Devloper'],
  typeSpeed: 300,
  typeSpeed: 300,
  typeSpeed: 300,
  backDelay: 3000,
  loop: true
});

