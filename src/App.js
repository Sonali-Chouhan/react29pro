//import logo from './logo.svg';
import { Card } from 'donation-pkg'
import React,{useState} from 'react';
// import MultiSelector from "./OptionSelector/MultiSelector"
import moment from "moment";
// import hookform from "../hookform"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelector from "./OptionSelector/MultiSelector";
// import HookformPra from "./Task/HookformPra";
// import Books from './Books'
// import Data from './Data';
// import "./App.css"
// import Suilt from './Suilt';
// import Comments from './Comment';

const App = () => {
  //new
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [state,setState]=useState({
    count: 2000,
  taxValue: 250,
  data: [
    { label: "Supporter", value: 2000, amount: "$2,000 - $4,999" },
    { label: "Major Supporter", value: 5000, amount: "$5,000 - $9,999" },
    { label: "Key Supporter", value: 10000, amount: "$10,000 - $24,999" },
    {
      label: "Principal Supporter",
      value: 25000,
      amount: "$25,000 - $50,999",
    },
  ],
  donationFrequency: [
    { donationName: "One Time" },
    { donationName: "Recurrent Annually" },
  ],
  donationType: [
    { donationTypeName: "Individual" },
    { donationTypeName: "Corporate" },
  ],
 
})
 //new
 

 const handleCheckIn = (date) => {
  setCheckIn(date);
  setCheckOut(null);
};


const handleCheckOut = (date) => {
setCheckOut(date);
};
  return (
    <div>
      <div className="input-container">
      <h3>Date Picker</h3>
      <div>
        <label>check-in</label>
        <DatePicker
          selected={checkIn}
          minDate={new Date()}
          onChange={handleCheckIn}
        />
      </div>
      <div>
        <label>Check-Out</label>
        <DatePicker
          selected={checkOut}
          minDate={checkIn}
          onChange={handleCheckOut}
        />
      </div>
       {
         checkIn && checkOut && (
          <div className="summary">
          <p>
            You book a hotel from 
            { moment(checkIn).format("LL")} to {" "}
            {moment(checkOut).format("LL") }.
          </p>
        </div>
         )
       }
       </div>
      <MultiSelector/>
      {/* <HookformPra/> */}
      {/* <h1>Hello</h1> */}
      {/* <Card  donationFreq={state.donationFrequncy} donationType={state.donationType} amountsData={state.data} frqData={state.donationFrequency} typeData={state.donationType} onValueChange={(e) => console.log(e)} tax={state.taxValue}/> */}
      {/* <Comments/> */}
      {/* <Data/>
       */}
      {/* <Suilt/> */}
      {/* collback function use Books component*/}
      {/* <Books/> */}
    </div>
  )
}

export default App
