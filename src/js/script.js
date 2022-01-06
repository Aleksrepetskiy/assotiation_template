$(document).ready(function () {
    //footer
    const footerMenuContainer = document.querySelector(".footer__menu");
    footerMenuContainer.addEventListener("click", (e) => {
        if (e.target.classList == "h4") {
            e.target.closest(".col4").classList.toggle("active");
        }
    });

    //Поиск
    const seachModalBox = document.querySelector(".modal__search"),
        seachBtn = document.querySelector(".search__link"),
        jsModalBox = document.querySelectorAll("[data-modal]");
    seachBtn.addEventListener("click", function (e) {
        e.preventDefault();
        seachModalBox.classList.add("active");
    });
    seachModalBox.addEventListener("click", function (e) {
        if (e.target === seachModalBox) {
            closeModal();
        }
    });

    function closeModal() {
        $(".popup").removeClass("active");
        seachModalBox.classList.remove("active");
    }

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            closeModal();
        }
    });

    //Pop-up
    $("body").on("click", ".js-open", function (e) {
        e.preventDefault();
        var attr = $(this).data("attr");
        closeModal();
        $(attr).addClass("active");
    });

    $("body").on("click", ".js-close", function (e) {
        e.preventDefault();
        closeModal();
    });
    $("body").on("click", ".popup", function (e) {
        e.preventDefault();
        if (e.target === this) {
            closeModal();
        }
    });

    //меню
    $("body").on("click", ".menu__trigger", function (e) {
        e.preventDefault();
        if ($(window).width() < 767) {
            var $this = $(this),
                item = $this.closest(".menu__item"),
                list = $this.closest(".menu__list"),
                items = list.find(".menu__item"),
                content = item.find(".sub-menu__list"),
                otherContent = list.find(".sub-menu__list"),
                duration = 300;
            if (!item.hasClass("opened")) {
                items.removeClass("opened");
                item.addClass("opened");
                otherContent.stop(true, true).slideUp(duration);
                content.stop(true, true).slideDown(duration);
            } else {
                content.stop(true, true).slideUp(duration);
                item.stop(true, true).removeClass("opened");
            }
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 767) {
            $(".menu__item").removeClass("opened");
            $(".menu__box").removeClass("active");
            $(".sub-menu__list").attr("style", "");
            $("html").removeClass("html-over");
        }
    });

    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".menu").find(".menu__box").addClass("active");
        $("html").addClass("html-over");
    });
    $(".menu__close").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".menu__box").removeClass("active");
        $("html").removeClass("html-over");
    });

    //о нас открытие на моб версии

    $(".js-more").on("click", function (e) {
        e.preventDefault();
        $(this)
            .closest(".js-show")
            .find(".about__container")
            .removeClass("active");
        $(this).hide();
    });

    //faq
    $(".faq__header").on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
            item = $this.closest(".faq__item");
        (list = $this.closest(".faq__list")),
            (items = list.find(".faq__item")),
            (content = item.find(".faq__dropdown")),
            (otherContent = list.find(".faq__dropdown")),
            (duration = 300);

        if (!item.hasClass("active")) {
            items.removeClass("active");
            item.addClass("active");
        } else {
            item.stop(true, true).removeClass("active");
        }
    });

    //TOTOP
    var topShow = 200,
        delay = 1500,
        buttonTop = $(".up");
    $(window).scroll(function () {
        if ($(this).scrollTop() > topShow) {
            buttonTop.fadeIn();
        } else {
            buttonTop.fadeOut();
        }
    });

    buttonTop.on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            delay
        );
    });
});
