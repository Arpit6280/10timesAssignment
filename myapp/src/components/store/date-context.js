import React, { useState } from "react";
const DateContext = React.createContext({
  eventDetails: "",
  dateHandler: (date) => {},
});

export const DateContextProvider = (props) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [totalEvents, setTotalEvents] = useState([]);
  const dateHandler = async (
    start,
    end,
    description,
    eventName,
    themeColor,
    color,
    fontFamily,
    ticket,
    capacity,
    visibility,
    location,
    virtualOffline
  ) => {
    let eventDetails = {
      start: start,
      sdate: start.getDate(),
      smonth: start.toLocaleString("default", { month: "short" }),
      sday: weekday[start.getDay()],
      shour: start.getHours(),
      sminutes: start.getMinutes(),
      rdate: end.getDate(),
      rmonth: end.toLocaleString("default", { month: "short" }),
      rday: weekday[end.getDay()],
      rhour: end.getHours(),
      rminutes:  end.getMinutes(),
      description,
      eventName,
      themeColor,
      color,
      fontFamily,
      ticket,
      visibility,
      capacity,
      location,
      virtualOffline
    };
    console.log(virtualOffline);
   console.log(typeof(virtualOffline));
    setTotalEvents((prevstate) => {
      return [...prevstate, eventDetails];
    });
  };

  const contextValue = {
    eventDetails: totalEvents,
    dateHandler: dateHandler,
    
  };

  return (
    <DateContext.Provider value={contextValue}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
