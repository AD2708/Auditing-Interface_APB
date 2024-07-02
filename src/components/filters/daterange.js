import { useState} from 'react';
import { Container } from "react-bootstrap";
import { DateRange } from 'react-date-range';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//npm install react-datepicker

function daterange()
{
    const [selectesDate, setSelectedDate]= useState('');

    return( 
        <React.Fragment>
             <Container>
          <div className="row">
          <div className="col-sm-10">
            <h5 className="mt-3 mb-4 text-white"> React Date picker</h5>
            
            <form className='row'>
            <div className="row mb-4">
            <label className="col-sm-2 col-form-label" onclic> Date</label>
            <div className="col-sm-5">
            <DatePicker selected={ selectesDate}
            onChange={ date=>setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            //minDate={ new Date()}
            //maxDate={ new Date()}
            //filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
           // isClearable
            showYearDropdown
     
            />                 
            </div>
            </div>

            <div className="row mb-4">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-4">
            <button type="submit" className="btn btn-success">Submit</button>                  
            </div>
            </div>

            </form>

            </div>
        </div>
        </Container>
        </React.Fragment>
    );
}

export default daterange;