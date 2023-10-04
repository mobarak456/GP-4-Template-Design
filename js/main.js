

    $(document).ready(function () {

      // dynamic navbar bg change
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".navbar").addClass("menu-bg")
        } else {
          $(".navbar").removeClass("menu-bg")
        }
      })

      


    })

  