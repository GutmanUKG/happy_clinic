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
})
