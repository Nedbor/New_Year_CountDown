/* const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.getElementsByClassName('.final-sms');

const countdownDate = new Date('01 01, 2023 00:00:00').getTime();

let interval = setInterval(function(){
//Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000); 

*/
const $daysNode = document.getElementById('days'),
$hoursNode = document.getElementById('hours'),
$minutesNode = document.getElementById('minutes'),
$secondsNode = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

const currentYear = new Date().getFullYear();
const newyear = new Date(`January 01 ${currentYear + 1}`);

const timeCountDown = () => {
    const currentDate = new Date();
    const newYearDate = new Date(newyear);
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24 );
    const hours = Math.floor(totalSeconds / 3600)  % 24;
    const minutes = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) % 60;

    $daysNode.innerHTML = formatTime(days);
    $hoursNode.innerHTML = formatTime(hours);
    $minutesNode.innerHTML = formatTime(minutes);
    $secondsNode.innerHTML = formatTime(seconds);

    if(totalSeconds < 0){
        clearInterval(timeCountDown);
        $finalMessage.style.transform = 'translateY(0)';
    }

};

const formatTime = (time) => time > 10 ? time : `${time}`;

timeCountDown();
setInterval(timeCountDown, 1000);

