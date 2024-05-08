import AccordianApp from './Accordian/AccordianApp'
import BrithDayList from './BrithDayList/BrithDayList'
import DinnerMenuApp from './DinnerMenu/DinnerMenuApp'
import ListAddApp from './ListAdd/ListAddApp'
import LoremIpsum from './LoremIpsum/LoremIpsum'
import Review from './Review/Review'
import TabsAPP from './TabsAPP/TabsAPP'
import TourApp from './TourApp/TourApp'
import NavbarApp from './Navbar/NavbarApp'
import CounterApp from './Counter/CounterApp'
import EmailAndPassword from './EmailAndPassword/EmailAndPassword'
import SingleApp from './SinglePage/SingleApp'

// import SliderApp from './SliderAuto/SliderApp'
// import BackgroundChanger from './BackgroundChanger/BackgroundChanger'
function App() {

  return (
    <div id="app">
      <BrithDayList/>
      <TourApp/>
      <Review/>
      <AccordianApp/>
      <DinnerMenuApp/>
      <TabsAPP/>
      <LoremIpsum/>
      <ListAddApp/>
      
      <NavbarApp/> 
      <CounterApp/>
      <EmailAndPassword/>
      <SingleApp/>
      {/* <BackgroundChanger/> */}
      {/* <SliderApp/> */}
      
    </div>
  )
}

export default App
