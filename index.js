const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timeId;

  return (seconds) => {
    clearInterval(timeId);
    writeTime(seconds);

    timeId = setInterval(() => {   
      if (seconds <= 0) {
        clearInterval(timeId);
        timerEl.innerHTML = 'hh:mm:ss';
      } else {
        writeTime(seconds);
      };
    }, 1000);

    function writeTime() {
      let hour = Math.floor(seconds/3600);
      let minute = Math.floor(seconds / 60 % 60);
      let second = seconds % 60;

      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;

      timerEl.innerHTML = `${hour}:${minute}:${second}`; 
      seconds -= 1;
    };
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});