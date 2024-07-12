import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import '../daterange/daterange.css';
import moment from 'moment';
import calendar from '../assets/calendar.png';


function Daterange() {

      const[startDate, setStartDate] = useState(null);
      const[endDate, setEndDate] = useState(null);
      const[isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate (start);
    setEndDate (end);
    if (start && end) {
      setIsOpen(false);
    }
  };

  return (
    <div className="daterange">
      <div className="date-range-container">
        <div className="date-picker-placeholder" onClick={handleClick}>
          <img src={calendar} alt="calendar icon" />
          <span>
            {startDate ? moment(startDate).format('MMM D, YYYY') : 'From Date'} — {endDate ? moment(endDate).format('MMM D, YYYY') : 'To Date'}
          </span>
        </div>
        {isOpen && (
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        )}
      </div>
    </div>
  );
}

export default Daterange;
