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
  const monthNumber: number = parseInt(
    lastDayOfMonth(month).toLocaleDateString().split("/")[1]
  );
  const monthName = lastDayOfMonth(month);

  var daysOfMonth: string[] = [];

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    daysOfMonth[i] = String(i + 1);

    if (daysOfMonth[i]?.length < 2)
      daysOfMonth[i] = daysOfMonth[i].padStart(2, "0");
  }

  return [daysOfMonth, monthNumber, monthName];
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

  let newArray: [[any, number]] = [[null, null]];

  for (let i = 0; i < lastDayOfPreviousMonth; i++) {
    newArray[i] = [allDays[i], currentMonthNumber - 1];
  }

  for (
    let i = lastDayOfPreviousMonth;
    i < lastDayOfPreviousMonth + lastDayOfCurrentMonth;
    i++
  ) {
    newArray[i] = [allDays[i], currentMonthNumber];
  }

  for (
    let i = lastDayOfPreviousMonth + lastDayOfCurrentMonth;
    i < lastDayOfPreviousMonth + lastDayOfCurrentMonth + lastDayOfNextMonth;
    i++
  ) {
    newArray[i] = [allDays[i], currentMonthNumber + 1];
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
  const allDaysAndMonth = getDaysAndMonthArray(allDays, currentMonthNumber);

  let currentDayIndex: number;

  for (let i = 0; i < allDays.length; i++) {
    if (
      currentDayNumber == allDays[i] &&
      currentMonthNumber == allDaysAndMonth[i][1]
    ) {
      currentDayIndex = i;
    }
  }

  return [allDays, currentDayIndex];
}
