'use strict';

const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  
  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() { 
  //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
  
  });

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

$(function() {
  const cmt = $('.clear_comment');
  const cmt1 = $('#cmt1');
  const cmt2 = $('#cmt2');
  const cmt3 = $('#cmt3');
  const cmt4 = $('#cmt4');
  cmt.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 30) {
          cmt1.fadeIn();
      } else {
          cmt1.fadeOut();
      }
      if ($(this).scrollTop() > 40) {
        cmt2.fadeIn();
      } else {
          cmt2.fadeOut();
      }
      if ($(this).scrollTop() > 50) {
        cmt3.fadeIn();
      } else {
        cmt3.fadeOut();
      }
      if ($(this).scrollTop() > 60) {
        cmt4.fadeIn();
      } else {
        cmt4.fadeOut();
      }
  });
});

// 効果音
const music = new Audio('../music/clear.mp3');

window.addEventListener('load', function(){
  window.setTimeout(function(){
    music.play();
  }, 3000);
});
// window.addEventListener('load', function clear_bgm() {
//   music.play();
// });
// document.getElementById('game_start').addEventListener('click', function() {
//   music.pause();
// });
// function clear_bgm() {
//   music.play();
// };

