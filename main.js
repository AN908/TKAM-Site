

//Variables

let atticusBtn = document.getElementById("AtticusInfo")
let dillBtn = document.getElementById("DillInfo")
let calBtn = document.getElementById("CalpurniaInfo")
let scoutBtn = document.getElementById("ScoutInfo")
let jemBtn = document.getElementById("JemInfo")
let tomBtn = document.getElementById("TomInfo")
let bobBtn = document.getElementById("BobInfo")
let booBtn = document.getElementById("BooInfo")

atticusBtn.addEventListener("click" , atticusStuff);
dillBtn.addEventListener("click" , dillStuff);
calBtn.addEventListener("click" , calStuff);
scoutBtn.addEventListener("click" , scoutStuff);
jemBtn.addEventListener("click" , jemStuff);
tomBtn.addEventListener("click" , tomStuff);
bobBtn.addEventListener("click" , bobStuff);
booBtn.addEventListener("click" , booStuff);

let charPhoto = document.getElementById("displayPhoto");
let characterTitle = document.getElementById("charName");
let charStuff = document.getElementById("charInfo");

function atticusStuff(){
   charPhoto.innerHTML = '<img src="images/640px-Gregory_Peck_Atticus_Publicity_Photo.jpg" alt="">';
   characterTitle.innerHTML = "Atticus Finch";
   charStuff.innerHTML = "Atticus is a father to Jem and Scout. In the book he is described as a man almost 50 years old that is frail. However in the book we see that Atticus is a strong Morally right man.He is also a very good sharpshooter. ";
}

function dillStuff(){
    charPhoto.innerHTML = `<img src="images/dill-harris.jpg" alt="">`;
    characterTitle.innerHTML = "Dill Harris";
    charStuff.innerHTML = "Dill Harris is 7 year old child in the start of the book. He is a love interest to scout but they skip that over in the film. Dill is from Meridian Mississipi";
}

function calStuff(){
    charPhoto.innerHTML = `<img src="images/cal.jpg" alt="">`;
    characterTitle.innerHTML = "Calpurina";
    charStuff.innerHTML = "Calpurina is a house keeper for Atticus Finch. Her family has worked with the finches for a long time, plus she has a son named Zeebo. We don't know her name but maybe her last name is Zeebo.";
}

function scoutStuff(){
    charPhoto.innerHTML = `<img src="images/Scout_Finch.webp" alt="">`;
    characterTitle.innerHTML = "Jean Louise Finch";
    charStuff.innerHTML = "Scout is a 6 year old child when the book first starts. She doesn't have morals but later in the book she see people in a good light. Also Scout lost her mother due to sudden heart attack.";
}

function jemStuff(){
    charPhoto.innerHTML = `<img src="images/Jem_Finch_29.webp" alt="">`;
    characterTitle.innerHTML = "Jeremy Finch";
    charStuff.innerHTML = "Jeremy Finch is a 10 year old boy. We see that Jem is brave because he knocked on Boo Radleys house. Later on we see him grow up and distant himself away from Scout.";
}

function tomStuff(){
    charPhoto.innerHTML = `<img src="images/Tom_Robinson.webp" alt="">`;
    characterTitle.innerHTML = "Tom Robinson";
    charStuff.innerHTML = "Tom Robinson is a black man that was wrongly accused of raping Bob Ewell daughter , Mayalla. He is a tall man with his left hand crippled. We see him as a calm man before his death. ";
}

function bobStuff(){
    charPhoto.innerHTML = `<img src="images/Bob_Ewell.webp" alt="">`;
    characterTitle.innerHTML = "Bob Ewell";
    charStuff.innerHTML = "Bob Ewell is described as a abusive dad to his children. He is often seen drunk and not caring about his children. We see that he tries to kill Jem and Scout but Boo Radley saves the day.";
}

function booStuff(){
    charPhoto.innerHTML = `<img src="images/boo-radley.jpg" alt="">`;
    characterTitle.innerHTML = "Boo Radley";
    charStuff.innerHTML = "Boo Radley was first introduced earlier in the book. Jem, Scout, and Dill thought he was a tall man that ate dogs. We see that he is mute but he has a big heart at the end.";
}