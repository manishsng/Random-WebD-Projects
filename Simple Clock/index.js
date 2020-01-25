function setTime() {
  const hour = document.querySelector(".hours");
  const min = document.querySelector(".mins");
  const sec = document.querySelector(".secs");
  var date = new Date();
  if(date.getHours()<12)
  hour.style.transform = "rotate("+(date.getHours() / 12) * 360+"deg)";
  else
  hour.style.transform = "rotate("+(date.getHours()-12 / 12) * 360+"deg)";
  min.style.transform = "rotate("+(date.getMinutes() / 60) * 360+"deg)";
  sec.style.transform = "rotate("+(date.getSeconds() / 60) * 360+"deg)";
}
setInterval(setTime,10);
