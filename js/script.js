$(document).ready(function () {
    var $callBackBtn = $("[key = call-back]");
    var $answersBtn = $("[key = answers]");
    var $popUpAnswers = $("#pop-up__call-back");
    var $popUpCallUs = $("#pop-up__call-us");
    var $collapseBtn = $("#collapse-btn");
    var $collapseNav = $(".content__header__nav-bar");
    var $collapseCard = $collapseNav.find('input[type="checkbox"]');
    var $collapseCardBtn = $("#collapse-card");
    var $mobilColapseBtn = $("#collapse__button");
    var $mobilNavMenu = $("#mobil-menu");
    var $mobilCloseBtn = $mobilNavMenu.find(".mobil-menu__close");
    var $fotoCard = $(".foto__catalog__card");
    var $inputNavBar = $('.content__header__nav-bar input');
    $inputNavBar.on('change',function () {
       let $tempInput = $(this);
       let $inputNumb = 0;
       for(i = 0;i < $inputNavBar.length;i++){
           if($inputNavBar.eq(i).prop('checked')){
               $inputNumb += 1;
           }
       }
       if($inputNumb > 1){
           $inputNavBar.prop('checked',false);
           $tempInput.prop('checked',true);
       }
        $(document).mouseup(function (e){
            if (!$tempInput.is(e.target)
                && $tempInput.has(e.target).length === 0) {
                $inputNavBar.prop('checked',false);
            }
        });
    })
    $fotoCard.on('click',function () {
        let $temp = $(this).find("img").clone();
        $("#pop-up").css('display','block');
        $("#pop-up__content").css({'display':'block','height':'100%'});
        $('#pop-up__content').on('click',function () {
            $("#pop-up").css('display','none');
            $("#pop-up__content").css('display','none');
            $('.pop-up__shadow').off();
            $('#pop-up__content').off();
            $('#pop-up__content').empty();
        });
        $(document).keydown(function (e) {
            if (e.which == "27"){
                $("#pop-up").css('display','none');
                $("#pop-up__content").css('display','none');
            };
        });
        $temp.appendTo('#pop-up__content');
        $temp.css({'position':'absolute','top':'50%','left':'50%','transform':'translate(-50%,-50%)','z-index':'120','max-width':'90%','max-height':'90%','-moz-user-select':'none','-khtml-user-select':'none','user-select':'none'});
    });
    $mobilCloseBtn.click(function () {
        $mobilNavMenu.css({display:'none'});
    });
    $mobilColapseBtn.click(function () {
       $mobilNavMenu.css({display:'block'});
    });
    // $(window).resize(function(){
    //     if($('meta[name="viewport"]').prop('content') == 'width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no'){
    //         window.setTimeout('location.reload()', 500);
    //     }
    // });
    // if($(window).width() <= '767'){
    //     $collapseNav.animate({height:'hide'},0);
    // }
    $collapseBtn.click(function () {
        collapseMenu();
    });
    $answersBtn.click(function () {
        answersPopUp();
    });
    $callBackBtn.click(function () {
        callBackPopUp();
    });
    function collapseMenu() {
        $collapseCard.unbind();
        $collapseCardBtn.unbind();
        $collapseCard.prop('checked',false);
        $collapseBtn.css({'position':'absolute','left':'85%','top':'10px'});
        $collapseNav.animate({padding:'20px 15px',height:"show"},400);
        $collapseBtn.unbind();
        $collapseCard.change(function () {
            $collapseCardBtn.css('display','block');
            $collapseCard.unbind();
            $collapseCard.change(function () {
                $collapseCardBtn.css('display','none');
                collapseMenu();
            })
            $collapseCardBtn.click(function () {
                $collapseCard.prop('checked',false);
                $collapseCardBtn.css('display','none');
                collapseMenu();
            })
        });
        $collapseBtn.click(function () {
            $collapseNav.animate({padding:'0px 15px',height:"hide"},400);
            if($collapseNav.parent().parent().hasClass("clone")){
                $collapseBtn.css({'position':'relative','left':'0','top':'10px'});
            } else {
                $collapseBtn.css({'position':'relative','left':'0','top':'120px'});
            }
            $collapseCardBtn.css('display','none');
            $collapseBtn.unbind();
            $collapseBtn.click(function () {
                collapseMenu();
            })
        });
    }
    function callBackPopUp() {
        $("#pop-up").css('display','block');
        $popUpCallUs.css('display','block');
        let $closedPopUp = $('button.btn-close');
        $closedPopUp.unbind();
        $('.pop-up__shadow').click(function () {
            closePop();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePop();
            };
        })
        $closedPopUp.click(function () {
            closePop();
        })
    }
    function answersPopUp() {
        $("#pop-up").css('display','block');
        $popUpAnswers.css('display','block');
        let $closedPopUp = $('button.btn-close');
        $closedPopUp.unbind();
        $('.pop-up__shadow').click(function () {
            closePop();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePop();
            };
        })
        $closedPopUp.click(function () {
            closePop();
        })
    }
    function closePop() {
        $("#pop-up").css('display','none');
        $popUpAnswers.css('display','none');
        $popUpCallUs.css('display','none');
        $popUpCalendar.css('display','none');
    }
})
function calendarPopUp($number) {
    var $popUpCalendar = $("#pop-up__calendar");
    var $popUpCalendarText = $('#calendar-text');
    $("#pop-up").css('display','block');
    $popUpCalendar.css('display','block');
    if($number == '7'){
        $popUpCalendarText.html('7 НОЯБРЯ 1917 ГОДА\n' +
            '\n' +
            'Несмотря на то, что содержание царской семьи в Тобольске было весьма мягким и достаточно комфортным, многие политические новости доходили до бывшего императора с опозданием. В том числе и о массовых беспорядках после Октябрьского переворота.');
    } else if($number == '12'){
        $popUpCalendarText.html('12 МАЯ 1896 ГОДА\n' +
            '\n' +
            'В рамках торжеств (они продолжались год с лишним) по поводу венчания на царство императорская семья посетила вечером Большой театр, где в этом день давали традиционную оперу «Жизнь за царя» и премьерный балет «Жемчужина», в котором главную партию исполняла знаменитая Матильда Кшесинская.');
    } else if($number == '17'){
        $popUpCalendarText.html('17 ОКТЯБРЯ 1888 ГОДА\n' +
            '\n' +
            'В это день произошло крушение царского поезда под Харьковом. Молодой наследник чудом избежал гибели, но записал в своем дневнике: «Роковой для всех день. Все мы могли быть убиты, но по воле Божьей этого не случилось… Однако убитых было 20 человек и раненых 16… На станции Лозовая был молебен и панихида».');
    }
    let $closedPopUp = $('button.btn-close');
    $closedPopUp.unbind();
    $('.pop-up__shadow').click(function () {
        closePop();
    })
    $(document).keydown(function (e) {
        if (e.which == "27"){
            closePop();
        };
    })
    $closedPopUp.click(function () {
        closePop();
    })
    function closePop() {
        $("#pop-up").css('display','none');
        $popUpCalendar.css('display','none');
    }
}
$(document).ready(function () {
    var $pageBg = $("#newspaper .row");
    var $colorOption = $("#color-switch input");
    const colors = ["#F4E4C0","#F9DBBA","#E4D4BC","#E6D1B3","#F8D4A2","#D8C2A6","#D2C598"];
    $colorOption.on('click',function () {
        let $num = $colorOption.index($(this));
        $pageBg.css('background-color',colors[$num]);
    })
})