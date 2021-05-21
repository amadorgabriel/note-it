import { useRef, useEffect } from "react";

import format from "date-fns/format"
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import {
  getAllDaysOfMonth,
  concatMonthsArray,
} from "../../utils/monthDaysManagement";

import { ScrollabeCalendar } from "./styles";

export const Calendar = () => {
  const [daysOfPrevioustMonth] = getAllDaysOfMonth(subMonths(new Date(), 1));
  const [daysOfCurrentMonth] = getAllDaysOfMonth(new Date());
  const [daysOfNextMonth] = getAllDaysOfMonth(addMonths(new Date(), 1));

  const {allDays, currentDayIndex, allDates} = concatMonthsArray(
    daysOfPrevioustMonth,
    daysOfCurrentMonth,
    daysOfNextMonth
  );

  const DayListRef = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      DayListRef.current.scrollTop = 128 * (currentDayIndex);
    })
  }, [])

  return (
    <ScrollabeCalendar>
      <div className="pointer-container">
        <div className="pointer"><span /></div>
        <div className="pointer"><span /></div>
        <div className="pointer"><span /></div>
        <div className="pointer principal"><span /></div>
        <div className="pointer"><span /></div>
        <div className="pointer"><span /></div>
        <div className="pointer"><span /></div>
      </div>

      <ScrollabeCalendar.DayList ref={DayListRef}>
        {allDays.map((numberDay: number, index: number) => {
          return (
            <li key={index}>
              <p className={currentDayIndex == index ? "active" : ""}>
                {numberDay}
              </p>
              <span className={currentDayIndex == index ? "" : "hiddenN"}>
                <p>{format(allDates[index], 'MMM')}, {format(allDates[index], 'MM')}</p>
                <p>{format(allDates[index], 'EEEE')}</p>
              </span>
            </li>
          );
        })}
      </ScrollabeCalendar.DayList>
    </ScrollabeCalendar>
  );
};
