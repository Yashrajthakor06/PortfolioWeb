//cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
});

window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
});

window.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});

window.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

/*function onclick work while clicking*/
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

//scroll reveal animation
ScrollReveal({ 
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { delay: 500, origin: 'top' });
ScrollReveal().reveal('img, .services-container, .projects-box, .contact form,', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.map, .input-box', { delay: 400, origin: 'bottom' });
