
let eventDate = new Date("March 19, 2026 05:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = eventDate - now;

let days = Math.floor(distance / (1000*60*60*24));
let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
let seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

},1000);

//form validations
let form = document.getElementById("eventForm");
if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name.length < 3){
alert("Name must be at least 3 characters");
return;
}

if(phone.length != 10){
alert("Phone number must be 10 digits");
return;
}

//store form data in localStorage
let email = document.getElementById("email").value;
let ticket = document.getElementById("ticket").value;
let mode = document.querySelector('input[name="mode"]:checked')?.value;

let formData = {
    name: name,
    email: email,
    phone: phone,
    ticket: ticket,
    mode: mode
};

localStorage.setItem("eventRegistration", JSON.stringify(formData));


openModal(name);

});
}

//back to top
function scrollTopPage(){
    window.scrollTo({
    top:0,
    behavior:"smooth"
    });
}

window.onscroll = function(){

let btn = document.getElementById("topBtn");

if(document.documentElement.scrollTop > 200){
    btn.style.display="block";
}
else{
    btn.style.display="none";
}

};

//save dark mode
function toggleTheme(){

let btn = document.getElementById("themeBtn");

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
    btn.innerHTML = "☀️";
}else{
    localStorage.setItem("theme","light");
    btn.innerHTML = "🌙";
}

}

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    document.getElementById("themeBtn").innerHTML = "☀️";
}

//modal
function openModal(name){

document.getElementById("modal").style.display="flex";

document.getElementById("modalText").innerHTML =
"Welcome "+name+" to IVARNA 2026";

}
function closeModal(){
document.getElementById("modal").style.display="none";
}
