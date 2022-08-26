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

            renderTime(data)
            isLoad = false
            if(isLoad == false){
                loader.style.display= 'none'
            }
        })


    function renderTime(data){
        for(let i = 0; i < data.length; i++){
            let dateWrapper = colums[i].querySelector('.date').querySelector('span')
            if(dateWrapper.textContent == data[i].date){
                for(let c = 0; c < data[i].time.length; c++){
                    let time = document.createElement('div')
                    time.classList.add('time_item')
                    time.innerHTML = `<span>${data[i].time[c].clock}</span>`
                    if(data[i].time[c].active == true){
                        time.innerHTML = `<span class="active">${data[i].time[c].clock}</span>`
                    }
                    colums[i].appendChild(time)
                }

            }
        }
    }

});
