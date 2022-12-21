import SliderMarks from "./SliderMarks";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { useEffect } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { RadialBarChart } from "recharts";
import { Doughnut } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import Gauge from "react-svg-gauge";
// import { MapContainer, TileLayer } from 'react-leaflet';
// import { SemiCircle, SemiCircleMarker } from 'react-leaflet-semicircle';
const Data = () => {
  const [pAmount, setpAmount] = useState(2755000);
  const [interest, setInterest] = useState(7);
  const [duration, setDuration] = useState(5);
  const maxValue = 6000000;
  const intMax = 20;
  const MaxDuration = 12;
  const handleChange = (e) => {
    setpAmount(e);
   
  };
  const chartStyle = {
    height: 250,
  }
  const handleChanges = (e) => {
    // setpAmount(e);
    setInterest(e);
    // setDuration(e);
  };
  const handleChangess = (e) => {
    // setpAmount(e);
    //setInterest(e);
    setDuration(e);
  };
  useEffect(() => {}, [pAmount]);
  const date = new Date();
  date.setMonth(8 - 1);
  date.toLocaleString([],  {
    month: 'long',
  });

  console.log(123,date)
  return (
    <div className="App">
      <Slider
        min={0}
        onChange={(e) => handleChange(e)}
        marks={{
          0: "0",
          1500000: "15L",
          3000000: "30L",
          4500000: "45L",
          6000000: "60L",
        }}
        value={pAmount}
        defaultValue={pAmount}
        max={maxValue}
      />
      <br />
      <input value={pAmount} onChange={(e) => setpAmount(e.target.value)} />
      <br />
      <Slider
        min={5}
        value={interest}
        onChange={(e) => handleChanges(e)}
        defaultValue={interest}
        max={intMax}
        marks={{
          5: "5",
          7.5: "7.5",
          10: "10",
          12.5: "12.5",
          15: "15",
        }}
      />
      <br />
      <input value={interest} onChange={(e) => setInterest(e.target.value)} />
      <br />
      <Slider
        min={0}
        value={duration}
        onChange={(e) => handleChangess(e)}
        defaultValue={duration}
        max={MaxDuration}
        marks={{
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
        }}
      />
      <br />
      <input value={duration} onChange={(e) => setDuration(e.target.value)} />
      <br />
     

      {/* <GaugeChart id="gauge-chart5"
  nrOfLevels={420}
  // arcsLength={[0.3, 0.5, 0.2]}
  cardBackColor={['rgb(245, 245, 245)']}
  // percent={0.37}
  // arcPadding={0.02}
  value={pAmount}
/> */}
  <Gauge
        data={{
          labels: ["Total Interest", "Total Amount"],
          datasets: [{
            data: [interest, pAmount],
            backgroundColor: ["red", "blue"]
          }]
        }}
        width={400}
        height={500}
        topLabelStyle={{ display: "none" }}
        valueLabelStyle={{}}
        // valueFormatter={number => `${number}%`}
      />
    </div>
  );
};

export default Data;

