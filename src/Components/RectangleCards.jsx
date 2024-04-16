import { FaLocationDot } from "react-icons/fa6";
import WeatherToDegree from "./WeatherToDegree";
import FormatDate from "./FormatDate";

function RectangleCards({event,currentPage,totalPages}){

  // console.log("rectCards")
  const { eventName, cityName, date, distanceKm, imgUrl, weather } =event;

  
  const firstPart = imgUrl.split("file/d/");
  const secondpath = firstPart[1].replace("/view", "");
  const path = firstPart[0] + "thumbnail?id=" + secondpath;
  // console.log("imageURLLLS",imgUrl)
  return (
    <>
      <div className="card pointer">
        <img src={path} alt="noImage" />

        <div className="eventDate">
          <div className="d" >
            <div className="dateText">
              <FormatDate date={date.slice(0,10)}></FormatDate>
            </div>
          </div>
          
        </div>

        <div className="cardTitle fontColor">
          <h5 className="headingFontColor">{eventName}</h5>
          <div className="eventInfos">
            <div className="row">
              <div className="eventCity">
                <FaLocationDot />&nbsp;{cityName}
              </div>
              <div className="eventWeather">
                  <WeatherToDegree weather={weather}></WeatherToDegree>&nbsp;|<span>{Math.floor(distanceKm/100)}Km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RectangleCards;



{/* <img src="https://drive.google.com/uc?export=view&id=1DJDmufd4dZw--32HpuAxNSfPJqqHa6Pq&sz" alt="Your Image"/> */}

  // const splitArray=imgUrl.split('file/d/');
  // console.log("splitArray",splitArray)
  // const replacesString=splitArray[1].replace("/view","");
  // console.log(replacesString,"replaces");

  // const newUpdatedPath="https://drive.google.com/uc?id="+replacesString;
  // console.log("new path",newUpdatedPath)