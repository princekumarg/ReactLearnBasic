import AccordianApp from './Accordian/AccordianApp'
import BrithDayList from './BrithDayList/BrithDayList'
import DinnerMenuApp from './DinnerMenu/DinnerMenuApp'
import ListAddApp from './ListAdd/ListAddApp'
import LoremIpsum from './LoremIpsum/LoremIpsum'
import Review from './Review/Review'
import TabsAPP from './TabsAPP/TabsAPP'
import TourApp from './TourApp/TourApp'
import NavbarApp from './Navbar/NavbarApp'
// import SliderApp from './SliderAuto/SliderApp'
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
      {/* <SliderApp/> */}
      
    </div>
  )
}

export default App
