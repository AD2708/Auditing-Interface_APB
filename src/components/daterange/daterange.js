import '../daterange/daterange.css';
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';
  
  const Daterange = () =>  {
    const[openDate,setOpenDate] = useState(false);
   const[date,setDate] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
   });

   const handleChange = (ranges) => {
      setDate(ranges.selection)
   }

   const handleClick = () => {
      setOpenDate((prev) => !prev)
   }

	return (
	  <>
      <div className='Container'>
         <div className='calender-container'>
            <div onClick={handleClick} className='calender'>
               {
                  `${format(date.startDate,'dd.MMM.yyyy')} to ${format(date.endDate, 'dd.MMM.yyyy')}`
               }
            </div>
         </div>
        { openDate && <DateRangePicker className='dateRange'
         ranges={[date]}
         onChange={handleChange}
         /*minDate={new Date()}*/ />}
      </div>
	  </>
	);
  }
  
  export default Daterange;
  