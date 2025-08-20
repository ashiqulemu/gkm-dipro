
let Isotope_buttons = document.querySelectorAll('.Isotope_buttons');
Isotope_buttons.forEach((event)=>{
    event.addEventListener('click',()=>{

        document.querySelector('.btn-active').classList.remove('btn-active');
        event.classList.add('btn-active');

    })
})