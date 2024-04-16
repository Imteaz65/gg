import { createContext, useEffect, useReducer, useRef } from "react";
import axios from "axios";

export const EventsContext = createContext({});

const data = {
  location: "searching",

  RecommendedEvents: [],
  isRecommendedEventLoading: true,

  events: [],
  isEventLoading: true,
  totalPages: 0,
  currentPage: 1,
};

function reducer(initialData, action) {
  if (action.type === "RECOMMENDED_EVENTS") {
    return {
      ...initialData,
      RecommendedEvents: action.payload.recommendedEvents,
      isRecommendedEventLoading: false,
    };
  } else if (action.type === "EVENTS") {
    // console.log("EVENTS");
    return {
      ...initialData,
      events: action.payload.events,

      totalPages: action.payload.totalPages,
      isEventLoading: false,
    };
  } 
  else if (action.type === "LOAD_NEXT_DATA") {
    return {
      ...initialData,
      events: [...initialData.events, ...action.payload.events],

      totalPages: action.payload.totalPages,
      isEventLoading: false,
    };
  } else if (action.type === "LOCATION_FETCHED") {
    return {
      ...initialData,
      location: action.payload.location,
      country_name: action.payload.country_name,
    };
  } else if (action.type === "ANOTHER_REQUEST") {
    return {
      ...initialData,
      currentPage: initialData.currentPage + 1,
      isEventLoading: true,
    };
  } else {
    return { ...initialData };
  }
}

function FetchEvent({ children }) {
  const [initialData, dispatch] = useReducer(reducer, data);
  const k = useRef(false);
  const refCurrentPage=useRef(initialData.currentPage);
  const initialScrollPosition=useRef(0);

  const getRecommendedShows = async () => {
    const res = await axios.get(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    );

    dispatch({
      type: "RECOMMENDED_EVENTS",
      payload: { recommendedEvents: res.data },
    });
  };

  // fetching Events
  const getEvents = async (load = "No") => {
    try {
      const res = await axios.get(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${initialData.currentPage}&type=upcoming`
      );
      if (load === "No") {
        dispatch({
          type: "EVENTS",
          payload: {
            events: res.data.events,
            page: res.data.page,
            totalPages: res.data.totalPages,
          },
        });
      } else if (load === "Yes") {

        dispatch({
          type: "LOAD_NEXT_DATA",
          payload: {
            events: res.data.events,
            page: res.data.page,
            totalPages: res.data.totalPages,
          },
        });
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  // to fetch location of the user
  function getLocation() {
    fetch("https://ipapi.co/json")
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {

        dispatch({
          type: "LOCATION_FETCHED",
          payload: { location: data.city, country_name: data.country_name },
        });
      });
  }

  let canScroll = false;
  // to request new Page data
  const handleInfiniteScroll = async () => {
    // console.log("height of the scroll", document.documentElement.scrollHeight);
    // console.log("innerHeight ", window.innerHeight);
    // console.log("scroll height", document.documentElement.scrollTop);

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        !canScroll && refCurrentPage.current<=4
      ) {
        canScroll = true;

        setTimeout(function () {
          canScroll = false;
        },2000);

        k.current = true;

        // console.log(document.documentElement.scrollTop,"----------------------------------")
        initialScrollPosition.current=document.documentElement.scrollTop;
        dispatch({ type: "ANOTHER_REQUEST" });
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(function () {
    getLocation();
    getRecommendedShows();

    window.scrollTo(0, 0);
  }, []);

  useEffect(
    function () {
      if (k.current === true) {

        getEvents("Yes");
        refCurrentPage.current=initialData.currentPage;
        
      } else {
        getEvents();
      }
    },
    [initialData.currentPage]
  );

  useEffect(function () {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  setTimeout(function(){
    window.scrollTo(0,initialScrollPosition.current);
  },500)
  
  // console.log("initalscrolPosition===",initialScrollPosition.current)
  return (
    <>
      <EventsContext.Provider value={{ ...initialData }}>
        {children}
      </EventsContext.Provider>
    </>
  );
}
export default FetchEvent;
