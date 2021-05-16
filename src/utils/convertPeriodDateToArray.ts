import lastDayOfMonth from "date-fns/lastDayOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

const daysOfCurrentMonth = getAllDaysOfMonth(new Date())
const daysOfPrevioustMonth = getAllDaysOfMonth(subMonths(new Date(), 1))
const daysOfNextMonth = getAllDaysOfMonth(addMonths(new Date(), 1))

export function getAllDaysOfMonth (month?: Date ) {
  if(!month){
    month = new Date()
  }

  const lastDayOfCurrentMonth = parseInt( format(lastDayOfMonth(month), 'd', { locale: ptBR }))
  var daysOfMonth: number[];

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    var day = lastDayOfCurrentMonth[i]
    daysOfMonth.push(day)
  }

  return daysOfMonth
}



