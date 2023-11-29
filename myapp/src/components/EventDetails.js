import React, { useContext, useState } from "react";
import DateContext from "./store/date-context";
import styles from "./EventDetails.module.css";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";

function EventDetails() {
  const eventCtx = useContext(DateContext);
  const [eventFilter, setEventFilter] = useState("all");
  let newdate = new Date();

  const eventDisplayHandler = (filter) => {
    setEventFilter(filter);
  };

  return (
    <div className={styles.event_container}> 
      <div className={styles.events_details_top}>
        <section>
          <h2>Events</h2>
        </section>
        <section className={styles.upcoming_past}>
          <button
            onClick={() => eventDisplayHandler("all")}
            className={eventFilter === "all" ? styles.event_filter : ""}
          >
            All
          </button>
          <button
            onClick={() => eventDisplayHandler("upcoming")}
            className={eventFilter === "upcoming" ? styles.event_filter : ""}
          >
            Upcoming
          </button>
          <button
            onClick={() => eventDisplayHandler("past")}
            className={eventFilter === "past" ? styles.event_filter : ""}
          >
            Past
          </button>
        </section>
      </div>
      {eventCtx.eventDetails
        .filter((item) => {
          if (eventFilter === "all") return item;
          else if (eventFilter === "upcoming" && item.start > newdate)
            return item;
          else if (eventFilter === "past" && item.start < newdate) return item;
        })
        .map((item) => (
          <div className={styles.event_lists}>
            <div className={styles.event_left}>
              <h5>
                {item.smonth} {item.sdate}
              </h5>
              <p className={styles.colors}>{item.sday} </p>
            </div>
            <div className={styles.event_right}>
              <Timeline>
                <TimelineEvent
                  title=""
                  icon={<i className="material-icons md-7">event</i>}
                  style={{
                    backgroundColor: {},
                    boxShadow: "0 0 6px 1px #00BCD4",
                  }}
                  contentStyle={{
                    backgroundColor: `${item.themeColor}`,
                    color: "",
                  }}
                >
                  <p className={styles.colors}>
                    {item.shour}:{item.sminutes}{" "}
                  </p>
                  <p
                    className={styles.eventName}
                    style={{
                      color: `${item.color}`,
                      fontFamily: `${item.fontFamily}`,
                    }}
                  >
                    {item.eventName}
                  </p>
                  <p className={styles.colors}>{item.description}</p>
                  <p className={styles.colors}>Ticket Price- {item.ticket}</p>
                  <p className={styles.colors}>
                    Capacity Of Event- {item.capacity}
                  </p>
                  <p className={styles.colors}> Event is - {item.visibility}</p>
                  <p>
                    {" "}
                    {item.virtualOffline === "Offline" ? (
                      <FontAwesomeIcon icon={faMapLocationDot} />
                    ) : (
                      <FontAwesomeIcon icon={faVideo} />
                    )}{" "}
                    -{item.virtualOffline} at {item.location}{" "}
                  </p>
                </TimelineEvent>
              </Timeline>
            </div>
          </div>
        ))}
    </div>
  );
}

export default EventDetails;
