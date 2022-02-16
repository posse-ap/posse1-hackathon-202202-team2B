// var time_base = new Date("2022/02/16");

let notr = 0;
function finalStage() {
  notr++;
  if(notr === 3) {
    var time_now = new Date();
    var time_now_display = time_now.getTime();
    var times1 = sessionStorage.getItem('times1');
    console.log(time_now_display);
    var time = time_now_display - times1;
    console.log(time);
    sessionStorage.setItem('times2',time);
    window.location.href = '../html/clear.html';
  }
}

var times2 = sessionStorage.getItem('times2');
console.log(times2)
var minutes = Math.floor(times2 / 60000);
var seconds = Math.floor((times2 - minutes*60000) / 1000);
var timeDisplay = document.getElementById("time_display");
timeDisplay.textContent = minutes + "分" + seconds + "秒";
console.log(minutes + "分" + seconds + "秒");


// $("#game_start").click(function(){
//     var time_old = new Date();
//     var time_old_display = time_old.getTime();
//     console.log(time_old_display); 
//     sessionStorage.setItem('times1',time_old_display);
// });

  // // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  // $('a:not([href^="#"]):not([target])').on('click', function(e){

  //   console.log('aaa');
  //   e.preventDefault(); // ナビゲートをキャンセル
  //   const url = $(this).attr('href'); // 遷移先のURLを取得
  //     $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
  //     setTimeout(function(){
  //       window.location = url;  // 0.8秒後に取得したURLに遷移
  //     }, 2000);
  // });

function getTime() {
  var time_old = new Date();
  var time_old_display = time_old.getTime();
  console.log(time_old_display); 
  sessionStorage.setItem('times1',time_old_display);
}