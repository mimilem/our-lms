import React from 'react';

import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

import './calendar.css';


function CalendarCpmnt() {

    const API_KEY = "AIzaSyDze7dgAysNngoDi0Q6IH8zH1-tqED7Ve4";

    let calendars = [
        {calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com", color: "#8f94fb"}
      ];

      let styles = {
        calendar: {
            borderWidth: "1px", //make outer edge of calendar thicker
            width:"100%"
        },
  
        multiEvent: css`
        /* highlight today by making the text red and giving it a red border */
         color: green;
         cursor: pointer;
         background: linear-gradient(#a8c0ff, #8f94fb);
       `,

        //you can also use emotion's string styles
        today: css`
        /* highlight today by making the text red and giving it a red border */
         color: #fff;
         cursor: pointer;
         background: #96a9b6;
       `
      }

      return (
          <div className='staff-exams-calendar'>
              <Calendar 
                apiKey={API_KEY} 
                calendars={calendars} 
                showFooter={false} 
                styles={styles} />
          </div>
      )
}

export default CalendarCpmnt;