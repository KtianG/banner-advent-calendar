const advent_calendar = document.querySelector(
  '.advent-calendar-banner__small_grid'
);

const urls = [
  'https://damizabawki.pl/product-pol-48432-Hasbro-Ciastolina-Play-Doh-Teczowe-Przyjecie.html',
  'https://damizabawki.pl/product-pol-48634-Monopoly-Spider-Man-Wersja-Polska-Edycja-Kolekcjonerska.html',
  'https://damizabawki.pl/product-pol-46200-Sambro-Pluszowa-Figurka-Spider-Man-Marvel-38-cm.html',
  'https://damizabawki.pl/product-pol-48381-Miraculous-Figurka-12cm-Biedronka-Marinette.html',
  'https://damizabawki.pl/product-pol-48447-Hasbro-My-Little-Pony-Grajaca-Figurka-Izy-Moonbow.html',
  'https://damizabawki.pl/product-pol-48689-Lalka-Bobas-My-Baby-Garden-Biedronka-Interaktywna-Rozowa.html',
];

const generateNumber = () => {
  let number = Math.ceil(Math.random() * 10);
  if (number === 10) {
    return number;
  }
  return `0${number}`;
};

const generateCalendar = () => {
  const date = new Date();
  const day = date.getDate();

  let calendar = '';

  for (let i = 1; i < 25; i++) {
    let temp = ``;

    if (i < day) {
      temp = `<li class="advent-calendar-banner__present">
        <a
          class="advent-calendar-banner__link"
        >
          <div class="advent-calendar-banner__day">${i}</div>
          <img
            class="advent-calendar-banner__present-image"
            src="https://damizabawki.pl/data/include/cms/advent-calendar/images/gifts/open.png"
          />
        </a>
      </li>`;
    }

    if (i === day) {
      temp = `<li class="advent-calendar-banner__present animated_shake">
        <a
          class="advent-calendar-banner__link"
          href="${urls[day - 1]}"

        >
          <div class="advent-calendar-banner__day">${i}</div>
          <img
            class="advent-calendar-banner__present-image"
            src="https://damizabawki.pl/data/include/cms/advent-calendar/images/gifts/011.png"
          />
        </a>
      </li>`;
    }

    if (i > day) {
      const number = generateNumber();
      temp = `<li class="advent-calendar-banner__present animated_shake">
          <a
            class="advent-calendar-banner__link"
          >
            <div class="advent-calendar-banner__day">${i}</div>
            <img
              class="advent-calendar-banner__present-image"
              src="https://damizabawki.pl/data/include/cms/advent-calendar/images/gifts/0${number}.png"
            />
          </a>
        </li>`;
    }

    calendar += temp;
  }

  advent_calendar.innerHTML = calendar;
};

generateCalendar();
