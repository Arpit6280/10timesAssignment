import React, { useContext,  useState } from "react";
import styles from "./EventPage.module.css";
import image from "../assets/admin.jpg";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateContext from "./store/date-context";
import EventPage2 from "./EventPage2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function EventPage(props) {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [themes, setThemes] = useState("");
  const [color, setColor] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [ticket, setTicket] = useState("Free");
  const [capacity, setCapacity] = useState("Unlimited");
  const [visibility, setVisibility] = useState("Public");
  const [location, setLocation] = useState("");
  const [virtualOffline, setVirtualOffline] = useState("");
  const eventCtx = useContext(DateContext);

  const eventNameHandler = (e) => {
    setEventName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const themesHandler = (themeColor) => {
    console.log(themeColor);
    setThemes(themeColor);
  };

  const colorHandler = (color) => {
    setColor(color);
  };
  const fontFamilyHandler = (fontFamily) => {
    setFontFamily(fontFamily);
  };
  const ticketHandler = (e) => {
    setTicket(e.target.value);
  };

  const capacityHandler = (e) => {
    setCapacity(e.target.value);
  };

  const visibilityHandler = (e) => {
    setVisibility(e.target.value);
  };

  const locationHandler = (e) => {
    setLocation(e.target.value);
  };

  const changeLocation = (e) => {
    setVirtualOffline(e.target.value);
    console.log(virtualOffline);
    console.log(e.target.value);
  };

  const createEventHandler = () => {
    if (eventName.trim().length === 0) {
      alert("Please specify event NAme");
      return;
    } else if (description.trim().length === 0) {
      alert("Please specify description");
      return;
    }

    eventCtx.dateHandler(
      start,
      end,
      description,
      eventName,
      themes,
      color,
      fontFamily,
      ticket,
      capacity,
      visibility,
      location,
      virtualOffline
    );
  setEventName('')
  setDescription('')
  setLocation('')
  setTicket('Free')
    alert('Event Created')
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.calendar_type}>
          <section>
            {" "}
            <img src={image} alt="" className={styles.img} />{" "}
          </section>
          <section>
            {" "}
            <p className={styles.p}>Create Under</p>
            <p>Personal Calendar</p>
          </section>
        </div>
        <div>
          <input
            type="text"
            name="event"
            placeholder="Event Name"
            className={styles.input}
            onChange={eventNameHandler}
            value={eventName}
          />{" "}
        </div>
        <div className={styles.date_time_container}>
          <div className={styles.calendar_logo}>
            <p
              className={styles.span}
              style={{
                backgroundColor: "gray",
              }}
            >
              {date.getDate()}{" "}
            </p>
            <p className={styles.span}>
              {date.toLocaleString("default", { month: "short" })}{" "}
            </p>
          </div>
          <div className={styles.date_time_section}>
            <div className={styles.date_time_start}>
              <p>Start</p>
              <DateTimePicker onChange={setStart} value={start} />
            </div>
            <div className={styles.date_time_start}>
              <p>Ends</p>
              <DateTimePicker onChange={setEnd} value={end} />
            </div>
            <input
              type="text"
              placeholder="Add Description"
              className={styles.event_description}
              onChange={descriptionHandler}
              value={description}
              style={{ backgroundColor: "rgb(241 237 237)" }}
            />

            <hr />
            
          </div>
        </div>
        <div className={styles.date_time_container}>
          <div className={styles.calendar_logo}>
            <p
              className={styles.span}
              style={{ fontSize: "larger", paddingTop: "20%" }}
            >
              <FontAwesomeIcon icon={faMapLocationDot} />
            </p>
          </div>
          <div className={styles.date_time_section}>
            <input
              type="radio"
              name="location"
              value="Offline"
              onChange={changeLocation}
            />
            <label for="offline">Offline</label>
            <input
              type="radio"
              name="location"
              value="Online"
              style={{ marginLeft: "0.8rem" }}
              onChange={changeLocation}
            />
            <label for="online">Online</label>
            <br />
            <input
              type="text"
              className={styles.ticket}
              placeholder="Add location or virtual link"
              style={{ width: "100%", marginTop: "0.7rem" }}
              required
              value={location}
              onChange={locationHandler}
            />
          </div>
        </div>

        <div style={{ margin: "0.8rem 0rem" }}>
          <p>Event Options</p>
          <div className={styles.event_options_container}>
            <section className={styles.options}>
              <span>Tickets </span>
              <span>
                <input
                  type="text"
                  value={ticket}
                  className={styles.ticket}
                  onChange={ticketHandler}
                />
              </span>
            </section>
            <hr />
            <section className={styles.options}>
              <span>Approval Require </span>
              <span>
                <input
                  type="checkbox"
                  id="myCheck"
                  style={{ width: "15px", height: "15px", marginRight: "1rem" }}
                />
              </span>
            </section>
            <hr />
            <section className={styles.options}>
              <span style={{ fontSize: "medium" }}>Capacity</span>
              <span>
                <input
                  type="text"
                  value={capacity}
                  className={styles.ticket}
                  style={{ width: "70px" }}
                  onChange={capacityHandler}
                />
              </span>
            </section>
            <hr />
            <section className={styles.options}>
              <span style={{ fontSize: "medium" }}>visibility</span>
              <span>
                {" "}
                <select
                  name=""
                  id=""
                  className={styles.ticket}
                  style={{ width: "75px" }}
                  onChange={visibilityHandler}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>{" "}
              </span>
            </section>
            <hr />
          </div>
        </div>
        <button className={styles.create_button} onClick={createEventHandler}>
          Create Event
        </button>
      </div>
      <EventPage2
        themesHandler={themesHandler}
        colorHandler={colorHandler}
        fontFamilyHandler={fontFamilyHandler}
      />
    </div>
  );
}

export default EventPage;
