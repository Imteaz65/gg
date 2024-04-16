import FormatDate from "./FormatDate";
import WeatherToDegree from "./WeatherToDegree";
import { FaLocationDot } from "react-icons/fa6";


function Cards({ RecommendedEvents,imageCount,path}) {
  const { eventName, cityName, date, distanceKm, weather } =RecommendedEvents;

  return (
    <>
      <div className="cardContainer pointer" >

        {/* <div className="img" style={{  backgroundImage: `url(../../src/assets/photos/img_${imageCount+1}.svg)` }}>
        </div> */}

        <div className="img" style={{  backgroundImage: `url(${path})` }}>

        </div>

        <div className="eventInfo" style={{fontWeight:"bold"}}>

          <div className="row">
            <div className="eventName" style={{fontSize:"11px",color:"whitesmoke"}}>
              {eventName}
            </div>
            <div className="eventDate" style={{fontSize:"9px"}}>
              <FormatDate date={date.slice(0,10)}></FormatDate>
            </div>

          </div>
          <div className="row">
            <div className="eventCity" style={{fontSize:"9px"}}>
              <FaLocationDot />&nbsp;{cityName}
            </div>
            <div className="eventWeather" style={{fontSize:"9px"}}>
                <WeatherToDegree weather={weather}></WeatherToDegree>&nbsp;|<span>{Math.floor(distanceKm/100)}Km</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default Cards;