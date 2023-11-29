const endDate = new Date('2024-01-27T23:59:59').getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    let distance = endDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Konec 3. semestru';
        document.querySelector('.heroText').style.display = 'none';
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    seconds = seconds === 0 ? 59 : seconds - 1;
    minutes = seconds === 59 ? (minutes === 0 ? 59 : minutes - 1) : minutes;
    hours = minutes === 59 && seconds === 59 ? (hours === 0 ? 23 : hours - 1) : hours;
    days = hours === 23 && minutes === 59 && seconds === 59 ? (days === 0 ? 0 : days - 1) : days;

    const formattedDays = days === 1 ? `${days} day ` : `${days} days `;
    const formattedHours = hours === 1 ? `${hours} hour ` : `${hours} hours `;
    const formattedMinutes = minutes === 1 ? `${minutes} minute ` : `${minutes} minutes `;
    const formattedSeconds = seconds === 1 ? `${seconds} second` : `${seconds} seconds`;

    const formattedTime = `${formattedDays}${formattedHours}${formattedMinutes}${formattedSeconds}`;

    document.getElementById('countdown').innerHTML = formattedTime;
}, 1000);
