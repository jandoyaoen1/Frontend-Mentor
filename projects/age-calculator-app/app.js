const submit = document.querySelector(".logo");
const pastDateError = document.querySelector(".pastDateError");
const invalidMonthError = document.querySelector(".invalidMonthError");
const invalidDayError = document.querySelector(".invalidDayError");
const emptyDayError = document.querySelector(".emptyDayError");
const emptyMonthError = document.querySelector(".emptyMonthError");
const emptyYearError = document.querySelector(".emptyYearError");
const invalidDateError = document.querySelector(".invalidDateError");
const dayLabel = document.getElementById('dayLabel');
const monthLabel = document.getElementById('monthLabel');
const yearLabel = document.getElementById('yearLabel');
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

// setting the value for the date
function valueSetter(e) {
  e.preventDefault();
  let dayValue = day.value;
  let monthValue = month.value;
  let yearValue = year.value;
  evaluator(yearValue, monthValue, dayValue);
}

// evaluating the passed values
function evaluator(year, month, day) {
  let switchLogic = true;

  switch (switchLogic) {
    case !day && !month && !year:
      hideClassReset();
      emptyDayError.classList.remove("hide");
      emptyMonthError.classList.remove("hide");
      emptyYearError.classList.remove("hide");
      dayLabel.classList.add('error');
      monthLabel.classList.add('error');
      yearLabel.classList.add('error');
      break;
    case !day:
      hideClassReset();
      emptyDayError.classList.remove("hide");
      dayLabel.classList.add('error');
      break;
    case !month:
      hideClassReset();
      emptyMonthError.classList.remove("hide");
      monthLabel.classList.add('error');
      break;
    case !(month - 1 <= 11):
      hideClassReset();
      invalidMonthError.classList.remove("hide");
      monthLabel.classList.add('error');
      break;
    case !year:
      hideClassReset();
      emptyYearError.classList.remove("hide");
      yearLabel.classList.add('error');
      break;
    case year > new Date().getFullYear():
      hideClassReset();
      pastDateError.classList.remove("hide");
      yearLabel.classList.add('error');
      break;
    case day > new Date(year, month, 0).getDate():
      hideClassReset();
      invalidDateError.classList.remove("hide");
      dayLabel.classList.add('error');
      break;
    default:
      hideClassReset();
      let currentDate = new Date();
      let newDate = new Date(year, month - 1, day);
      let timeDifference = currentDate - newDate;
      timeDifferenceEvaluator(timeDifference);
  }
}

// calcuating and setting the age in years, months and days
function timeDifferenceEvaluator(difference) {
  const yearGap = difference / (1000 * 60 * 60 * 24 * 365.24);
  const monthGap = ((yearGap % 1) * 365.24) / 30.44;
  const dayGap = (monthGap % 1) * 30.44;
  console.log(
    `you are ${Math.floor(yearGap)} years ${Math.floor(
      monthGap
    )} months ${Math.floor(dayGap)} days old`
  );

  submit.addEventListener("click", timeEvaluator);

  function timeEvaluator(e) {
    e.preventDefault();
    const dayDisplay = document.querySelector(".dayDisplay");
    const monthDisplay = document.querySelector(".monthDisplay");
    const yearDisplay = document.querySelector(".yearDisplay");

    const yearh1 = document.querySelector(".yearCounter");
    const monthh1 = document.querySelector(".monthCounter");
    const dayh1 = document.querySelector(".dayCounter");

    const floorYear = Math.floor(yearGap);
    const floorMonth = Math.floor(monthGap);
    const floorDay = Math.floor(dayGap);

    const singleYear = " year";
    const singleMonth = " month";
    const singleDay = " day";

    console.log(floorYear, floorMonth, floorDay);
    // yearDisplay.textContent = floorYear;
    // yearh1.textContent = singleYear;

    function updateCount(timeGap, ageDisplay) {
      const value = timeGap;
      const increment = Math.ceil(value / 1000);
      let initialValue = 0;

      const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
          ageDisplay.textContent = `${value}`;
          clearInterval(increaseCount);
          return;
        }
        ageDisplay.textContent = `${initialValue}`;
      }, 1);
    }

    updateCount(floorYear, yearDisplay);
    updateCount(floorMonth, monthDisplay);
    updateCount(floorDay, dayDisplay);

    function pluralEvauator(ageSpan, ageh1, single) {
      if (ageSpan <= 1) {
        // for values that are 1 or 0
        ageh1.textContent = single;
      } else {
        // for values that are more than 1
        ageh1.textContent = single + "s";
      }
    }

    pluralEvauator(floorYear, yearh1, singleYear);
    pluralEvauator(floorMonth, monthh1, singleMonth);
    pluralEvauator(floorDay, dayh1, singleDay);
    // document.querySelector(".dayDisplay").textContent = Math.floor(dayGap);
    // document.querySelector(".monthDisplay").textContent = Math.floor(monthGap);
    // document.querySelector(".yearDisplay").textContent = Math.floor(yearGap);
  }
}

// function to reset the error messages
function hideClassReset() {
  pastDateError.classList.add("hide");
  invalidMonthError.classList.add("hide");
  invalidDayError.classList.add("hide");
  emptyDayError.classList.add("hide");
  emptyMonthError.classList.add("hide");
  emptyYearError.classList.add("hide");
  invalidDateError.classList.add("hide");
  dayLabel.classList.remove('error');
  monthLabel.classList.remove('error');
  yearLabel.classList.remove('error');
}

day.addEventListener("blur", valueSetter);
month.addEventListener("blur", valueSetter);
year.addEventListener("blur", valueSetter);

// main calculation
// year = difference/(1000*60*60*24*365.24)
// month = ((year % 1)*365.24)/30.44;
// day = (month % 1) * 30.44;
// console.log(`you are ${Math.floor(year)} years ${Math.floor(month)} months ${Math.floor(day)} days old`);
