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
    rewind: true,
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




// Once all content has been loaded, the function check if there is at least 1 container with class 'progress' and at least 1 child with 'data-progress' attribute inside the container
window.onload = function () {
  if (
    document.querySelectorAll(".progress").length > 0 &&
    document.querySelectorAll(".progress [data-progress]").length > 0
  ) {
    // Get all elements with 'data-progress' attribute and run the 'AnimateProgress' funcion with each one
    document
      .querySelectorAll(".progress [data-progress]")
      .forEach((x) => AnimateProgress(x));
  }
};

function AnimateProgress(el) {
  // Get the element that came as parameter and add the class 'animated-progress' on it
  el.className = "animate-progress";
  // Set the attribute 'style' of this element with the custom attribute '--animate-progress' and the value of 'data-progress' as the width value
  el.setAttribute(
    "style",
    `--animate-progress:${el.getAttribute("data-progress")}%;`
  );
  // After this the CSS make its magic
}




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




