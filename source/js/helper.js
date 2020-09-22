function adjustPageCover(conf) {
    let span = $(document.body).width();
    let base = $(".single #lx-aside");
    if (span >= conf.maxWidth) {
        base.css("background-image", "url(" + conf.extImgUrl + ")");
    } else {
        base.css("background-image", "url(" + conf.imgUrl + ")");
    }

    if (span >= conf.maxExtWidth) {
        base.css("background-size", conf.maxExtWidth + "px 450px");
        base.addClass("infinite");
    } else {
        base.css("background-size", "100% 450px");
        base.removeClass("infinite");
    }
};