$(function(){

    // Configuração do Menu Reponsivo

    $('.menu_icon i').click(function(){
        var el = $('.menu_responsivo');
        if(el.is(':visible') == false){
            el.fadeIn();
        }else{
                el.fadeOut();
            }
        })

    // Configuração do Scroll linkado ao navbar

    scrooll();

    function scrooll(){
        $('.sobre').click(function() {
            $('html, body').animate({
                scrollTop: $(".section_sobre").offset().top
            }, 2000);
        });

        $('.contato').click(function() {
            $('html, body').animate({
                scrollTop: $(".section_contato").offset().top
            }, 2000);
        });
        
    };

    });