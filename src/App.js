//import logo from './logo.svg';
import { Card } from 'donation-pkg'
import React,{useState} from 'react'
import Books from './Books'
// import Data from './Data';
// import "./App.css"
// import Suilt from './Suilt';
// import Comments from './Comment';

const App = () => {
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
  return (
    <div>
      <h1>Hello</h1>
      {/* <Card  donationFreq={state.donationFrequncy} donationType={state.donationType} amountsData={state.data} frqData={state.donationFrequency} typeData={state.donationType} onValueChange={(e) => console.log(e)} tax={state.taxValue}/> */}
      {/* <Comments/> */}
      {/* <Data/>
       */}
      {/* <Suilt/> */}
      <Books/>
    </div>
  )
}

export default App
