/* ==========================================
   VISHNU SAHASRANAMA
   js/shlokas.js
========================================== */

/* ==========================================
   STATE
========================================== */

let currentIndex = 0;
let currentLanguage =
localStorage.getItem("vs_language") || "en";

/* ==========================================
   ELEMENTS
========================================== */

const shlokaIcon =
document.getElementById("shlokaIcon");

const shlokaTitle =
document.getElementById("shlokaTitle");

const shlokaVerse =
document.getElementById("shlokaVerse");

const shlokaSub =
document.getElementById("shlokaSub");

const breakdown =
document.getElementById("breakdown");

const meaning =
document.getElementById("meaning");

const reflection =
document.getElementById("reflection");

const progressText =
document.getElementById("progressText");

const counter =
document.getElementById("counter");

const jumpInput =
document.getElementById("jumpInput");

const prevTop =
document.getElementById("prevTop");

const nextTop =
document.getElementById("nextTop");

const prevBottom =
document.getElementById("prevBottom");

const nextBottom =
document.getElementById("nextBottom");

const langEn =
document.getElementById("langEn");

const langKn =
document.getElementById("langKn");

/* ==========================================
   RENDER SHLOKA
========================================== */

function renderShloka(index){

    const shloka = SHLOKAS[index];

    if(!shloka) return;

    animateTransition();

    shlokaIcon.textContent =
    shloka.icon;

    shlokaTitle.textContent =
    shloka.title;

    shlokaVerse.textContent =
    shloka.verse;

    document.getElementById("shlokaSub").textContent =
    shloka.transliteration[currentLanguage];

    breakdown.innerHTML =
    shloka.breakdown[currentLanguage];

    meaning.textContent =
    shloka.meaning[currentLanguage];

    reflection.textContent =
    shloka.reflection[currentLanguage];

    progressText.textContent =
    `Shloka ${shloka.id}`;

    counter.textContent =
    `${shloka.id} / ${SHLOKAS.length}`;

    jumpInput.value =
    shloka.id;

    updateButtons();

}

/* ==========================================
   UPDATE NAVIGATION
========================================== */

function updateButtons(){

    prevTop.disabled =
    currentIndex === 0;

    prevBottom.disabled =
    currentIndex === 0;

    nextTop.disabled =
    currentIndex === SHLOKAS.length - 1;

    nextBottom.disabled =
    currentIndex === SHLOKAS.length - 1;

}

/* ==========================================
   NEXT
========================================== */

function nextShloka(){

    if(
        currentIndex <
        SHLOKAS.length - 1
    ){

        currentIndex++;

        renderShloka(currentIndex);
    }

}

/* ==========================================
   PREVIOUS
========================================== */

function previousShloka(){

    if(currentIndex > 0){

        currentIndex--;

        renderShloka(currentIndex);
    }

}

/* ==========================================
   JUMP TO SHLOKA
========================================== */

function jumpToShloka(){

    const number =
    parseInt(jumpInput.value);

    if(
        isNaN(number) ||
        number < 1 ||
        number > SHLOKAS.length
    ){

        return;
    }

    currentIndex =
    number - 1;

    renderShloka(currentIndex);

}

/* ==========================================
   LANGUAGE SWITCH
========================================== */

function setLanguage(lang){

    currentLanguage = lang;

    localStorage.setItem(
        "vs_language",
        lang
    );

    langEn.classList.remove("active");
    langKn.classList.remove("active");

    if(lang === "en"){

        langEn.classList.add("active");

    }else{

        langKn.classList.add("active");

    }

    renderShloka(currentIndex);

}

/* ==========================================
   LOTUS TRANSITION
========================================== */

function animateTransition(){

    const card =
    document.querySelector(".shloka-card");

    card.style.opacity = "0";
    card.style.transform =
    "translateY(25px) scale(.98)";

    setTimeout(()=>{

        card.style.transition =
        "all .5s ease";

        card.style.opacity = "1";

        card.style.transform =
        "translateY(0) scale(1)";

    },100);

}

/* ==========================================
   EVENTS
========================================== */

nextTop.addEventListener(
"click",
nextShloka
);

nextBottom.addEventListener(
"click",
nextShloka
);

prevTop.addEventListener(
"click",
previousShloka
);

prevBottom.addEventListener(
"click",
previousShloka
);

jumpInput.addEventListener(
"change",
jumpToShloka
);

jumpInput.addEventListener(
"keypress",
(e)=>{

    if(e.key === "Enter"){

        jumpToShloka();

    }

});

langEn.addEventListener(
"click",
()=>setLanguage("en")
);

langKn.addEventListener(
"click",
()=>setLanguage("kn")
);

/* ==========================================
   STARS
========================================== */

const stars =
document.getElementById("stars");

for(let i=0;i<120;i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random()*100 + "%";

    star.style.top =
    Math.random()*100 + "%";

    star.style.animationDelay =
    Math.random()*5 + "s";

    stars.appendChild(star);

}

/* ==========================================
   FIREFLIES
========================================== */

const fireflies =
document.getElementById("fireflies");

for(let i=0;i<20;i++){

    const firefly =
    document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left =
    Math.random()*100 + "%";

    firefly.style.top =
    Math.random()*100 + "%";

    firefly.style.animationDelay =
    Math.random()*20 + "s";

    fireflies.appendChild(firefly);

}

/* ==========================================
   FLOATING SANSKRIT LETTERS
========================================== */

const letters = [

"ॐ",
"वि",
"ष्णु",
"न",
"मो",
"श्री",
"हरिः",
"नारायण"

];

const sanskritContainer =
document.getElementById(
"sanskritLetters"
);

for(let i=0;i<18;i++){

    const span =
    document.createElement("span");

    span.className =
    "floating-sanskrit";

    span.innerText =
    letters[
        Math.floor(
            Math.random()
            * letters.length
        )
    ];

    span.style.left =
    Math.random()*100 + "%";

    span.style.animationDelay =
    Math.random()*15 + "s";

    span.style.fontSize =
    (18 + Math.random()*18)
    + "px";

    sanskritContainer
    .appendChild(span);

}

/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */

document.addEventListener(
"keydown",
(e)=>{

    if(e.key === "ArrowRight"){

        nextShloka();

    }

    if(e.key === "ArrowLeft"){

        previousShloka();

    }

});

/* ==========================================
   SWIPE SUPPORT
   (MOBILE)
========================================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
"touchstart",
(e)=>{

    touchStartX =
    e.changedTouches[0].screenX;

});

document.addEventListener(
"touchend",
(e)=>{

    touchEndX =
    e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe(){

    const distance =
    touchEndX - touchStartX;

    if(distance > 70){

        previousShloka();

    }

    if(distance < -70){

        nextShloka();

    }

}

/* ==========================================
   INITIAL LOAD
========================================== */

setLanguage(currentLanguage);

renderShloka(currentIndex);