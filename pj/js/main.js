let i=0;
const texts=[
"Only for you ❤️","From my heart 💖","A small surprise 🎁",
"You deserve this 😘","Just smile 😊",
"My happiness 💓","My world 🌍",
"For your heart 💗","Always you 💘",
"My future 💍","Forever us ❤️",
"Love you 💕","My angel 😇",
"You are special 🌸","Always together 💞",
"My choice ❤️","My life 💖"
];

function updateGift(){
const card=document.getElementById("cardBox");
card.style.animation="none";
void card.offsetWidth;
card.style.animation="fadeIn .5s";

document.getElementById("giftImg").src=`assets/pics/pic (${i+1}).jpeg`;
document.getElementById("giftText").innerText=texts[i];
}

function nextGift(){ i=(i+1)%17; updateGift(); }
function prevGift(){ i=(i-1+17)%17; updateGift(); }
