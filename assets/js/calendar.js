document.addEventListener('DOMContentLoaded',()=>{
    const days_list = document.querySelector('.days_list')
    const colums = days_list.querySelectorAll('.day_date')
    const days = []
    let loader = document.querySelector('#loader')
    let isLoad = true
    let url = `/days.json`

    fetch(`${url}`)
        .then(res=> res.json())
        .then(data=>{
            //Функция формирует журнал времени и отлючает лоадер
            renderTime(data)
            isLoad = false
            if(isLoad == false){
                loader.style.display= 'none'
            }
        })
    //Текущая дата
    let curDate = new Date().getDate()
    let curMonth = new Date().getMonth()
    let date = (function (){
        if(curMonth +1 < 10){
            curMonth = `0${curMonth + 1}`
        }else{
            curMonth = `${curMonth + 1}`
        }
        return `${curDate}.${curMonth}`
    })()

    function renderTime(data){
        for(let i = 0; i < data.length; i++){
            let dateWrapper = colums[i].querySelector('.date').querySelector('span')
            if(dateWrapper.textContent == data[i].date){
                //Поиск текущей даты в таблице и добавление к ней класса
                if(dateWrapper.textContent == date){
                    dateWrapper.parentNode.parentNode.classList.add('cur_date')
                }
                //Обертка для списка времени примема
                let time_wrapper = document.createElement('div')
                time_wrapper.classList.add('time_wrapper')
                for(let c = 0; c < data[i].time.length; c++){
                    //Формирование елемента времени приема
                    let time = document.createElement('div')
                    time.classList.add('time_item')
                    time.innerHTML = `<span>${data[i].time[c].clock}</span>`
                    time_wrapper.appendChild(time)
                    //Выделение свободных часов
                    if(data[i].time[c].active == true){
                        time.innerHTML = `<span class="active">${data[i].time[c].clock}</span>`
                        time_wrapper.appendChild(time)
                    }
                    //Сортировка по колонкам
                    colums[i].appendChild(time_wrapper)
                }

            }
        }
    }
});
