     $(document).ready(function () {
            $("#mycarousel").carousel({ interval: 2000 });
            $("#carouselButton").click(function () {
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')) {
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
        });
        /* invoking reserve table modal through script*/
        $(document).ready(function () {
            $("#reserve-button").click(function () {
                $("#reserve-modal").modal('show');
            });
            $("#reserve-cancel").click(function () {
                $("#reserve-modal").modal('hide');
            });
        });
/* invoking login modal through script */$
    $(document).ready(function () {
        $("#login-button").click(function () {
            $("#login-modal").modal('show');
        });
        $("#login-cancel").click(function () {
            $("#login-modal").modal('hide');
        });
    });