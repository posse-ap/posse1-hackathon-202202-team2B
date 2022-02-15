'use strict';

const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".loading_wrapper");
const start_wrapper = $(".start_wrapper");

//loadingの表示
$(window).on('load',function(){ //ロードされた時
  $target.delay(2000).addClass(CLASSNAME);
  $('body').removeClass('fadeout');
  start_wrapper.hide();
  setTimeout(function(){
    $("#loading").removeClass('notClick')
  },1500)
  
  $("#loading").click(function(){
    setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
  $("#loading").delay(500).fadeOut('slow');//ローディング画面を2秒（2000ms）待機してからフェードアウト
  $(".loading_container").fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェードアウト
  start_wrapper.fadeIn(600);
  });
});

$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    console.log('aaa');
    e.preventDefault(); // ナビゲートをキャンセル
    const url = $(this).attr('href'); // 遷移先のURLを取得
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 2000);
  }
)});