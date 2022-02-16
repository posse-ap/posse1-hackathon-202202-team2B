'use strict';

let hints = document.querySelectorAll('.questions_hint');
let quits = document.querySelectorAll('.questions_quit');
let hint_divs = document.querySelectorAll('.hint_');
let quit_divs = document.querySelectorAll('.quit_');
// let try_again_buttons = document.querySelectorAll('.hint_try_again');

//カウントダウン画面
$(window).on('load',function(){ //ロードされた時
  $('#main').hide();
  $('.questions_countdown_container').delay(1500).fadeOut(1500);
  $('#main').delay(3000).fadeIn('slow');
});


// ヒント画面の表示

hints[0].addEventListener('click', function display_hint() {
    hint_divs[0].style.display = 'block';
})
hints[1].addEventListener('click', function display_hint() {
    hint_divs[1].style.display = 'block';
})
hints[2].addEventListener('click', function display_hint() {
    hint_divs[2].style.display = 'block';
})




const answer1 = "む";
const answer2 = "4";
const answer3 = "おおいた";


document.getElementById("check_correct").style.display = "none";
document.getElementById("check_incorrect").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";
//「問題まだ終わってないよ」画面
document.getElementById("question4").style.display = "none";

function judgeAnswer1(){
  
  document.getElementById("check_correct").style.display = "none";
  document.getElementById("check_incorrect").style.display = "none";

  const button = document.querySelector(".get_answer");

  if(document.getElementById("input_answer").value == answer1){
      document.getElementById("check_correct").style.display = "block";
      document.getElementById("hint").style.display = "none";
      document.getElementById("quit").style.display = "none";
      document.getElementById("hint_box").style.display = "none";
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
      document.getElementById("hint_box2").style.display = "none";
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
      document.getElementById("hint_box3").style.display = "none";
      button.classList.add("notClick");
  }else{
      document.getElementById("check_incorrect3").style.display = "block";
      document.getElementById("hint3").style.display = "block";
      document.getElementById("quit3").style.display = "block";
  }
}

function nextQuestion1(){
  document.getElementById("question2").style.display = "block";
  document.getElementById("check_correct2").style.display = "none";
  document.getElementById("check_incorrect2").style.display = "none";
}

function nextQuestion2(){
  document.getElementById("question3").style.display = "block";
  document.getElementById("check_correct3").style.display = "none";
  document.getElementById("check_incorrect3").style.display = "none";
}

function nextQuestion3(){
  $("#question4").fadeIn(2000).css("display", "flex");
}



// ボーナスステージ3回クリックで画面遷移
// let notr = 0;
// function finalStage() {
//   notr++;
//   if(notr == 3) {
//     window.location.href = '../html/clear.html';
//   }
// }

$(function(){
  $("#last_button").click(function(){
      setTimeout(function(){
        autoScroll(scrollY);
      function autoScroll(y){
          if (y<-1 || scrollY>y+100) {
              return
          }
          y=y-1; // 垂直方向のスクロール量を減らす
          scrollTo(scrollX,y);
          setTimeout(autoScroll,1,y);
    }},3700);
    setTimeout(function(){
      $(".remove1").fadeOut();
    },5200);
    setTimeout(function(){
      $(".remove2").fadeOut();
    },7000);
    setTimeout(function(){
      $(".remove3").fadeOut();
    },8000);
  });
});
