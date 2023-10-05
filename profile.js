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


