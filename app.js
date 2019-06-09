
$(document).ready(function () {

  // slider initially hidden
  $('.nav__slider').hide();

  // move slider and shadow when on slider (fast movement)
  $('#nav').on({
    mouseover: function () {
      $(".icon").addClass("close");
      $('.nav__slider').stop().show(400);
      $('#navShadow').stop().animate({ 'left': '-20%' }, 400);
    },

    mouseout: function () {
      $(".icon").removeClass("close");
      $('.nav__slider').stop().hide(400);
      $('#navShadow').stop().animate({ 'left': '-40%' }, 400);
    }
  });

  // move slider and shadow when on shadow (slow movement)
  $('#navShadow').on({
    mouseover: function () {
      $('.nav__slider').stop().show(4000);
      $('#navShadow').stop().animate({ 'left': '-20%' }, 4000);
    },

    mouseout: function () {
      $('.nav__slider').stop().hide(400);
      $('#navShadow').stop().animate({ 'left': '-40%' }, 400);
    }
  });



























});