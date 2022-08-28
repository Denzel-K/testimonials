const previous = document.querySelectorAll('.previous');
const next = document.querySelectorAll('.nextone');
const Tanya = document.querySelector('.Tanya');
const Tarkpor = document.querySelector('.Tarkpor');
const previousbtn = document.querySelectorAll('.prev');
const nextbtn = document.querySelectorAll('.next');
const badilisha = document.querySelectorAll('.slide_change');


next.forEach(nex => {
    nex.addEventListener ('click', ()=> {
        Tarkpor.classList.remove ('hidden');
        Tanya.classList.add('hidden');

        badilisha.forEach(state => {
            state.classList.add ('reverse-btns');
        })

        nextbtn.forEach (ahead => {
            ahead.classList.add ('rotating');
        })
        previousbtn.forEach (behind => {
            behind.classList.add ('rotating');
        })
    })
})

previous.forEach(prev => {
    prev.addEventListener ('click', ()=> {
        Tarkpor.classList.add ('hidden');
        Tanya.classList.remove('hidden');

        badilisha.forEach(state => {
            state.classList.remove ('reverse-btns');
        })

        nextbtn.forEach (ahead => {
            ahead.classList.remove ('rotating');
        })
        previousbtn.forEach (behind => {
            behind.classList.remove ('rotating');
        })
    })
})


