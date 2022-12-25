const $daysNode = document.getElementById('days'),
$hoursNode = document.getElementById('hours'),
$minutesNode = document.getElementById('minutes'),
$secondsNode = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

const currentYear = new Date().getFullYear();
const newyear = new Date(`01 01 ${currentYear + 1}`);

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

