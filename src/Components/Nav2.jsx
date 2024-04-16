import { useContext } from "react";
import { EventsContext } from "./API_Context";
import { FaLocationDot } from "react-icons/fa6";


function Nav2(){
  const {location,country_name}=useContext(EventsContext);
  return(
    <>
      <nav className="innerNav2">
        <div className="nav2Section1">
          <span className="locationFont pointer" style={{fontSize:"14px"}}><FaLocationDot />
          </span>&nbsp;
          <span className="pointer" style={{fontSize:"14px"}}>{location},{country_name} &nbsp;</span>
        </div>
        <div className="nav2Section2">
          <ul>
            <li>Live Shows</li>
            <li>Streams</li>
            <li>Movies</li>
            <li>Plays</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Activities</li>

          </ul>
        </div>
      </nav>
    </>
  )
}
export default Nav2;