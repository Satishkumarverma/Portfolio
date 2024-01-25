const tab_link = document.getElementsByClassName('tab-link')
const tab_content = document.getElementsByClassName('tab-content')
const side_menu = document.getElementById('side-menu')
const msg = document.getElementById('msg')
const more = document.getElementById('more')
const btn_seemore = document.getElementById('seemore')
const btn_seeless = document.getElementById('seeless')
const content = document.querySelector('#side-menu')
const content_msg = document.getElementById('content_msg')


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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxT4nK_KzKuamjyZXGn9z1rml1yfFUHGYC_a5M9dzowgVxXG3Le_aNDmitPri2TTUOG/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    content_msg.innerHTML = `<img class="loader" src="loader/Spinner.gif" alt="loader">`
    e.preventDefault()
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
})

let typed = new Typed('#text-auto', {
    strings: ['Web Developer'],
    typeSpeed: 100,
    loop: true,
});

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

