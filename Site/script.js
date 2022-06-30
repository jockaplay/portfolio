const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let secs = datetoday.getSeconds();

    horas.textContent = hr > 10 ? hr : "0" + hr;
    minutos.textContent = min > 10 ? min : "0" + min;
    segundos.textContent = secs > 10 ? secs : "0" + secs;
})