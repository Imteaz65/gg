import { useContext } from "react";
import { EventsContext } from "./API_Context";
import RectangleCards from "./RectangleCards";
import Spinner from "./Spinner";
import { FaArrowRight } from "react-icons/fa";


function UpcomingEvents(){

  const {events,totalPages,currentPage,isEventLoading,isRecommendedEventLoading}=useContext(EventsContext);
  
  if(isEventLoading && isRecommendedEventLoading){
    return <Spinner></Spinner>
  }
  
  return(
    <>
      <div className="flex alignItemCenter headingFontColor" style={{gap:"5px",padding: "0px 12%",marginBottom:"10px"}}  >

        <h2 className="pointer">UpcomingEvents</h2>
        <FaArrowRight />

      </div>

      <div className="RectangleCardsContainer">
        {
          events.map(function(element,index){
           return  <RectangleCards event={element} currentPage={currentPage} totalPages={totalPages} key={index} ></RectangleCards>
          })
        }
      </div>
      {isEventLoading && currentPage<=5 && <Spinner></Spinner>}
      {currentPage===5 && !isEventLoading && <h2 className="flex justify-center mT">no more data</h2>}

    </>
  )
}
export default UpcomingEvents;