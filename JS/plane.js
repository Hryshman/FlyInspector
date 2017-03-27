(function () {
    'use strict';

    console.log('start');

    function next (){
      alert("Ссылка на гит репозиторий с данным сайтом")
    }

    var linkg = document.getElementById('linkgit');
    linkg.style.background = '#1b2c3f';
    linkg.style.border = '1px solid white';
    linkg.addEventListener("contextmenu", next); /*событие на правый щелчек мышки*/

    $('<div style="margin: 0 auto; text-align: center" id="menu"><a style="color: black" href="https://www.youtube.com/watch?v=UbQgXeY_zi4&list=PLhInz4M-OzRUsuBj8wF6383E7zm2dJfqZ">Music</a></div>').insertAfter('#global').css({'background':'#ffb701','fontFamily':'serif','border':'1px solid black'}).width(200);
     $('<div style="margin: 0 auto; text-align: center" id="menu1"></div>').insertAfter('#menu').css({'background':'#ff9302', 'fontFamily':'inherit','border':'1px solid black'}).width(200);
      $('<div style="margin: 0 auto; text-align: center" id="menu2"></div>').insertAfter('#menu1').css({'background':'#618b44', 'fontFamily':'monospace','border':'1px solid black'}).width(200);
        $('<div style="margin: 0 auto; text-align: center" id="menu3"></div>').insertAfter('#menu2').css({'background':'#c7e1fd', 'fontSize':'26px', 'fontFamily':'cursive','border':'1px solid black'}).width(200);
    menu1.innerHTML = '<a id="color1" href="http://bootstrap-3.ru/getting-started.php">Кликни правой кнопкой на этот background</a>';
    menu2.innerHTML = '<a id="color2" href="https://api.jquery.com/contextmenu/">Doubleclick on this background</a>';
    menu3.innerHTML = '<a id="color3" href="http://redmine.luch15.com:8081/projects/students/issues?set_filter=1&tracker_id=3">Redmine (Click on this background)</a>';
    color1.style.color = '#3d5a68';
    color3.style.color = 'blue';

    $('#menu1').contextmenu(function(){
      document.getElementById('color1').style.color = prompt('Напиши цвет : red, white, orange или yellow?', '');
    });

    menu2.ondblclick = function () {
       color2.style.color = '#ff9302';
       menu3.style.background = '#c7e1fd';
     };

   $('#menu3').click (function() {
        $(this).css('background', '#67a9d2');
        $('#color2').html('<a href="https://api.jquery.com/contextmenu/">Doubleclick once more on this background</a>').css('color', 'white');
    });
   var n = $('#counter').html;
   console.log(n);

})();
