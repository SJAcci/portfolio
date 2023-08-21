function getTime(){
    let clock = document.querySelector('.t_clock');
    let date = new Date()
        hours = date.getHours()
        minutes = date.getMinutes();
    let ampm = hours >= 12 ? '오후' : '오전';

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    clock.innerHTML =  `${ampm}  ${hours}:${minutes}`;


}

window.addEventListener('load', function(){
    getTime()
    setInterval(getTime, 1000);
})