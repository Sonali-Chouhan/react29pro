import React, { useEffect, useState } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import slider from "@material-ui/core/Slider";
import { Slider, Typography } from "@material-ui/core";
import { Table, TableCell, TableRow } from "@material-ui/core";
import { Doughnut, Pie } from "react-chartjs-2";
import TableDetails from "./TabelDetails";
import { Chart, ArcElement } from "chart.js";
import SliderMarks from "./SliderMarks";
import Gauge from "react-svg-gauge";
import { Col, Row } from "rsuite";
Chart.register(ArcElement);

const PretteSlider = withStyles({
  root: { color: "MediumVioletRed", height: 18 },
  track: { height: 10, borderRadius: 4 },
  rail: { height: 10, borderRadius: 4 },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: "white",
    border: "3px solid black",
    margintop: -9,
  },
})(Slider);

function Comments() {
  const [pAmount, setpAmount] = useState(2755000);
  const [interest, setInterest] = useState(7);
  const [duration, setDuration] = useState(147);
  const maxValue = 6000000;
  const intMax = 20;
  const MaxDuration = 360;

  const intr = interest / 1200;
  const emi = duration
    ? Math.round((pAmount * intr) / (1 - (Math.pow(1 / 1 + intr), duration)))
    : 0;
  const totalAmt = duration * emi;
  var TotalAmount = Math.round(
    (emi / intr) * (1 - Math.pow(1 + intr, -duration))
  );
  const TotalAmountOfInt = Math.round(totalAmt - TotalAmount);
  // useEffect(()=>{
  //   var result = [];
  //   for(var i = 0; i < 12; i++) {
  //       result.push(new Date().toLocaleString(5,{month:"long"}));
  //   }
  //   return result;

  // },[])
  // console.log(123456788,result);
  console.log(123,TotalAmountOfInt)
  console.log(456,pAmount)

  return (
    <div>
      <div>
        <h2>EMI</h2>
        <div>
          <Typography gutterBottom>Loan Amount</Typography>
          <PretteSlider
            value={pAmount}
            marks={SliderMarks.marksAmt}
            onChange={(event, vAmt) => {
              setpAmount(vAmt);
            }}
            defaultValue={pAmount}
            max={maxValue}
          />
        </div>
        <div>
          <Typography gutterBottom>interest %</Typography>
          <PretteSlider
            value={interest}
            marks={SliderMarks.marksInt}
            onChange={(event, vInt) => {
              setInterest(vInt);
            }}
            defaultValue={interest}
            max={intMax}
          />
        </div>
        <div>
          <Typography gutterBottom>Tenure</Typography>
          <PretteSlider
            value={duration}
            marks={SliderMarks.marksTenure}
            onChange={(event, vDur) => {
              setDuration(vDur);
            }}
            defaultValue={duration}
            max={MaxDuration}
          />
        </div>
        <div>
          <Table>
            <TableRow>
              <TableCell>
                <TableDetails
                  pAmount={pAmount}
                  totalAmt={totalAmt}
                  interest={interest}
                  duration={duration}
                  emi={emi}
                  TotalAmountOfInt={TotalAmountOfInt}
                />
              </TableCell>
              <TableCell>
                {/* <Pie
                  data={{
                    labels: ["Total Interest", "Total Amount"],
                    datasets: [{
                      data: [TotalAmountOfInt, pAmount],
                      backgroundColor: ["red", "blue"]
                    }]
                  }}
                  width={50}
                  height={50}
                /> */}
              </TableCell>
            </TableRow>
          </Table>
          <Row>
            <Col>
              <Doughnut
                data={{
                  labels: ["Total Interest", "Total Amount"],
                  datasets: [
                    {
                      // data: [30, 40],
                      data: [TotalAmountOfInt, pAmount],
                      backgroundColor: ["#ffaa00", "#939599"],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true,
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Comments;
