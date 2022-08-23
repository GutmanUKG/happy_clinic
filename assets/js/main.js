document.addEventListener('DOMContentLoaded', ()=>{
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

        const btnToggleBoll = popup.querySelector('.btn_toggle_boll')

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
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;
                    `
                }else{
                    popup.classList.remove('error')
                    popup.style.cssText = `
                        width: 736px;
                        height: 334px;
                        display: block;
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;
                    `
                }
            }
        })

        btnToggleBoll.addEventListener('click', ()=>{
            isError = !isError
            if(isError === true){
                popup.classList.add('error')
                popup.style.cssText = `
                        width: 736px;
                        height: 334px;
                        display: block;
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;
                    `
            }else{
                popup.classList.remove('error')
                popup.style.cssText = `
                        width: 736px;
                        height: 334px;
                        display: block;
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;
                    `
            }
        })

        const toggleFormWrapper = document.querySelector('.toggle_form')
        const btnsFormsTrigger = toggleFormWrapper.querySelectorAll('.form_submit')
        console.log(btnsFormsTrigger)
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
