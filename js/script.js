$(function() {
  $('#slides').slidesjs({
    width: 940,
    height: 528
  });

  $(".slidesjs-pagination-item a").empty().append($('<span class="fa fa-circle"></span>'));
  $(".slidesjs-previous").empty().append($('<span class="fa fa-chevron-left"></span>'));
  $(".slidesjs-next").empty().append($('<span class="fa fa-chevron-right"></span>'));
});