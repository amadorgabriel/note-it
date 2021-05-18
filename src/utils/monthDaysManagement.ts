import lastDayOfMonth from "date-fns/lastDayOfMonth";

export function getAllDaysOfMonth (month?: Date ) {
  if(!month){
    month = new Date()
  }

  const lastDayOfCurrentMonth = parseInt(lastDayOfMonth(month).toLocaleDateString().split('/')[0])
  const monthNumber = parseInt(lastDayOfMonth(month).toLocaleDateString().split('/')[1])
  const monthName = lastDayOfMonth(month)

  var daysOfMonth:number[] = [];

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    daysOfMonth[i] = i + 1;
  }
  
  return [daysOfMonth, monthNumber, monthName]
}

export function concatMonthsArray(previoustMonth: number[], currentMonth: number[], nextMonth: number[]) {
  return  previoustMonth.concat(currentMonth).concat(nextMonth)
}


