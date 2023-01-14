const Toast = Swal.mixin({
   toast: true,
   position: 'top-start',
   showConfirmButton: false,
   timer: 1500,
   timerProgressBar: true,
   didOpen: (toast) => {
	   toast.addEventListener('mouseenter', Swal.stopTimer)
	   toast.addEventListener('mouseleave', Swal.resumeTimer)
   }
})

const minute = document.getElementById("hour");
let cm = 0;
const second = document.getElementById("minute");
let cs = 0;
const milisecond = document.getElementById("second");
let cms = 0;
const pl = document.getElementById("play");
const st = document.getElementById("pause");
const re = document.getElementById("reset");
let interval;
const intervalTime = 16;
let isFirst = true;
const i = document.getElementById("info");



st.style.display = "none";


pl.addEventListener("click", play);

function play(){
   update();
   interval = setInterval(update ,intervalTime);
   pl.style.display = "none";
   st.style.display = "block";
   if(isFirst){
	  Toast.fire({
		 title: "Hoooooooray!",
		 icon: "success",
		 text: "Stopwatch is stated",
		 customClass: {
			title: "toast-title",
			text: "toast-title"
		 }
	  })
   }
   isFirst = false;
}
st.addEventListener("click", pause)
function pause (){
   clearInterval(interval)
   st.style.display = "none";
   pl.style.display = "block";
}
re.addEventListener("click", reset);
function reset() {
   clearInterval(interval);
   cm = "00";
   cs = "00";
   cms = "000";
   minute.innerText = cm;
   second.innerText = cs;
   milisecond.innerText = cms;
   st.style.display = "none";
   pl.style.display = "block";
}




function update(){
   cms = Number(cms);
   cms += intervalTime;
   if (cms < 10){
	  milisecond.innerText = "00" + cms;
   } else if (cms < 100) {
	  milisecond.innerText = "0" + cms;
   }else if (cms < 1000) {
	  milisecond.innerText = cms;
   }else if (cms >= 1000) {
	  cms -= 1000;
	  cs++
	  milisecond.innerText = "000";
	  if (cs < 10) {
		 second.innerText = "0" + cs;
	  } else if (cs < 60) {
		 second.innerText = cs;
	  } else if (cs == 60){
		 cs -= 60;
		 cm++
		 second.innerText = "00";
		 if (cm < 10){
			minute.innerText = "0" + cm
		 }else if (cm >= 10) {
			minute.innerText = cm;
		 }
	  }
   }
}
setTimeout(start, 500)
function start() {
   Swal.fire({
	  icon: 'success',
	  title: "Hello My Stopwatch!",
	  text: "Designed by gholamhasanEhsani",
	  timer: 2500,
	  showConfirmButton: false
   })
}
i.addEventListener("click", ()=>{
   Swal.fire({
	  icon: 'info',
	  title: "Items used in this project",
	  html: `<p><a href="https://sweetalert2.github.io">Sweet Alert</a> messages<br />And my <b>dear brain!</b></p>`,
	  footer: `<p>Designed by <b><a href="https://www.sololearn.com/Profile/20329397"> gholamhasanEhsani</a></b></p>`,
	  confirmButtonColor: "#00BF43",
	  willOpen: pause()
   })
})