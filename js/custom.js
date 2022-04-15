let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
    gsap.set(cursor2, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
  });
});





var swiper = new Swiper(".firstsilderClass", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  },
});

AOS.init();

$(document).ready(function() {
  $(".toggle").click(function() {
    $("body").toggleClass("active");
  });
});

var swiper = new Swiper(".fourCOLImg", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});




var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});





(function($) {
  // target element for scroll
  var $link = $("a[href='#top']");
  var settings = {
    offset: 50 // hide position
  };
  var state = {
    isVisible: false,
    shouldVisible: false
  };
  // Handle toggle icon base on window.scrolltop
  function toggleControl() {
    var scrolltop = $(window).scrollTop();
    state.shouldVisible = (scrolltop >= settings.offset) ? true : false;
    if (state.shouldVisible && !state.isVisible) {
      $link.slideDown('fast');
      state.isVisible = true;

    } else if (state.shouldVisible == false && state.isVisible) {
      $link.slideUp('fast');
      state.isVisible = false;
    }
  }
  // Handle click event
  $link.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  // Attach function to toggle scroll icon
  $(window).bind('scroll resize', function(e) {
    toggleControl();
  });
})(window.jQuery);




