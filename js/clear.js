'use strict';

const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

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
  cmt.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
          cmt1.fadeIn();
      } else {
          cmt1.fadeOut();
      }
      if ($(this).scrollTop() > 180) {
        cmt2.fadeIn();
      } else {
          cmt2.fadeOut();
      }
      if ($(this).scrollTop() > 250) {
        cmt3.fadeIn();
      } else {
        cmt3.fadeOut();
      }
  });
});