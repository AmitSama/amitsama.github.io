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
      var hash = this.hash;
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
            window.location.hash = hash;
        }); //end animate

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
  var ele = document.getElementById(id);
  if (!(ele === null || ele === undefined || ele === 0 || ele === "" || ele === NaN)) {
    // console.log(" ELement found !");
  }
  ele.style.display = "block";
  var v = 'abstract' + '-' + id;
  console.log(v + " new Id");
  document.getElementById(v).style.display = "none";
  //settings for the backgroud (to be made still, non-scrollable)
  document.body.style.overflow = 'hidden';
}

// making overlay div appar full screen for small devices
function makeChangesForOverlayForSmallDevices (id) {
  var x = document.getElementById(id);
  if (window.matchMedia("(max-width: 500px)").matches) {
    x.style.left = 0;
    x.style.width = "100%";
    console.log("Making changes on element left:0; for device have max-width 500px " + x.style.width);
  }
}

function offOverlayPortfolio(id) {
  document.getElementById(id).style.display = "none";
  document.body.style.overflow = 'scroll';
}

// show abstract description, for portfolio item
function showAbstractDesc(id) {
  // console.log(id + " =========== ");
  var v = 'read-' + id;
  console.log("Id for read abstract element " + v);
  var ele = document.getElementById(id);
  if (ele.style.display === "none") {
    ele.style.display = "block";
    document.getElementById(v).innerHTML = "Hide Abstract";
  } else {
    ele.style.display = "none";
    document.getElementById(v).innerHTML = "Read Abstract";
  }
}
