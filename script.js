const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(function () {
  let curHour = new Date().getHours();

  curHour = curHour > 12 ? curHour - 12 : curHour;
  const newHour = curHour + new Date().getMinutes() / 60;

  hour.style.rotate = `${newHour * 30 - 90}deg`;
  min.style.rotate = `${
    (new Date().getMinutes() + new Date().getSeconds() / 60) * 6 - 93
  }deg`;
  sec.style.rotate = `${new Date().getSeconds() * 6 - 105}deg`;
}, 500);
