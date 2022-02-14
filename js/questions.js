'use strict';

const questions_main = document.getElementById('main');
const hint = document.querySelector('.questions_hint');

hint.addEventListener('click', function  display_hint() {
    questions_main.style.display = 'none';
    document.querySelector('.hint_').style.display = 'block';
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
