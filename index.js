let rand1 = Math.floor(Math.random()*6) + 1;
let src1 = "images/dice" + rand1 + ".png";
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",src1);

let rand2 = Math.floor(Math.random()*6) + 1;
let src2 = "images/dice" + rand2 + ".png";
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",src2);

if(rand1>rand2)
document.querySelector("h1").innerHTML="Player1 wins";
else if(rand1<rand2)
document.querySelector("h1").innerHTML="Player2 wins";
else
document.querySelector("h1").innerHTML="Draw";