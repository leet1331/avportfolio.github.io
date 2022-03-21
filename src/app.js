const hamburgerbutton=document.getElementById('hamburger')
const navlist=document.getElementById('navlist')

function toggleButton(){
    navlist.classList.toggle('show')
}

hamburgerbutton.addEventListener('click',toggleButton)