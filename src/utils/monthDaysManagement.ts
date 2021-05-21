import lastDayOfMonth from "date-fns/lastDayOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

export function getAllDaysOfMonth(month?: Date) {
  if (!month) {
    month = new Date();
  }

  const lastDayOfCurrentMonth: number = parseInt(
    lastDayOfMonth(month).toLocaleDateString().split("/")[0]
  );

  var daysOfMonth: string[] = [];

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    daysOfMonth[i] = String(i + 1);

    if (daysOfMonth[i]?.length < 2)
      daysOfMonth[i] = daysOfMonth[i].padStart(2, "0");
  }

  return [daysOfMonth];
}

function getDaysAndMonthArray(allDays, currentMonthNumber) {
  const lastDayOfCurrentMonth: number = parseInt(
    lastDayOfMonth(new Date()).toLocaleDateString().split("/")[0]
  );

  const lastDayOfPreviousMonth: number = parseInt(
    lastDayOfMonth(subMonths(new Date(), 1)).toLocaleDateString().split("/")[0]
  );

  const lastDayOfNextMonth: number = parseInt(
    lastDayOfMonth(addMonths(new Date(), 1)).toLocaleDateString().split("/")[0]
  );
  const currentYear = new Date().getFullYear();

  let newArray: [[any, number, Date]] = [[null, null, null]];

  for (let i = 0; i < lastDayOfPreviousMonth; i++) {
    newArray[i] = [
      allDays[i],
      currentMonthNumber - 1,
      new Date(currentYear, currentMonthNumber - 2, allDays[i]),
    ];
  }

  for (
    let i = lastDayOfPreviousMonth;
    i < lastDayOfPreviousMonth + lastDayOfCurrentMonth;
    i++
  ) {
    newArray[i] = [
      allDays[i],
      currentMonthNumber,
      new Date(currentYear, currentMonthNumber - 1, allDays[i]),
    ];
  }

  for (
    let i = lastDayOfPreviousMonth + lastDayOfCurrentMonth;
    i < lastDayOfPreviousMonth + lastDayOfCurrentMonth + lastDayOfNextMonth;
    i++
  ) {
    newArray[i] = [
      allDays[i],
      currentMonthNumber + 1,
      new Date(currentYear, currentMonthNumber, allDays[i]),
    ];
  }

  return newArray;
}

export function concatMonthsArray(previoustMonth, currentMonth, nextMonth) {
  const currentDayNumber = parseInt(
    new Date().toLocaleDateString().split("/")[0]
  );
  const currentMonthNumber = parseInt(
    new Date().toLocaleDateString().split("/")[1]
  );

  const allDays = previoustMonth.concat(currentMonth.concat(nextMonth));
  const allDates: Date[] = [null];
  const allDaysAndMonth = getDaysAndMonthArray(allDays, currentMonthNumber);

  let currentDayIndex: number;

  for (let i = 0; i < allDays.length; i++) {
    if (
      currentDayNumber == allDays[i] &&
      currentMonthNumber == allDaysAndMonth[i][1]
    ) {
      currentDayIndex = i;
    }

    allDates[i] = allDaysAndMonth[i][2];
  }

  return { allDays, currentDayIndex, allDates };
}
