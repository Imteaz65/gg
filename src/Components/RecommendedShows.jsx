import { useContext,memo } from "react";
import Cards from "./Cards";
import { EventsContext } from "./API_Context";
import Spinner from "./Spinner";
import { FaArrowRight } from "react-icons/fa";
import img_1 from '../assets/photos/img_1.svg'
import img_2 from '../assets/photos/img_2.svg'
import img_3 from '../assets/photos/img_3.svg'
import img_4 from '../assets/photos/img_4.svg'
import img_5 from '../assets/photos/img_5.svg'
import img_6 from '../assets/photos/img_6.svg'
import img_7 from '../assets/photos/img_7.svg'
import img_8 from '../assets/photos/img_8.svg'
import img_9 from '../assets/photos/img_9.svg'
import img_10 from '../assets/photos/img_10.svg'



function RecommendedShows(){
  const {isRecommendedEventLoading,RecommendedEvents}=useContext(EventsContext);
  const imgPath=[img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10]

  if(isRecommendedEventLoading){
     return <Spinner></Spinner>
  }
  return(
    <>
      
      <div className="parentContainer">
        <div className="RecommendedShowsContainer">

            <div className="RecommendedShowsContainerHeading flex space-between">
              <div className="flex alignItemCenter " style={{gap:"10px",marginBottom:"10px"}} >
                <h3 className="pointer" style={{marginLeft:"13px"}}>Recommended Shows</h3>
                <FaArrowRight />
                
              </div> 
              <p className="pointer" style={{marginRight:"5px",textDecoration:"underline"}}>see all</p>
            </div>
            
            <div className="card_Container">
              {
                RecommendedEvents.events.map(function(element,index){
                  return <Cards path={imgPath[index]} RecommendedEvents={element} key={index} isRecommendedEventLoading={isRecommendedEventLoading} imageCount={index}></Cards>
                })
              }
            </div>
            
        </div>
      </div>
      
      
    </>
  )
}
export default memo(RecommendedShows);