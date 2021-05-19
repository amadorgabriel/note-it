import { useState } from 'react'
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import { getAllDaysOfMonth, concatMonthsArray } from '../utils/monthDaysManagement'

import { ScrollabeCalendar } from "./styles";

export const Calendar = () => {
  const [daysOfPrevioustMonth] = getAllDaysOfMonth(subMonths(new Date(), 1))
  const [daysOfCurrentMonth] = getAllDaysOfMonth(new Date())
  const [daysOfNextMonth] = getAllDaysOfMonth(addMonths(new Date(), 1))
  const [allDays, currentDayIndex] = concatMonthsArray(daysOfPrevioustMonth, daysOfCurrentMonth, daysOfNextMonth)
  
  return (
    <ScrollabeCalendar>
      <ul>{allDays.map((numberDay:number, index:number) => {

        return (
          <li key={index}>
            <p className={currentDayIndex == index ? "active" : ""}>{numberDay}</p>
            <span className={currentDayIndex == index ? "" : "hidden"}>
              <p>May, 05</p>
              <p>wednesday</p>
            </span>
          </li>
        )
      }
        
        )}</ul>
    </ScrollabeCalendar>
  );
};
