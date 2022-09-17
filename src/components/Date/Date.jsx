import React from 'react'
import { useState } from 'react'
import { ReactComponent as Cal } from '../../assets/calendar.svg'
import 'react-calendar/dist/Calendar.css'
import s from './Date.module.css'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import uk from 'date-fns/locale/uk'
registerLocale('uk', uk)

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className={s.dateForm}>
      <div className={s.calendar_box}>
        <Cal className={s.calendar} />

        <DatePicker
          maxDate={new Date()}
          dateFormat="dd.MM.yyyy"
          locale="uk"
          selected={startDate}
          onChange={date => setStartDate(date)}
          className={s.date_piker}
        />
      </div>
    </div>
  )
}
