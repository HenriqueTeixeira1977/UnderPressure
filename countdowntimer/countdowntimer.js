const launchDate = new Date("2024-07-25T00:00:00"); //  aqui posso alterar o data final;

function countdown() {
  const currentDate = new Date();
 
  const difference = launchDate.getTime() - currentDate.getTime();
  
  const totalSeconds = Math.floor(difference / 1000);
  
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
}

countdown();

setInterval(countdown, 1000);
