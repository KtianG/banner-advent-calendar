var advent_calendar=document.querySelector(".advent-calendar-banner__small_grid"),generateNumber=function(){var a=Math.ceil(10*Math.random());return 10===a?a:"0".concat(a)},generateCalendar=function(){var a=(new Date).getDate();console.log(a);for(var n="",e=1;e<25;e++){var r="";if(e<a&&(r='<li class="advent-calendar-banner__present">\n        <a\n          class="advent-calendar-banner__link"\n        >\n          <div class="advent-calendar-banner__day">'.concat(e,'</div>\n          <img\n            class="advent-calendar-banner__present-image"\n            src="https://damizabawki.pl/data/include/cms/advent-calendar/images/gifts/open.png"\n          />\n        </a>\n      </li>')),e===a&&(r='<li class="advent-calendar-banner__present animated_shake">\n        <a\n          class="advent-calendar-banner__link"\n          href="https://wjactv.com/resources/media/0c6a69d2-b5e5-4213-9aa4-5480db841760-momo2.PNG"\n\n        >\n          <div class="advent-calendar-banner__day">'.concat(e,'</div>\n          <img\n            class="advent-calendar-banner__present-image"\n            src="https://damizabawki.pl/data/include/cms/advent-calendar/images/gifts/011.png"\n          />\n        </a>\n      </li>')),e>a){var d=generateNumber();r='<li class="advent-calendar-banner__present animated_shake">\n          <a\n            class="advent-calendar-banner__link"\n          >\n            <div class="advent-calendar-banner__day">'.concat(e,'</div>\n            <img\n              class="advent-calendar-banner__present-image"\n              src="https://damizabawki.pl/data/include/cms/advent-calendar/images/gifts/0').concat(d,'.png"\n            />\n          </a>\n        </li>')}n+=r}advent_calendar.innerHTML=n};generateCalendar();
//# sourceMappingURL=index.4958eac9.js.map
