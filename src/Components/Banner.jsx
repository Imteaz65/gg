import {useEffect, useState } from "react";
import RecommendedShows from "./RecommendedShows";

function Banner(){

  const [isMobile,setMobile]=useState('false');
  const word="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque nisi voluptates ex iure perferendis accusamus ipsum laboriosam totam quidem ea accusantium pariatur hic commodi beatae, ducimus dolore in.";

  useEffect(function(){
    window.addEventListener('resize',function(e){
      // console.log(e,"resize")    
      
      checkIsMobile()
   })
  },[])
 
  function checkIsMobile(){
    const mq=window.matchMedia('(max-width:768px)');
    // console.log("matched",mq.matches)
    setMobile(mq.matches)
  }
  return (
    <>
      {/* <img className="banner" src="../../src/assets/photos/Banner.svg" alt="" style={{width:"100%"}} /> */}
      <div className="backgroundImage" style={{textAlign:"center"}}>
        <div className="heading">
          Discover Exciting Events Happening  Near You - Stay tuned for Updates!
        </div>
        
        {isMobile?<p style={{color:"white"}}>{word.slice(0,100)}</p>:<p>{word}</p>}

        
        
      </div>
  
    </>
  )
}
export default Banner;