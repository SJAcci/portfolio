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

document.addEventListener("DOMContentLoaded", function(){
    getTime()
    setInterval(getTime, 1000);
})

function btn_gnb(){
    document.querySelector('.gnb').classList.toggle('active')
}
function btn_openFile(){
    document.querySelector('.pop_file').classList.add('active')
}
function btn_min(el){

}
function btn_max(el){
    
}
function btn_close(el){
    document.querySelector(`${el}`).classList.remove('active')
}