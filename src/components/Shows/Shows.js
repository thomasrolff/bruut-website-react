import React, { useState, useEffect, useRef } from 'react';
import SongKickLogo from '../../images/by-songkick-black.svg';
import './Shows.scss';
import { fadeOnScroll } from '../../utils';


function Shows() {
  const [artistEvents, setArtistEvents] = useState([]);
  const [eventsVisible, setEventsVisible] = useState(6);
  const [displayError, setDisplayError] = useState(false);

  const buildAllEvents = (data) => {
    const allSongkickEvents = data.resultsPage.results.event;
    setArtistEvents(allSongkickEvents);
  }

  const handleLoadMore = () => {
    setEventsVisible(artistEvents.length);
  }

  const handleViewLess = () => {
    setEventsVisible(6);
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
 
  useEffect(() => {
    fetch('https://api.songkick.com/api/3.0/artists/4057396/calendar.json?apikey=42PV2kn4gScjFMcv')
    .then(response => response.json())
    .then(buildAllEvents)
    .catch(error => {
      console.log(error);
      setDisplayError(true);
    });
  }, []);


  
  const showsRef = useRef(null);
  
  useEffect(() => {
    fadeOnScroll(showsRef.current);
  }, []);


  return (
  <section ref={showsRef} className="shows" id="shows">
      <h2  >Upcoming Shows</h2>
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
              <a href={event.uri} target="_blank" className="button-tickets">
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
          Not able to load the data at this moment.
        </h3> 
      }
      {eventsVisible < artistEvents.length ? 
        <button className="button" onClick={handleLoadMore}>load more dates</button> :
        <button className="button" onClick={handleViewLess}>view less dates</button> 
      }
      
  </section>
)}

export default Shows;