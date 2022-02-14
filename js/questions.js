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


const answer = "sample1";

document.getElementById("check_correct").style.display = "none";
document.getElementById("check_incorrect").style.display = "none";

function judgeAnswer(){
  
  document.getElementById("check_correct").style.display = "none";
  document.getElementById("check_incorrect").style.display = "none";

  const button = document.querySelector(".get_answer");

  if(document.getElementById("input_answer").value == answer){
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
