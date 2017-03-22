(function () {
    'use strict';

    console.log('start');

    function next (){
      alert("Ссылка на гит репозиторий с данным сайтом?")
    }

    var linkg = document.getElementById('linkgit');
    linkg.style.background = '#040503';
    linkg.style.border = '1px solid white';
    linkg.addEventListener("contextmenu", next); /*событие на правый щелчек мышки*/

    $('<div style="margin: 0 auto; text-align: center" id="menu"><a style="color: black" href="https://www.youtube.com/watch?v=ahOArT_hrZE">Buy in Aliexpress</a></div>').insertAfter('#global').css({'background':'red','fontFamily':'serif','border':'1px solid black'}).width(200);
     $('<div style="margin: 0 auto; text-align: center" id="menu1">Привет</div>').insertAfter('#menu').css({'background':'grey', 'fontFamily':'inherit','border':'1px solid black'}).width(200);
      $('<div style="margin: 0 auto; text-align: center" id="menu2">Привет</div>').insertAfter('#menu1').css({'background':'blue', 'fontFamily':'monospace','border':'1px solid black'}).width(200);
        $('<div style="margin: 0 auto; text-align: center" id="menu3">Final (open redmine)</div>').insertAfter('#menu2').css({'background':'yellow', 'fontSize':'26px', 'fontFamily':'cursive','border':'1px solid black'}).width(200);
    menu1.innerHTML = '<a id="color1" href="http://bootstrap-3.ru/getting-started.php">Get start with bootstrap</a>';
    menu2.innerHTML = '<a id="color2" href="https://api.jquery.com/contextmenu/">Кликни правой кнопкой</a>';
    menu3.innerHTML = '<a id="color3" href="http://redmine.luch15.com:8081/projects/students/issues?set_filter=1&tracker_id=3">Кликни правой кнопкой</a>';
    document.getElementById('color1').style.color = 'red';
    document.getElementById('color3').style.color = 'blue';

    /*menu1.style.color = prompt('color?', 'green');*/
   $('#color2').contextmenu(function(){
     document.getElementById('color2').style.color = prompt('Напиши цвет : red, white, orange, yellow?', '')
   });

})();
