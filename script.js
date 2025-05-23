// HIGHLIGHT ACTIVE NAVBAR
const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

//CONTACT FORM SUBMISSION

const scriptURL = 'https://script.google.com/macros/s/AKfycbyOJd0RhVnFjNyo1-AL2aCcZ4E3Dfg9EXG2XvYCcWS-0FAlDdIKAR2frNIjZq7VUHIA/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("message");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      message.innerHTML = "Message sent successfully";
      setTimeout(() => message.innerHTML = "", 3000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});

//DARK MODE /LIGHT MODE

const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    

    if(body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});


window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if(theme === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
});

// BOTTOM TO TOP

const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


//TYPEWRITE EFFECT

const typewriterText = "John Paul del Castillo";
const typewriterElement = document.getElementById("typewriter");

let index = 0;

function typeEffect() {
  if (index < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typewriterElement.textContent = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

window.addEventListener("load", typeEffect);

function typeEffect() {
  if (index < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typewriterElement.style.opacity = 0;
      setTimeout(() => {
        typewriterElement.textContent = "";
        index = 0;
        typewriterElement.style.opacity = 1;
        typeEffect();
      }, 500);
    }, 2000);
  }
}



