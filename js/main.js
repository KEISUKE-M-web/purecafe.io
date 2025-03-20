$(function(){
    $(document).ready(function(){

        $(".top").slick({
                infinite: true,
                autoplay: true, // 自動再生
                autoplaySpeed: 1500,// 自動再生のスピード
                speed: 1500,  
                arrows:false,
                fade: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                adaptiveHeight: true,


        });
      });
      //ローディング画面の表示
$(window).on('load',function(){
  $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#loading_box").delay(1200).fadeOut('slow');//ローディングテキストを1.2秒（1200ms）待機してからフェードアウト
});

      $("a[href^='.']:not([href='#'])").click(function(){
        var target=$($(this).attr("href")).offset().top;
        $("html,body").animate({scrollTop:target},100);
        return false;
      });

      $(document).ready(function () {
        $(window).on("scroll", function () {
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
    
            $(".concept-top,.concept-yasai-img,.concept-yasai-content,.concept-coffee-content,.concept-coffee-img,.menu-content-text,.menu-content-img,.menu-link-1,.demenu-top,.demenu-foods,.demenu-drinks,.demenu-sweets,.demenu-last,.faq-content-text,.access-content").each(function () {
                let fadeTop = $(this).offset().top;
    
                // ウィンドウの下端が要素の上端を超えたらフェードイン
                if (scroll + windowHeight > fadeTop ) {
                    $(this).addClass("fade-in");
                }
            });
        });
    
        // ページを開いた時点で既に表示領域内の要素もフェードインさせる
        $(window).trigger("scroll");
      });

      $(".menu-link").mouseover(function() {
        $(this).find(".img-1").attr("src", "./images/arrow2.png");
    });
    $(".menu-link").mouseout(function() {
        $(this).find(".img-1").attr("src", "./images/arrow1.png");
    });

    $(".toggle_btn").click(function () {
      $(this).toggleClass("open"); // ＋マークを−に変更
      $(this).text($(this).hasClass("open") ? "−" : "＋"); // テキスト変更
      $(this).closest(".faq-content-text").find(".faq-content-answer").slideToggle();
  });
  
  

    if($(window).width() <= 768) {
      $(".header-menu-list").hide();
      $(".header-menu").append('<div id="header-ham" class="header-ham"><span></span><span></span><span></span></div>');
      $(".header-menu-list").append( '<div class="header-name"><img src="./images/icon.png" alt="icon"><h1>purecafe</h1></div>');


      $(".header-menu-list").toggleClass("header-ham-menu");
      $("#header-ham").click(function(){
       $(this).toggleClass("open");
       $(".header-menu-list").slideToggle(500);
      });
      $(".header-menu-list a").click(function(){
        $(".header-menu-list").hide();
        $("#header-ham").removeClass("open");
      });
      $(".concept-top-img img").attr("src","./images/concept1-2.png")


      $(document).ready(function () {
        $(window).on("scroll", function () {
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
    
            $(".concept-top,.concept-yasai-img,.concept-yasai-content,.concept-coffee-content,.concept-coffee-img,.menu-content-img,.menu-content-text,.menu-link-1,.demenu-top,.demenu-foods,.demenu-drinks,.demenu-sweets,.demenu-last,.faq-content-text,.access-content").each(function () {
                let fadeTop = $(this).offset().top;
    
                // ウィンドウの下端が要素の上端を超えたらフェードイン
                if (scroll + windowHeight > fadeTop - 400 ) {
                    $(this).addClass("fade-in");
                }
            });
        });
    });
  };
});
