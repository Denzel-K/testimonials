const toTakpor = document.querySelectorAll('.toTakpor');
const toTanya = document.querySelectorAll('.toTanya');
const Tanya = document.querySelector('.Tanya');
const Tarkpor = document.querySelector('.Tarkpor');
// const badilisha = document.querySelectorAll('.slide_change');


toTakpor.forEach(nex => {
    nex.addEventListener ('click', ()=> {
        Tarkpor.classList.remove ('hidden');
        Tanya.classList.add('hidden');
    })
})

toTanya.forEach(prev => {
    prev.addEventListener ('click', ()=> {
        Tarkpor.classList.add ('hidden');
        Tanya.classList.remove('hidden');
    })
})


