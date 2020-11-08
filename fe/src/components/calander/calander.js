import React, {useState, useEffect} from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import ExampleControlSlot from '../ExampleControlSlot'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'

const localizer = momentLocalizer(moment)


export default function Calander() {
  const [allEvents, setAllEvents] = useState([]);
  let [id, setId] = useState(0)
  useEffect(() => {      
    }, [allEvents])

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')

    if (title) {
        id++
        allEvents.push({ 
            id,  
            start,
            end,
            title,})
        const newEvents = allEvents
        setAllEvents(newEvents)
        setId(id)
        }
  }

  const handleDelete = (event) => {
    const filterEvent = allEvents.filter((item) => item.id !== event.id);
    setAllEvents(filterEvent)
  }


    return (
      <div>
        <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ExampleControlSlot.Entry>
        <Calendar
          selectable
          localizer={localizer}
          events={allEvents}
          defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={(event) => handleDelete(event)}
          onSelectSlot={(start, end) => handleSelect(start, end)}
        />
      </div>
    )
  }

