const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescribtions = document.querySelector('.design__descr')
// console.log(main);
tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        tabDescribtions.forEach((descr, indexDescr) => {
            if (index === indexDescr) {
                descr.classList.remove('hidden')
            } else {descr.classList.add('hidden')
                }
        })

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
        // event.target.classList.add('activ')
    })
    
})