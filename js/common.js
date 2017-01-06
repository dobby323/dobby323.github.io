
$(document).ready(function() {
    /*-------------Кнопка "Наверх"------------------*/
    
    $("body").append('<div class="top"><i class="fa fa-chevron-up">')
    
    $("body").on("click", ".top", function() {
        $("html, body").animate({scrollTop: 0}, "slow");
    })
    
 /*------------------------------------------
            авто замена айди
---------------------------------------------*/   
    $(".galery-img").each(function(e){
        
        var th = $(this);
        
        th.attr("href", "#galery-item-" + e)
            .find(".galery-popup")
                .attr("id", "galery-item-" + e);
        
    })
/*-----------PopUp Галереи--------------*/    
    $(".galery-img").magnificPopup({
        
        mainClass: "my-mfp-zoom-in",
        removalDelay: 300,
        type: "inline",
        gallery: {
            enabled: true
        }
        
    });
/*-------------------------------------------------
                ПопАп Заказа
---------------------------------------------------*/
    $("a[href='#callback'], a[href='#callback-phone']").magnificPopup({
        
        mainClass: "my-mfp-zoom-in",
        removalDelay: 300,
        type: "inline",
        
    });
    
/*-----------------------------------------------
                выпадающее меню
------------------------------------------------*/
	$(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".main-mnu").slideToggle();
      return false;
    });
    
    $("#main-footer .toggle-mnu").click(function() {
        $("html, body").animate({scrollTop: $(document).height()}, "slow");
        return false;
    })
    
    
/*-----------------------------------------------
            АЯКС ФОРМА ЗАКАЗА
------------------------------------------------*/
    
    $("form").submit(function() {
        var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
            $(".form-callback .succes").addClass(".active");
            setTimeout(function() {
                $(".form-callback .succes").removeClass(".active");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 2000);
			
		});
		return false;
	});
		
});