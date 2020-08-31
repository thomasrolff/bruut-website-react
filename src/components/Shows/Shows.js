import React, { useState, useEffect, useRef } from 'react';
import SongKickLogo from '../../images/by-songkick-black.svg';
import './Shows.scss';
import { fadeOnScroll, scrollToSection } from '../../utils';


function Shows() {
  const [artistEvents, setArtistEvents] = useState([]);
  const [eventsVisible, setEventsVisible] = useState(6);
  const [displayError, setDisplayError] = useState(false);
  const showsRef = useRef(null);

  const API_KEY = process.env.REACT_APP_SONGKICK_API_KEY;
  
  useEffect(() => {
    fadeOnScroll(showsRef.current);
  }, []);

  useEffect(() => {
    fetch(`https://api.songkick.com/api/3.0/artists/4057396/calendar.json?apikey=${API_KEY}`)
    .then(response => response.json())
    .then(buildAllEvents)
    .catch(error => {
      console.log(error);
      setDisplayError(true);
    });
  }, []);

  const buildAllEvents = (data) => {
    const allOkSongkickEvents = data.resultsPage.results.event.filter(event => event.status === "ok");

    setArtistEvents(allOkSongkickEvents);
  }

  const getYear = (date) => {
    const eventDate = new Date(date);
    
    return eventDate.getFullYear();
  }

  const getDayMonth = (date) => {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = months[eventDate.getMonth()];
    return day + ' ' + month;
  }

  const handleLoadMore = () => {
    setEventsVisible(artistEvents.length);
  }

  const handleViewLess = () => {
    setEventsVisible(6);
      scrollToSection("#shows", 40, .2);
  }


  return (
  <section ref={showsRef} className="shows" id="shows">
      <h2>Upcoming Shows</h2>
      <div className="events-list">
        {
          artistEvents.slice(0, eventsVisible).map(event => (
            <div className="event" key={event.id}>
              <div className="event-date">
                <span className="day-month">
                  {getDayMonth(event.start.date)}
                </span>
                <br />
                <span className="year">
                  {getYear(event.start.date)}
                </span>
              </div>
              <div className="event-info">
                <div className="venue">{event.venue.displayName}, {event.venue.metroArea.displayName}
                </div>
                {
                  event.performance[1].displayName && 
                  <div className="other-artists">with {event.performance[1].displayName}</div>
                }
              </div>
              <a href={event.uri} target="_blank" className="button-tickets" rel="noopener noreferrer">
                <div>Tickets</div>  
              </a>
            </div>
          ))
        }
        <div className="songkick-logo">
          <img src={SongKickLogo} alt=""/>
        </div>
      </div>
      {displayError && 
        <h3 style={{textAlign: "center", padding: "1rem 0"}}>
          Unable to load the data at this moment.
        </h3> 
      }
      {eventsVisible < artistEvents.length ? 
        <button className="button" onClick={handleLoadMore}>load more dates</button> :
        <button className="button" onClick={handleViewLess}>view less dates</button> 
      }
      
  </section>
)}

export default Shows;