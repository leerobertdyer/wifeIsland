import axios from 'axios';

export function getPublicCalendarEvents() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const calendarID = process.env.NEXT_PUBLIC_CALENDAR_ID
    const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${API_KEY}`;

    const events = axios.get(calendarUrl, { withCredentials: false });
    console.log(events);
    console.log('object');
    return events
    
  }

