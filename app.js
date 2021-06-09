window.onload = function () {
    window.jQuery ? $(document).ready(function () {
        $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(), $("body").append("<div class='overlay'></div>"), $(".navbar-toggle, .navbar-toggler").on("click", function () {
            $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")), $(".sideMenu, .overlay").toggleClass("open"), $(".overlay").on("click", function () {
                $(this).removeClass("open"), $(".sideMenu").removeClass("open")
            })
        }), $("body").on("click", ".sideMenu.open .nav-item", function () {
            $(this).hasClass("dropdown") || $(".sideMenu, .overlay").toggleClass("open")
        }), $(window).resize(function () {
            $(".navbar-toggler").is(":hidden") ? $(".sideMenu, .overlay").hide() : $(".sideMenu, .overlay").show()
        })
    }) : console.log("sidebarNavigation Requires jQuery")
}, $(document).ready(function () {
    $("a").on("click", function (e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var o = this.hash;
            $("html,body").animate({
                scrollTop: $(o).offset().top
            }, 500, function () {
                window.location.hash = o
            })
        }
    }), $(".js--sticky-expert").waypoint(function (e) {
        "down" == e ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
    }), $(".top-btn").attr("title", "go to top")
}), $("svg.radial-progress").each(function (e, o) {
    $(this).find($("circle.complete")).removeAttr("style")
}), $(window).scroll(function () {
    $("svg.radial-progress").each(function (e, o) {
        $(window).scrollTop() > $(this).offset().top - .75 * $(window).height() && $(window).scrollTop() < $(this).offset().top + $(this).height() - .25 * $(window).height() && (percent = $(o).data("percentage"), radius = $(this).find($("circle.complete")).attr("r"), circumference = 2 * Math.PI * radius, strokeDashOffset = circumference - percent * circumference / 100, $(this).find($("circle.complete")).animate({
            "stroke-dashoffset": strokeDashOffset
        }, 1250))
    })
}).trigger("scroll");