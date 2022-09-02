document.addEventListener('DOMContentLoaded', ()=>{
    class owlItem {
        constructor(
                        element = null,
                        options = {}
        ) {
            this.element = document.querySelector(element)
            this.options = options
        }
        init(){
            this.element.classList.add('owl-carousel')
            this.element.classList.add('owl-theme')
            $(this.element).owlCarousel({
                ...this.options
            })
        }
    }

    class sliceText{
        constructor(elementWrapper = null,text = null, size = 250){
            this.elementWrapper = document.querySelector(elementWrapper)
            this.text =  this.elementWrapper.querySelectorAll(text)
            this.size = size
        }
        slice(){
            this.text.forEach(item=>{
                if(item.textContent.length > this.size){
                    item.textContent = item.textContent.slice(0, this.size) + '...'
                }
            })
        }
    }

    //Наша команда
    const teamList  = new owlItem(
        '.team_list',
        {
            loop:true,
            margin:10,
            nav:false,
            dots: true,
            responsive:{
                0:{
                    items:1.3
                },
                600:{
                    items:1.5
                },
                768:{
                  items: 2
                },
                1024:{
                    items:4
                }
            }
        }
    )
    teamList.init()
    const teamItem = new sliceText(
        '.team_list',
        '.text',
        90)
    teamItem.slice()

    //


    //список услуг
    const servicesList = new owlItem('.services_list' , {
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:1.5,

            },
            768:{
                items: 2
            },
            1000:{
                items:3
            }
        }
    })


    //Адаптив
    if(document.body.clientWidth < 1024){
        servicesList.init()
        const servicesListItemText = new sliceText(
            '.services_list',
            '.descr',
            90)
        servicesListItemText.slice()

    }else{
        const servicesListItemText = new sliceText(
            '.services_list',
            '.descr',
            150)
        servicesListItemText.slice()
    }
    //


    //Бургер подложка
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    document.body.appendChild(overlay)
    const headerMenu = document.querySelector('.header_menu')
    let cloneHeaderMenu = headerMenu.cloneNode(true)
    let mobileMenu = document.createElement('div')
    let mobileMenuContainer = document.createElement('div')
    mobileMenuContainer.classList.add('container')

    mobileMenu.classList.add('mobile_menu')
    mobileMenuContainer.appendChild(cloneHeaderMenu)
    mobileMenu.appendChild(mobileMenuContainer)
    document.body.appendChild(mobileMenu)

    const burgerBtn = document.querySelector('.burger_btn')
    burgerBtn.addEventListener('click', (e)=>{
        burgerBtn.classList.toggle('active_menu')

        if(burgerBtn.classList.contains('active_menu')){
            mobileMenu.style.left = '0'
            document.body.style.overflow = 'hidden'
            overlay.style.display = 'block'
        }else{
            mobileMenu.style.cssText = `left: -400%;
            transition: 0.3s all;
            transition-duration: 0.5s;`
            document.body.style.overflow = ''
            overlay.style.display = ''
        }
    })

    let liList  = mobileMenu.querySelectorAll('li')
    liList.forEach(item =>{
        if(item.children.length > 1){
            item.classList.add('toggle_sub_menu')
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                e.stopPropagation()
                item.classList.toggle('show_submenu')
            })
            let subLi = item.querySelectorAll('li')
            subLi.forEach(i=>{
                if(i.children.length > 1){
                    i.classList.add('toggle_sub_menu')
                    i.addEventListener('click', (e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                        i.classList.toggle('show_submenu_2')
                    })
                }
            })
        }
    })

    //

    //Форма
    const toggleForm = document.querySelector('#toggle_form')
    const formChild = document.querySelector('.form_child')
    const formAdult = document.querySelector('.form_adult')

    let step = 0;

    //Переменная для проверки вывода всплываши с ошибкой
    let isError = false


    toggleForm.addEventListener('click', ()=>{
        toggleForm.classList.toggle('adult')
        if(toggleForm.classList.contains('adult')){
            formAdult.style.display = 'block'
            formChild.style.display = 'none'
        }else{
            formAdult.style.display = 'none'
            formChild.style.display = 'block'
        }
    })

    function closeElement(btnClass, elementClass){
        const element = document.querySelector(elementClass)
        let btn = element.querySelector(btnClass)

        btn.addEventListener('click', (e)=>{
            e.preventDefault()
            element.classList.remove('active')
            document.body.style.overflow = ''
            element.style.cssText = ``
            step = 0
            let popup_mess = element.querySelector('.popup_mess').style.display = 'block'
            let mess = element.querySelector('.result_mess')
            mess.style.display = 'none'

        })
    }
    closeElement('.btn_close', '.popup',)
    //stepsForm
    try{
        const popup = document.querySelector('.popup')
        const popupMess = popup.querySelector('.popup_mess')
        const resultMess = popup.querySelector('.result_mess')
        const btnNextStep = popup.querySelector('.next_step')
        btnNextStep.addEventListener('click', (e)=>{
            e.preventDefault()
            step++
            if(step > 0){
                popupMess.style.display = 'none'
                resultMess.style.display = 'block'
                if(isError === true){
                    popup.classList.add('error')
                    popup.style.cssText = `
                        width: 736px;
                        height: 334px;
                        display: block;
                        background: #FFF url(./assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;
                    `
                }else{
                    popup.classList.remove('error')
                    popup.style.cssText = `
                        width: 736px;
                        height: 334px;
                        display: block;
                        background: #FFF url(./assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;
                    `
                }
            }
        })
        const toggleFormWrapper = document.querySelector('.toggle_form')
        const btnsFormsTrigger = toggleFormWrapper.querySelectorAll('.form_submit')
        btnsFormsTrigger.forEach(item=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                popup.style.display = 'block'
            })
        })
    }catch(e){
        console.error(e)
    }





})
