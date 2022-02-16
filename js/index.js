'use strict';

const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".loading_wrapper");
const start_wrapper = $(".start_wrapper");

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
  $('.text_typing').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}

//loadingの表示
$(window).on('load',function(){ //ロードされた時
  //spanタグを追加する(タイピング風アニメーションの分)
	var element = $(".text_typing");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

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
  start_wrapper.fadeIn(2000,function(){
    TextTypingAnime();
    $(".start_button_wrapper").delay(10000).fadeIn();
  });
  });
});

//   // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
//   $('a:not([href^="#"]):not([target])').on('click', function(e){
//     console.log('aaa');
//     e.preventDefault(); // ナビゲートをキャンセル
//     const url = $(this).attr('href'); // 遷移先のURLを取得
//       $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
//       setTimeout(function(){
//         window.location = url;  // 0.8秒後に取得したURLに遷移
//       }, 2000);
//   }
// )});

// 効果音
const music = new Audio('../music/moon_travel.mp3');

document.getElementById('click_me').addEventListener('click', function() {
  music.play();
});
document.getElementById('game_start').addEventListener('click', function() {
  music.pause();
});
