const tab_link = document.getElementsByClassName('tab-link')
const tab_content = document.getElementsByClassName('tab-content')
const side_menu = document.getElementById('side-menu')
const msg = document.getElementById('msg')
const more = document.getElementById('more')
const btn_seemore = document.getElementById('seemore')
const btn_seeless = document.getElementById('seeless')
const content = document.querySelector('#side-menu')
const content_msg = document.getElementById('content_msg')
const cus_name = document.getElementById('name')
const cus_email = document.getElementById('email')
const error_name = document.getElementById('error_name')
const error_email = document.getElementById('error_email')

// ----------------------------------------About-------------------------------------------
function opentab(tabname) {
    for (tl of tab_link) {
        tl.classList.remove('active')
    }
    for (tc of tab_content) {
        tc.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active')
    document.getElementById(tabname).classList.add('active-tab')
}

// ----------------------------------------Navbar------------------------------------------
if (side_menu.style.right = '-200px') {
    content.addEventListener('click', closemenubar)
}

function closemenubar() {
    side_menu.style.right = '-200px'
}

function closemenu() {
    side_menu.style.right = '-200px'
}

function openmenu() {
    side_menu.style.right = '0'
}

// --------------------------------------------Form-------------------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxT4nK_KzKuamjyZXGn9z1rml1yfFUHGYC_a5M9dzowgVxXG3Le_aNDmitPri2TTUOG/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    let c_name = cus_name.value
    let c_email = cus_email.value
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    error_name.innerHTML = ''
    error_email.innerHTML = ''
    if (c_name.length == 0 | c_name.length <= 2 | c_email.length == 0 | !c_email.match(validEmail)) {
        if (c_name.length == 0) {
            error_name.innerHTML = '*This field is required.'
        } else if (c_name.length <= 2) {
            error_name.innerHTML = '*Enter the valid name.'
        }
        if (c_email.length == 0) {
            error_email.innerHTML = '*This field is required.'
        } else if (!c_email.match(validEmail)) {
            error_email.innerHTML = '*Enter the valid email.'
        }
    } else {
        content_msg.innerHTML = `<img class="loader" src="loader/Spinner.gif" alt="loader">`
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                content_msg.innerHTML = ''
                msg.innerHTML = `<i class="fa-solid fa-circle-check fa-l" style="color: green;"></i> Your message has been submited successfully!!`
                setTimeout(function () {
                    msg.innerHTML = '';
                }, 2000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    }
})

// ---------------------------------------------------Looping Text------------------------------
let typed = new Typed('#text-auto', {
    strings: ['Web Developer', 'Python Developer'],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});

// ------------------------------------------------Portfolio-------------------------------------
function seemore() {
    more.style.display = 'grid'
    btn_seeless.style.display = 'block'
    btn_seemore.style.display = 'none'
}
function seeless() {
    more.style.display = 'none'
    btn_seeless.style.display = 'none'
    btn_seemore.style.display = 'block'
}

// -------------------------------------------------Share-----------------------------------------
async function share() {
    await navigator.share({
        url: 'https://satishkumarverma.github.io/Portfolio/',
    })
}

// ---------------------------------------------------Achivement-----------------------------------
$(document).ready(function () {
    $('.carousel_1').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3
            }
        }
    })
});