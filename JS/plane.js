(function () {
    'use strict';

    console.log('start');


    var root = document.getElementById('global');/*запись в переменную дива, который создат в html теле*/
    function next (){
      alert("Как дела?")
    }
    root.addEventListener("contextmenu", next); /*событие на правый щелчек мышки*/

    var linkg = document.getElementById('linkgit');
    linkg.style.background = '#040503';
    linkg.style.border = '1px solid white';

    $('<div style="margin: 0 auto; text-align: center" id="menu">Привет</div>').insertAfter('#global').css('background','green').width(200);
     $('<div style="margin: 0 auto; text-align: center" id="menu1">Привет</div>').insertAfter('#menu').css('background','red').width(200);
      $('<div style="margin: 0 auto; text-align: center" id="menu2">Привет</div>').insertAfter('#menu1').css('background','blue').width(200);
        $('<div style="margin: 0 auto; text-align: center" id="menu3">Привет</div>').insertAfter('#menu2').css('background','orange').width(200);
        menu.style.border = '1px solid black';
        menu1.style.border = '1px solid black';
        menu2.style.border = '1px solid black';
        menu3.style.border = '1px solid black';


})();
