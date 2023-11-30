const advent_calendar = document.querySelector(
  '.advent-calendar-banner__small_grid'
);

const urls = [
  'https://damizabawki.pl/product-pol-48432-Hasbro-Ciastolina-Play-Doh-Teczowe-Przyjecie.html',
  'https://damizabawki.pl/product-pol-48432-Hasbro-Ciastolina-Play-Doh-Teczowe-Przyjecie.html',
  'https://damizabawki.pl/product-pol-48432-Hasbro-Ciastolina-Play-Doh-Teczowe-Przyjecie.html',
  'https://damizabawki.pl/product-pol-48432-Hasbro-Ciastolina-Play-Doh-Teczowe-Przyjecie.html',
  'https://damizabawki.pl/product-pol-48432-Hasbro-Ciastolina-Play-Doh-Teczowe-Przyjecie.html',
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
  const day = 1;

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
          href="${urls[day]}"

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
