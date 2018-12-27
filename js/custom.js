// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Map scrolling behaviour
$(document).ready(function() {
  $('#map_iframe').addClass('scrolloff');
  $('#map').on('click', function () {
    $('#map_iframe').removeClass('scrolloff');
  });

  $('#map_iframe').mouseleave(function  () {
    $('#map_iframe').addClass('scrolloff');
  });
});
// for overlay effect on portfolio images
function onOverlayPortfolio() {
  document.getElementById("overlay-onClick-portfolio-image").style.display = "block";

  //settings for the backgroud (to be made still, non-scrollable)
  // document.body.classList.toggle('noscroll', 'true');
  // document.querySelector('#overlay-onClick-portfolio-image').setAttribute('aria-hidden', 'false');
  // document.querySelector('#overlay-onClick-portfolio-image').scrollTop = 0;
}

function offOverlayPortfolio() {
  document.getElementById("overlay-onClick-portfolio-image").style.display = "none";
  // location.reload();
}

// show abstract description, for portfolio item
// function showAbstractDesc(id) {
function showAbstractDesc() {
  var ele = document.getElementById("abstract-desc-thesis");
  // if (ele.style.display === "none") {
    ele.style.display = "block";
  // }
  // else {
  //   ele.style.display = "none";
  // }
}
