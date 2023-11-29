import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar'
import Modal from './UI/Modal';
import DateContext from './store/date-context';

function NewCalendar(props) {
    const [date,setDate]=useState(new Date());
     

  return (
    <Modal>
    <Calendar onChange={setDate}  value={date}/> 
    </Modal>
  )
}

export default NewCalendar



