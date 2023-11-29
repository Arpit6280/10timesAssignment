import React from "react";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import EventDetails from "./components/EventDetails";
import Header from "./components/Header";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import EventPage from "./components/EventPage";
import NewCalendar from "./components/NewCalendar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EventPage />} />
        </Routes>
        <Routes>
          <Route path="/events" element={<EventDetails />} />
        </Routes>
        <Routes>
          <Route path="/calendar" element={<NewCalendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
