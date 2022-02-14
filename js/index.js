'use strict';

//loadingの表示
$(window).on('load',function(){
  $(".loading_container").fadeIn(1000);
  $("#loading").delay(2000).fadeOut('slow');//ローディング画面を2秒（2000ms）待機してからフェードアウト
  $(".loading_container").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェードアウト
});