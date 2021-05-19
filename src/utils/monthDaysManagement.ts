import lastDayOfMonth from "date-fns/lastDayOfMonth";

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

    if(daysOfMonth[i]?.length < 2)
      daysOfMonth[i] = daysOfMonth[i].padStart(2, '0')
  }

  return [daysOfMonth, monthNumber, monthName];
}

export function concatMonthsArray(previoustMonth, currentMonth, nextMonth) {
  return previoustMonth.concat(currentMonth.concat(nextMonth));
}
