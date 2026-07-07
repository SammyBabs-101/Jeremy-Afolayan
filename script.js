/* ================================
   HAPPY BIRTHDAY JEREMY
   SCRIPT PART 1
=============================== */

const pages = document.querySelectorAll(".page");
let currentPage = 0;

// ---------------------------
// Show Page
// ---------------------------

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

setTimeout(()=>{

pages[index].classList.add("active");

currentPage=index;

if(pages[index].id==="letter"){

startLetter();

}

if(pages[index].id==="memories"){

startGallery();

}

},250);

}

// ---------------------------
// Next Page
// ---------------------------

function nextPage(){

if(currentPage < pages.length-1){

showPage(currentPage+1);

}

}

// ---------------------------
// Previous Page
// ---------------------------

function prevPage(){

if(currentPage>0){

showPage(currentPage-1);

}

}

// ---------------------------
// Restart
// ---------------------------

function restartJourney(){

showPage(1);

}

// ---------------------------
// Loading Screen
// ---------------------------

setTimeout(()=>{

showPage(1);

},5000);

// ---------------------------
// Music prompt (open/close)
// ---------------------------

const music = document.getElementById("birthdaySong");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

// modal elements
const musicPrompt = document.getElementById("musicPrompt");
const musicYes = document.getElementById("musicYes");
const musicNo = document.getElementById("musicNo");

// open the prompt (shows modal)
function openMusicPrompt() {
    if (!musicPrompt) return;
    musicPrompt.setAttribute("aria-hidden", "false");
    // move keyboard focus into modal for accessibility
    musicYes?.focus();
}

// close the prompt (hides modal)
function closeMusicPrompt() {
    if (!musicPrompt) return;
    musicPrompt.setAttribute("aria-hidden", "true");
    // return focus to the music button
    musicBtn?.focus();
}

// wire the main music button to open the prompt
musicBtn.addEventListener("click", () => {
    openMusicPrompt();
});

// Yes -> start music and close modal
musicYes.addEventListener("click", () => {
    music.play().catch(()=>{ /* ignore autoplay errors when blocked by browser */ });
    musicBtn.innerHTML = "🔊 Music Playing";
    playing = true;
    closeMusicPrompt();
});

// No -> just close modal
musicNo.addEventListener("click", () => {
    closeMusicPrompt();
});

// Keep the play/pause state in sync if something else pauses the audio
music.addEventListener("pause", () => {
    playing = false;
    musicBtn.innerHTML = "🎵 Play Music";
});
music.addEventListener("play", () => {
    playing = true;
    musicBtn.innerHTML = "🔊 Music Playing";
});

function beginJourney(){

    const message = document.getElementById("specialMessage");

    message.classList.add("show");

    setTimeout(() => {

        message.classList.remove("show");

        setTimeout(() => {
            nextPage();

            // start music here
            document.getElementById("birthdaySong").play();

        },1000);

    },2000);

}

// ---------------------------
// Stars
// ---------------------------

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}

// ---------------------------
// Letter
// ---------------------------

/* ===============================
   TYPEWRITER WITH BLINKING CURSOR
================================= */

const letter = `Dear Jeremy,

Happy Birthday! 🎉

From the very first day I stepped into this house, you've shown kindness, intelligence, and a heart that inspires everyone around you.

You are respectful, caring, brilliant, and destined for great things.

May God bless this new chapter of your life with wisdom, favour, good health, happiness and outstanding success.

Keep making your family proud.

Keep dreaming big.

Never stop believing in yourself.

Happy Birthday once again!

With love,

Sammy ❤️`;

let typingStarted = false;

function startLetter() {

    const box = document.getElementById("letterText");

    if (!box) return;

    box.innerHTML = "";

    typingStarted = true;

    let i = 0;

    function type() {

        if (i < letter.length) {

            box.innerHTML =
                letter.substring(0, i + 1) +
                '<span class="cursor">|</span>';

            i++;

            setTimeout(type, 35);

        } else {

            box.innerHTML =
                letter +
                '<br><br><strong style="color:gold;">❤️ Made with love by Sammy</strong>';

        }

    }

    type();

}/* ==========================
   PHOTO GALLERY
========================== */

const gallery = [

{

image:"jeremy1.jpg",

title:"A Bright Smile 😊",

caption:"Your smile brings joy to everyone around you."

},

{

image:"jeremy2.jpg",

title:"A Brilliant Mind 📚",

caption:"Keep shining as the intelligent scholar that you are."

},

{

image:"jeremy3.jpg",

title:"A Bright Future 🌟",

caption:"May this new age bring endless success, favour and happiness."

}

];

let galleryIndex = 0;
let galleryTimer = null;

function startGallery(){

    const img = document.getElementById("galleryImage");
    const title = document.getElementById("galleryTitle");
    const caption = document.getElementById("galleryCaption");

    if(!img) return;

    if(galleryTimer){
        clearInterval(galleryTimer);
    }

    galleryIndex = 0;

    img.src = gallery[0].image;
    title.innerHTML = gallery[0].title;
    caption.innerHTML = gallery[0].caption;

    galleryTimer = setInterval(()=>{

        galleryIndex++;

        if(galleryIndex >= gallery.length){
            galleryIndex = 0;
        }

        img.style.opacity = "0";

        setTimeout(()=>{

            img.src = gallery[galleryIndex].image;
            title.innerHTML = gallery[galleryIndex].title;
            caption.innerHTML = gallery[galleryIndex].caption;

            img.style.opacity = "1";

        },500);

    },4000);

}/* ==========================
   BALLOONS
========================== */

const balloonArea = document.getElementById("balloons");

const balloonColors = ["🎈","🎈","🎈","🎉"];

for(let i=0;i<18;i++){

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = balloonColors[Math.floor(Math.random()*balloonColors.length)];

    balloon.style.left = Math.random()*100 + "%";

    balloon.style.animationDuration = (8 + Math.random()*8) + "s";

    balloon.style.animationDelay = (Math.random()*6) + "s";

    balloonArea.appendChild(balloon);

}const wishes=[

{
title:"🎁 Wish 1",
text:"May God continue to bless you with wisdom, favour, joy and success."
},

{
title:"📚 Wish 2",
text:"May God continue to increase your knowledge and bless your academic journey."
},

{
title:"❤️ Wish 3",
text:"May you continue to be the kind, respectful and caring person everyone admires."
},

{
title:"🌟 Wish 4",
text:"May your future be brighter than your dreams. Happy Birthday Jeremy!"
}

];

let wishIndex=0;

function nextWish(){

wishIndex++;

if(wishIndex>=wishes.length){

wishIndex=0;

}

document.getElementById("wishTitle").innerHTML=wishes[wishIndex].title;

document.getElementById("wishText").innerHTML=wishes[wishIndex].text;

}/* ===========================
   CONFETTI
=========================== */

const confetti = document.getElementById("confetti");

const colors = [
"#FFD700",
"#ffffff",
"#1E90FF",
"#FF69B4",
"#00FF7F"
];

for(let i=0;i<160;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"%";

piece.style.background=colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=(4+Math.random()*5)+"s";

piece.style.animationDelay=Math.random()*5+"s";

confetti.appendChild(piece);

}/* ===========================
   SIMPLE FIREWORKS
=========================== */

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

function drawFirework(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height/2;

const radius=2+Math.random()*3;

const color=colors[Math.floor(Math.random()*colors.length)];

for(let i=0;i<25;i++){

ctx.beginPath();

ctx.arc(

x+Math.cos(i)*Math.random()*80,

y+Math.sin(i)*Math.random()*80,

radius,

0,

Math.PI*2

);

ctx.fillStyle=color;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},600);

}

setInterval(drawFirework,900);/* GOLD SPARKLES */

const sparkleArea=document.getElementById("sparkles");

for(let i=0;i<40;i++){

const s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=Math.random()*100+"%";

s.style.animationDuration=(8+Math.random()*8)+"s";

s.style.animationDelay=Math.random()*5+"s";

sparkleArea.appendChild(s);

}
