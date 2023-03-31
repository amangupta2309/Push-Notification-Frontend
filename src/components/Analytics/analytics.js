import React,{useState,useEffect,useRef} from "react";
import axios from 'axios'
import { Grid } from "@material-ui/core";
import { BarChart } from "../Utils/barChart";
import { CardBar } from "../Utils/cardBar";
import { CardSummary } from "../Utils/cardSummary";

var usersLength;
var totalDelivered;
var totalSent;


async function getData(){
  const response = await axios.get('https://push-notifications-513j.onrender.com/getusers')
      usersLength = Object.keys(response.data).length;
  const response2 = await axios.get('https://push-notifications-513j.onrender.com/analytics')
    var totalData = response2.data;
    console.log(totalData)
    totalDelivered = totalData.AnalyticsData.totalDelivered;
    totalSent = totalData.AnalyticsData.totalSent;
    console.log(totalDelivered)
    }
// getData();

export default function Analytics() {
getData();
  return (
    <div style={{backgroundColor:'#cbe0ff', height: '93.5vh'}}>
    <Grid className="mt-2 mx-2 text-center">
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <CardSummary
            title="Total Notfication Delievered to Users"
            value={totalDelivered}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <CardSummary
            title="Total Notfication Sent by Admin"
            value={totalSent}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <CardSummary
            title="Total Users"
            value={usersLength}
          />
        </Grid>
               <Grid item xl={8} lg={8} md={12} sm={12} xs={12} className="mx-auto" style={{fontSize:'40px',height:"70vh"}}>
        <CardBar title="Activity Report" chart={<BarChart />} />
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

// export { Analytics };

