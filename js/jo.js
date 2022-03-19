const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescribtions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const leftBlock = document.querySelectorAll('.design-block__img')
const logo = document.querySelectorAll('.design__title')
// console.log(tabDescribtions);
// console.log(tabImages);
tabButtons.forEach((tabButton, index) => {
    // клик по кнопке
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler

        tabDescribtions.forEach((descr, indexDescr) => {
            if (index === indexDescr) {
                descr.classList.remove('hidden')
            } else {descr.classList.add('hidden')
                }
        })
        // добавим картинки
        tabImages.forEach((image, indexImage) => {
            if (index === indexImage) {
                image.classList.remove('hidden')
            } else { 
                image.classList.add('hidden')
                }
        })
        // console.log(event);
        tabButtons.forEach(btn => {
                if (btn === event.target) {
                    btn.classList.add('design-list__item_active')
                } else {
                    btn.classList.remove('design-list__item_active')
                }
            })     
    })
    
})

data-tabs-handler="interior"