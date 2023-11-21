const advent_calendar = document.querySelector(
  '.advent-calendar-banner__small_grid'
);

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
  console.log(day);

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
      temp = `<li class="advent-calendar-banner__present">
        <a
          class="advent-calendar-banner__link"
          href="https://wjactv.com/resources/media/0c6a69d2-b5e5-4213-9aa4-5480db841760-momo2.PNG"

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
      temp = `<li class="advent-calendar-banner__present">
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
