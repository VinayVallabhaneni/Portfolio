// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
    //sticky header
    let header = document.querySelector("header");

    header.classList.toggle('sticky',window.scrollY > 100);
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

let btn = document.getElementById('btn1');
btn.addEventListener('click',function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('number').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('msg').value;

    var body = 'name: '+ name +'<br/> email: ' + email +'<br/> number: '+ mobile + '<br/> subject:'+ subject + '<br/> msg:'+ message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vinaybobby1122@gmail.com",
        Password : "19F36CB83AF41876AECE1D0C47849AF4EF58",
        To : 'vinaybobby1122@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})