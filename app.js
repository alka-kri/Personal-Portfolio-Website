//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar Links
            
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                })
            // active sections for animation on scroll
            sec.classList.add("show-animate");
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove("show-animate");
        }
    });

    // sticky head
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


//email message
const form = document.querySelector("#contact-form");
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const mobileNumber = document.querySelector("#MobileNumber");
const subject = document.querySelector("#Subject");
const mess = document.getElementById("Message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${mobileNumber.value}<br> Message: ${mess.value}`;

    Email.send({
      Host: "alkakumarimnd@gmail.com",
      Username: "alkakumarimnd@gmail.com",
      Password: "1234567890",
      To: "alkakumarimnd@gmail.com",
      From: "alkakumarimnd@gmail.com",
      Subject: subject.value,
      Body: bodyMessage,
    }).then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      }
    });

}

function reset() {
    fullName.value = "",
    email.value = "",
    mobileNumber.value=""
    subject.value = "",
    mess.value=""   
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
    reset();
});


