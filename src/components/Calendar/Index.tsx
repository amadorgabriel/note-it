import { useRef, useEffect, useState } from "react";

import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import { MdFilterCenterFocus } from "react-icons/md";

import {
  getAllDaysOfMonth,
  concatMonthsArray,
} from "../../utils/monthDaysManagement";

import { ScrollabeCalendar, ScrollTopButton } from "./styles";

export const Calendar = () => {
  const CalendarRef = useRef(null);

  const [daysOfPrevioustMonth] = getAllDaysOfMonth(subMonths(new Date(), 1));
  const [daysOfCurrentMonth] = getAllDaysOfMonth(new Date());
  const [daysOfNextMonth] = getAllDaysOfMonth(addMonths(new Date(), 1));
  const { allDays, currentDayIndex, allDates } = concatMonthsArray(
    daysOfPrevioustMonth,
    daysOfCurrentMonth,
    daysOfNextMonth
  );

  const [currentDay, setCurrentDay] = useState<Number>(currentDayIndex);

  function handleWithNewCurrentDay(index: number): void {
    CalendarRef.current.scrollTop = 135 * (index - 3);

    setCurrentDay(index);
  }

  function handleWithCetralizeList(): void {
    CalendarRef.current.scrollTop = 135 * (currentDayIndex - 3);

    handleWithNewCurrentDay(currentDayIndex);
  }

  useEffect(() => {
    window.addEventListener("load", () => {
      CalendarRef.current.scrollTop = 135 * (currentDayIndex - 3);
    });
  }, []);

  return (
    <ScrollabeCalendar ref={CalendarRef}>
      <ScrollabeCalendar.DayList>
        {allDays.map((numberDay: number, index: number) => {
          return (
            <li key={index}>
              <div className="pointer">
                <span />
                <span />
                <span
                  className={
                    currentDay == index ? "principal active" : "principal"
                  }
                />
                <span />
                <span />
                <span />
              </div>

              <div
                className="day-info"
                onClick={() => {
                  handleWithNewCurrentDay(index);
                }}
              >
                <p className={currentDay == index ? "active" : ""}>
                  {numberDay}
                </p>
                <span className={currentDay == index ? "" : "hidden"}>
                  <p>{format(allDates[index], "MMMM")}</p>
                  <p>{format(allDates[index], "EEEE")}</p>
                </span>
              </div>
            </li>
          );
        })}
      </ScrollabeCalendar.DayList>

      <ScrollTopButton onClick={handleWithCetralizeList}>
        <MdFilterCenterFocus size={22} className="icon" color="#FFF" />
      </ScrollTopButton>
    </ScrollabeCalendar>
  );
};
