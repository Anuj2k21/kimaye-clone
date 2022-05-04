$(function() {
    $(".template-index .hover-mask h3:contains('Fruits x Subscription')").next().next().addClass("cs-disable").text("Coming Soon"), $(".our-journey").slick({
        vertical: !0,
        verticalSwiping: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0,
        infinite: !0,
        pauseOnHover: !1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        appendDots: ".kim-paging",
        customPaging: function(e, i) {
            return '<div class="pagin-nav"><p>0' + (i + 1) + "</p></div>"
        },
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    }), $("[id^=inputField]").keypress(t);
    var n = [400001, 400002, 400003, 400004, 400005, 400006, 400007, 400008, 400009, 400010, 400011, 400012, 400013, 400014, 400015, 400016, 400017, 400018, 400019, 400020, 400021, 400022, 400024, 400025, 400026, 400027, 400028, 400029, 400030, 400031, 400032, 400033, 400034, 400035, 400036, 400037, 400038, 400039, 400040, 400041, 400042, 400043, 400044, 400045, 400046, 400047, 400048, 400049, 400050, 400051, 400052, 400053, 400054, 400055, 400056, 400057, 400058, 400059, 400060, 400061, 400062, 400063, 400064, 400065, 400066, 400067, 400068, 400069, 400070, 400071, 400072, 400073, 400074, 400075, 400076, 400077, 400078, 400079, 400080, 400081, 400082, 400083, 400084, 400085, 400086, 400087, 400088, 400089, 400090, 400091, 400092, 400093, 400094, 400095, 400096, 400097, 400098, 400099, 400100, 400101, 400102, 400103, 400104, 400602, 400610, 400607, 400601, 400606, 400708, 400701, 400703, 400706];
    $("#btn-serach").click(function() {
        var e = Number($("#inputField").val()),
            i = n.indexOf(e);
        i == "-1" ? ($(".valid_pincode p").addClass("intro"), sessionStorage.setItem("active", !0), setTimeout(function() {
            $("#locationDiv").hide()
        }, 5e3)) : ($(".valid_pincode p").removeClass("intro"), sessionStorage.setItem("active", !0), $("#locationDiv").hide())
    });

    function t(e) {
        var i = window.event ? e.keyCode : e.which;
        return e.keyCode === 8 || e.keyCode === 46 ? !0 : !(i < 48 || i > 57)
    }
    sessionStorage.getItem("active") ? $("#locationDiv").hide() : $("#locationDiv").show(), $("span.onsale.product-label span").text(function() {
        return $(this).text().replace("Sale", "Value Pack")
    })
}), setInterval(function() {
    for (var n = document.querySelectorAll(".quick-shop-btn").length, t = 0; t < n; t++) document.querySelectorAll(".quick-shop-btn")[t].innerText.trim() == "QUICK SHOP" && (document.querySelectorAll(".quick-shop-btn")[t].children[1].innerText = "Choose Your Pack")
}, 1e3), document.querySelector(".register-question p").innerText = "Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.";
//# sourceMappingURL=/s/files/1/0449/5225/6667/t/25/assets/kimaye-web.js.map?v=5953662101410710451650963118