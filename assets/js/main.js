var link = document.createElement('link');
link.rel = 'icon';
link.href = 'https://www.koraa.my.id/assets/img/icons/koraa.png';

var faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = 'https://www.koraa.my.id/assets/img/icons/koraa.png';
document.head.appendChild(faviconLink);

var linkCanonical = document.createElement('link');
linkCanonical.rel = 'canonical';
linkCanonical.href = 'https://www.koraa.my.id/assets/img/icons/koraa.png';

var metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.content = 'Koraa merupakan salah satu e-commerce di Indonesia yang menawarkan berbagai macam source code, design, dll';

var metaKeywords = document.createElement('meta');
metaKeywords.setAttribute('name', 'keywords');
metaKeywords.content = 'admin koraa, koraa';

var metaUrl = document.createElement('meta');
metaUrl.setAttribute('property', 'og:url');
metaUrl.content = 'https://www.koraa.my.id/';

var metaTitle = document.createElement('meta');
metaTitle.setAttribute('property', 'og:title');
metaTitle.content = 'koraa';

var metaDescriptionOG = document.createElement('meta');
metaDescriptionOG.setAttribute('property', 'og:description');
metaDescriptionOG.content = 'Koraa merupakan salah satu e-commerce di Indonesia yang menawarkan berbagai macam source code, design, dll';

var metaImage = document.createElement('meta');
metaImage.setAttribute('property', 'og:image');
metaImage.content = 'https://www.koraa.my.id/assets/img/icons/koraa.png';

var metaSiteName = document.createElement('meta');
metaSiteName.setAttribute('property', 'og:site_name');
metaSiteName.content = 'admin koraa';

var metaTtl = document.createElement('meta');
metaTtl.setAttribute('property', 'og:ttl');
metaTtl.content = '3600';

var head = document.head;
var firstChild = head.firstChild;

head.insertBefore(link, firstChild);
head.insertBefore(linkCanonical, firstChild);
head.insertBefore(metaDescription, firstChild);
head.insertBefore(metaKeywords, firstChild);
head.insertBefore(metaUrl, firstChild);
head.insertBefore(metaTitle, firstChild);
head.insertBefore(metaDescriptionOG, firstChild);
head.insertBefore(metaImage, firstChild);
head.insertBefore(metaSiteName, firstChild);
head.insertBefore(metaTtl, firstChild);



// Fungsi untuk menampilkan atau menyembunyikan tombol "Back to Top" berdasarkan posisi scroll
function handleScroll() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.pageYOffset > 100) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }
  
  // Fungsi untuk scroll ke bagian atas halaman
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Event listener saat melakukan scroll
  window.addEventListener('scroll', handleScroll);
  

// JavaScript to show and hide the loader
window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var overlay = document.getElementById('overlay');
    loader.classList.add('hidden');
    overlay.classList.add('hidden');
  });


$(window).on("scroll", (function() {
    $(this).scrollTop() > 130 ? $(".header-part").addClass("active") : $(".header-part").removeClass("active")
})), $(window).on("scroll", (function() {
    $(this).scrollTop() > 700 ? $(".backtop").show() : $(".backtop").hide()
})), $((function() {
    $(".dropdown-link").click((function() {
        $(this).next().toggle(), $(this).toggleClass("active"), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show(), $(".dropdown-link").removeClass("active"), $(this).addClass("active"))
    }))
})), $(".nav-link").on("click", (function() {
    $(".nav-list li a").removeClass("active"), $(this).addClass("active")
})), $(".header-cate, .cate-btn").on("click", (function() {
    $("body").css("overflow", "hidden"), $(".category-sidebar").addClass("active"), $(".category-close").on("click", (function() {
        $("body").css("overflow", "inherit"), $(".category-sidebar").removeClass("active"), $(".backdrop").fadeOut()
    }))
})), $(".header-user").on("click", (function() {
    $("body").css("overflow", "hidden"), $(".nav-sidebar").addClass("active"), $(".nav-close").on("click", (function() {
        $("body").css("overflow", "inherit"), $(".nav-sidebar").removeClass("active"), $(".backdrop").fadeOut()
    }))
})), $(".header-cart, .cart-btn").on("click", (function() {
    $("body").css("overflow", "hidden"), $(".cart-sidebar").addClass("active"), $(".cart-close").on("click", (function() {
        $("body").css("overflow", "inherit"), $(".cart-sidebar").removeClass("active"), $(".backdrop").fadeOut()
    }))
})), $(".header-user, .header-cart, .header-cate, .cart-btn, .cate-btn").on("click", (function() {
    $(".backdrop").fadeIn(), $(".backdrop").on("click", (function() {
        $(this).fadeOut(), $("body").css("overflow", "inherit"), $(".nav-sidebar").removeClass("active"), $(".cart-sidebar").removeClass("active"), $(".category-sidebar").removeClass("active")
    }))
})), $(".coupon-btn").on("click", (function() {
    $(this).hide(), $(".coupon-form").css("display", "flex")
})), $(".header-src").on("click", (function() {
    $(".header-form").toggleClass("active"), $(this).children(".fa-search").toggleClass("fa-times")
})), $(".wish").on("click", (function() {
    $(this).toggleClass("active")
})), $(".product-add-btn").on("click", (function() {
    var e = $(this).next(".product-action");
    $(this).hide(), e.css("display", "flex")
})), $(".action-plus").on("click", (function() {
    var e = $(this).closest(".product-action").children(".action-input").get(0).value++,
        c = $(this).closest(".product-action").children(".action-minus");
    e > 0 && c.removeAttr("disabled")
})), $(".action-minus").on("click", (function() {
    2 == $(this).closest(".product-action").children(".action-input").get(0).value-- && $(this).attr("disabled", "disabled")
})), $(".review-widget-btn").on("click", (function() {
    $(this).next(".review-widget-list").toggle()
})), $(".offer-select").on("click", (function() {
    $(this).text("Copied!")
})), $(".modal").on("shown.bs.modal", (function(e) {
    $(".preview-slider, .thumb-slider").slick("setPosition", 0)
})), $(".profile-card.schedule").on("click", (function() {
    $(".profile-card.schedule").removeClass("active"), $(this).addClass("active")
})), $(".profile-card.contact").on("click", (function() {
    $(".profile-card.contact").removeClass("active"), $(this).addClass("active")
})), $(".profile-card.address").on("click", (function() {
    $(".profile-card.address").removeClass("active"), $(this).addClass("active")
})), $(".payment-card.payment").on("click", (function() {
    $(".payment-card.payment").removeClass("active"), $(this).addClass("active")
}));

/* Error 
window.addEventListener("error", function(event) {
    // Periksa apakah error terjadi pada halaman yang diinginkan
    var targetUrl = "kora ecommerce/index.html";
    var targetUrl = "/p/category/source-code/";
    if (window.location.href.includes(targetUrl)) {
       window.location.href = "/Coming Soon";
    }
});

/ Error */


window.onload = function() {
    var currentURL = window.location.href;
    var restrictedURLs = [
        "https://koraa.my.id/1", 
        "https://koraa.my.id/2"
    ];

    if (restrictedURLs.includes(currentURL)) {
      window.location.href = "/404";
    }
  };