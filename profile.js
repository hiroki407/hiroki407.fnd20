'use strict'



function prof1() {

  mask.classList.remove('hidden');

  modal1.classList.remove('hidden');

}



function reset1() {

  mask.classList.add('hidden');

  modal1.classList.add('hidden');

}



const b1 = document.getElementById("b1");

const mask = document.getElementById('mask');

const modal1 = document.getElementById('modal1');



b1.addEventListener("click", prof1);



mask.addEventListener('click', reset1)



function prof2() {

  mask.classList.remove('hidden');

  modal2.classList.remove('hidden');

}



function reset2() {

  mask.classList.add('hidden');

  modal2.classList.add('hidden');

}



const b2 = document.getElementById("b2");



const modal2 = document.getElementById('modal2');



b2.addEventListener("click", prof2);



mask.addEventListener('click', reset2)



function prof3() {

  mask.classList.remove('hidden');

  modal3.classList.remove('hidden');

}



function reset3() {

  mask.classList.add('hidden');

  modal3.classList.add('hidden');

}



const b3 = document.getElementById("b3");



const modal3 = document.getElementById('modal3');



b3.addEventListener("click", prof3);



mask.addEventListener('click', reset3)



function prof4() {

  mask.classList.remove('hidden');

  modal4.classList.remove('hidden');

}



function reset4() {

  mask.classList.add('hidden');

  modal4.classList.add('hidden');

}



const b4 = document.getElementById("b4");



const modal4 = document.getElementById("modal4");



b4.addEventListener("click", prof4);



mask.addEventListener("click", reset4)


const news = document.getElementById("news");



function addNews (array) {
  for (let i = 0; i < array.length; i++){
    news.innerText += array[i]+"\n" ;
  }
}
  
addNews(["9/17 希唯ちゃん七五三の写真を撮りました!","9/29 礼ちゃん1歳になりました!","10/22 冴音マルシェ出店!"]);

// 問題を用意
const quizArray =[
  ["Kiiの好きなものは?", "パパ","ママ","チョコレート","パパ"],
  ["Reiの好きなものは?", "パパ","ママ","クッキー","ママ"],
  ["Reiの誕生日はいつ?", "1/29","6/29","9/29","9/29"],
  ["Saeneは10/22に何をする?", "ランチ","買い物","マルシェ","マルシェ"]
];

const qa = quizArray;


// 問題を配置
const Question = document.getElementById("Q"); 
const answer1 = document.getElementById("a1");
const answer2 = document.getElementById("a2");
const answer3 = document.getElementById("a3");

let r = Math.floor(Math.random()*4);

function quiz(){

Question.innerText = qa[r][0];
answer1.innerHTML = qa[r][1];
answer2.innerHTML = qa[r][2];
answer3.innerHTML = qa[r][3];
}


// 成否
const checkAnswer = document.getElementById("cA");
function answerA(){
if(qa[r][1] === qa[r][4]){
checkAnswer.innerText = "正解!閲覧ありがとうございました!"
} else {
checkAnswer.innerText = "はずれです。ちゃんと見た!?"
} 
}
function answerB(){
if(qa[r][2] === qa[r][4]){
checkAnswer.innerText = "正解!閲覧ありがとうございました!"
} else {
checkAnswer.innerText = "はずれです。ちゃんと見た!?"
} 
}
function answerC(){
if(qa[r][3] === qa[r][4]){
checkAnswer.innerText = "正解!閲覧ありがとうございました!"
} else {
checkAnswer.innerText = "はずれです。ちゃんと見た!?!"
} 
}

document.getElementsByTagName("h3")[0].addEventListener("click",quiz);
document.getElementsByTagName("h3")[0].addEventListener("click",question);


document.getElementById("a1").addEventListener("click",check);
document.getElementById("a1").addEventListener("click",answerA);

document.getElementById("a2").addEventListener("click",check);
document.getElementById("a2").addEventListener("click",answerB);


document.getElementById("a3").addEventListener("click",check);
document.getElementById("a3").addEventListener("click",answerC);


function question() {

  mask.classList.remove('hidden');

  mondai.classList.remove('hidden');

}

function check() {

  kaito.classList.remove('hidden');

  mondai.classList.add('hidden');

}

function end() {

  kaito.classList.add('hidden');

  mask.classList.add('hidden');

  mondai.classList.add('hidden');

}

const mondai = document.getElementById('mondai');
const kaito = document.getElementById('kaito');

function nextr (){
  r = Math.floor(Math.random()*4);
}

mask.addEventListener('click', end);
mask.addEventListener('click', nextr);
