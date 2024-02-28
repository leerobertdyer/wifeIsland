'use client'
import Header from "../Components/Header";
import Links from "../Components/Links";
import { useEffect, useState } from "react";
import { getPublicCalendarEvents } from "googleCalendar";

export default function Shows()
{
    const [events, setEvents] = useState<(string[] | null)[]>([]);

    type EventItem = {
      start: {
        dateTime: string;
      };
      summary: string;
    };
    type EventData = {
      items: EventItem[];
    };
  
    useEffect(() => {
      const updateEvents = async () => {
        const today: Date = new Date();
        const newEvents = await getPublicCalendarEvents();
        const eventData = newEvents.data as EventData;
        const eventsArray: (string[] | null)[] = eventData.items
          .map((e) => {
            const eventDate = new Date(e.start.dateTime);
            if (eventDate >= today) {
              const dateString = e.start.dateTime;
              const date = new Date(dateString);
              const options: Intl.DateTimeFormatOptions  = { year: 'numeric', month: 'long', day: 'numeric' };
              const formattedDate = date.toLocaleDateString("en-US", options);
              return [formattedDate, e.summary];
            }
            return null;
          })
          .filter((e) => e !== null)
          .reverse();
  
          setEvents(eventsArray)
        console.log(eventsArray);
      };
      updateEvents().catch((error) => {
        console.error("Error fetching events:", error);
      });
    }, []);

    return (
    <>
    <Header />
    <Links />
        <div className="mt-4 flex flex-col w-10/12 h-fit min-h-10 bg-purple-300">
            {events ? events.map((e, idx) => {
                return (
                <div key={idx}>
                {e ? <div>
                    <h2>{e[0]}</h2> 
                    <p>{e[1]}</p>
                    </div>
                    : null}
                </div>)
            })
        : null}
        </div>
    </>
    )
}