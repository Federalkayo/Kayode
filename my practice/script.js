// Display an alert when the "Book Now" button is clicked
function bookNow() {
    alert("Thank you for your interest! We will get in touch soon.");
  }
  
  // Handle the contact form submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  function hamburg(){
    const navbar = document.querySelector('.dropdown')
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
  const navbar = document.querySelector('.dropdown')
  navbar.style.transform = 'translate(-500px)'
}
//display an alert when the price button is clicked
function price() {
  alert('thank you for your order')
}
 
let isDown = false;
let startY;
let scrollTop;

const slider = document.body;

slider.addEventListener('mousedown', (e) => {
    console.log('mousedown');
    isDown = true;
    slider.classList.add('grabbing-cursor');
    slider.classList.remove('grab-cursor');
    startY = e.pageY - slider.offsetTop;
    scrollTop = slider.scrollTop;
});

slider.addEventListener('mouseleave', () => {
    console.log('mouseleave');
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('grabbing-cursor');
    slider.classList.add('grab-cursor');
});

slider.addEventListener('mouseup', () => {
    console.log('mouseup');
    isDown = false;
    slider.classList.remove('grabbing-cursor');
    slider.classList.add('grab-cursor');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    console.log('mousemove');
    e.preventDefault();
    const y = e.pageY - slider.offsetTop;
    const walk = (y - startY) * 3; //scroll-fast
    slider.scrollTop = scrollTop - walk;
});



function hamburg() {
  const navbar = document.querySelector('.dropdown');
  if (navbar.style.transform === 'translateY(0px)') {
      navbar.style.transform = 'translateY(-500px)';
  } else {
      navbar.style.transform = 'translateY(0px)';
  }
}

function cancel() {
  const navbar = document.querySelector('.dropdown');
  navbar.style.transform = 'translateY(-500px)';
}