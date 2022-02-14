'use strict';

//loadingの表示
$(window).on('load',function(){
  $(".loading_container").fadeIn(1000);//loading画面フェードイン
  $("#loading").click(function(){
    $("#loading").delay(500).fadeOut('slow');//ローディング画面を2秒（2000ms）待機してからフェードアウト
  $(".loading_container").fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェードアウト
  });
  
});