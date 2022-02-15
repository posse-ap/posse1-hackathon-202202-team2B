'use strict';

const questions_main = document.getElementById('main');
const hint = document.querySelector('.questions_hint');
const quit = document.querySelector('.questions_quit');
const try_again = document.querySelector('.hint_try_again');

// ヒント画面の表示
hint.addEventListener('click', function  display_hint() {
    questions_main.style.display = 'none';
    document.querySelector('.hint_').style.display = 'block';
})
// 諦める画面の表示
quit.addEventListener('click', function  display_quit() {
    questions_main.style.display = 'none';
    document.querySelector('.quit_').style.display = 'block';
})

try_again.addEventListener('click', function close_hint() {
    questions_main.style.display = 'block';
    document.querySelector('.hint_').style.display = 'none';
})



const answer1 = "sample1";
const answer2 = "sample2";
const answer3 = "sample3";


document.getElementById("check_correct").style.display = "none";
document.getElementById("check_incorrect").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";


function judgeAnswer1(){
  
  document.getElementById("check_correct").style.display = "none";
  document.getElementById("check_incorrect").style.display = "none";

  const button = document.querySelector(".get_answer");

  if(document.getElementById("input_answer").value == answer1){
      document.getElementById("check_correct").style.display = "block";
      document.getElementById("hint").style.display = "none";
      document.getElementById("quit").style.display = "none";
      button.classList.add("notClick");
  }else{
      document.getElementById("check_incorrect").style.display = "block";
      document.getElementById("hint").style.display = "block";
      document.getElementById("quit").style.display = "block";
  }
}

function judgeAnswer2(){
  
  document.getElementById("check_correct2").style.display = "none";
  document.getElementById("check_incorrect2").style.display = "none";

  const button = document.querySelector(".get_answer");

  if(document.getElementById("input_answer2").value == answer2){
      document.getElementById("check_correct2").style.display = "block";
      document.getElementById("hint2").style.display = "none";
      document.getElementById("quit2").style.display = "none";
      button.classList.add("notClick");
  }else{
      document.getElementById("check_incorrect2").style.display = "block";
      document.getElementById("hint2").style.display = "block";
      document.getElementById("quit2").style.display = "block";
  }
}

function judgeAnswer3(){
  
  document.getElementById("check_correct3").style.display = "none";
  document.getElementById("check_incorrect3").style.display = "none";

  const button = document.querySelector(".get_answer");

  if(document.getElementById("input_answer3").value == answer3){
      document.getElementById("check_correct3").style.display = "block";
      document.getElementById("hint3").style.display = "none";
      document.getElementById("quit3").style.display = "none";
      button.classList.add("notClick");
  }else{
      document.getElementById("check_incorrect3").style.display = "block";
      document.getElementById("hint3").style.display = "block";
      document.getElementById("quit3").style.display = "block";
  }
}

function nextQuestion1(){
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "block";
  document.getElementById("check_correct2").style.display = "none";
  document.getElementById("check_incorrect2").style.display = "none";
}

function nextQuestion2(){
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "block";
  document.getElementById("check_correct3").style.display = "none";
  document.getElementById("check_incorrect3").style.display = "none";
}

