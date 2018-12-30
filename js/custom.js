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
function onOverlayPortfolio(id) {
  // document.getElementById("overlay-onClick-portfolio-image").style.display = "block";
  // console.log("Id found here is " + "Amit ===> " + id);
  var ele = document.getElementById(id);
  if (!(ele === null || ele === undefined || ele === 0 || ele === "" || ele === NaN)) {
    // console.log(" ELement found !");
  }
  ele.style.display = "block";
  var v = 'abstract' + '-' + id;
  console.log(v + " new Id");
  document.getElementById(v).style.display = "none";
  //settings for the backgroud (to be made still, non-scrollable)
  // document.body.classList.toggle('noscroll', 'true');
  // document.querySelector('#overlay-onClick-portfolio-image').setAttribute('aria-hidden', 'false');
  // document.querySelector('#overlay-onClick-portfolio-image').scrollTop = 0;
}

function offOverlayPortfolio(id) {
  // document.getElementById("overlay-onClick-portfolio-image").style.display = "none";
  document.getElementById(id).style.display = "none";
  // location.reload();
}

// show abstract description, for portfolio item
function showAbstractDesc(id) {
  // console.log(id + " =========== ");
  var ele = document.getElementById(id);
  if (ele.style.display === "none") {
    ele.style.display = "block";
  } else {
    ele.style.display = "none";
  }
}
