document.addEventListener('DOMContentLoaded', ()=>{
    const toggleForm = document.querySelector('#toggle_form')
    const formChild = document.querySelector('.form_child')
    const formAdult = document.querySelector('.form_adult')
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
        })
    }
    closeElement('.btn_close', '.popup')


    //stepsForm
    try{
        const popup = document.querySelector('.popup')
        const popupMess = popup.querySelector('.popup_mess')
        const resultMess = popup.querySelector('.result_mess')
        const btnNextStep = popup.querySelector('.form_submit')
        let step = 0;
        const btnToggleBoll = popup.querySelector('.btn_toggle_boll')
        //Переменная для проверки вывода всплываши с ошибкой
        let isError = false
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
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;
                    `
                }else{
                    popup.classList.remove('error')
                    popup.style.cssText = `
                        width: 736px;
                        height: 334px;
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
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;
                    `
            }else{
                popup.classList.remove('error')
                popup.style.cssText = `
                        width: 736px;
                        height: 334px;
                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;
                    `
            }
        })
    }catch(e){
        console.error(e)
    }
})
