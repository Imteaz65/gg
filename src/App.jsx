import FetchEvent from "./Components/API_Context"
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import RecommendedShows from "./Components/RecommendedShows"
import UpcomingEvents from "./Components/UpcomingEvents"

function App() {

  return (
    <>
      <FetchEvent>
        <Header></Header>
        <Banner></Banner>
        <RecommendedShows></RecommendedShows>
        <UpcomingEvents></UpcomingEvents>
      </FetchEvent>
      
    </>
  )
}

export default App