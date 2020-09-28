$(document).ready(function() {

	if ($(".slider-certif").length > 0) {
		var swiper = new Swiper('.slider-certif', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			slidesPerGroup: 1,
			watchOverflow: true,
	      	navigation: {
		        nextEl: '.swiper-btn-next',
		        prevEl: '.swiper-btn-prev',
	      	},
		    breakpoints: {
		        550: {
		          slidesPerView: 2,
		        },
	      	}
	    });
	}

	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch: false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask

    $("input[type='tel']").inputmask({
	  mask: '+7 (999) 999 99-99',
	  showMaskOnHover: false,
	  autoUnmask: true,
	});



	//Аякс отправка форм
    // $("form").submit(function () {
    //     $.ajax({
    //         type: "POST"
    //         , url: "mail.php"
    //         , data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val("");
    //         $("form").trigger("reset");
    //         $.fancybox.open($("#pop"));
    //         setTimeout(function () {
    //             $.fancybox.close();
    //             $.fancybox.close($("#popup"));
    //         }, 1500);
    //     });
    //     return false;
    // });



	//Плавный скролл до блока .div по клику на .scroll

	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


	$('a[data-target="anchor"]').on('click', function(){
		if (window.matchMedia('(min-width: 993px)').matches) {
			var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
			$('body, html').animate({scrollTop: bl_top}, 700);
		}
		else{
			var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
			$('body, html').animate({scrollTop: bl_top}, 700);

			$('body').removeClass('none-scroll');
	        $('.main-nav').removeClass('active');
	        $('.menuToggle').removeClass('active');
	        $('.overlay-page').removeClass('active');
		}
		
		return false;
	});



    // Боковое меню

    $('.menuToggle').on('click', function() {
        $('body').toggleClass('none-scroll');
        $('.main-nav').toggleClass('active');
        $('.overlay-page').toggleClass('active');
        $(this).toggleClass('active');
    });



    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.main-nav').removeClass('active');
        $('.menuToggle').removeClass('active');
        $(this).removeClass('active');

        
    });



});




