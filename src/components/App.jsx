import './App.css';
import Navbar from './Navbar';
import Herosection from './Herosection';
import Heading from './Heading';
import Cards from './Cards';
import Services from './Services';
import Onservices from './Onservices';
import OnservHeading from './OnservHeading';
import Carousel from './Carousel';
import TipsAndTricksHeading from './TipsAndTricksHeading';
import TipsAndTricks from './TipsAndTricks';
import ContactUs from './ContactUs';

function App() {
   

  return (<>
    <Navbar title="Kun Techs"/>
    <Herosection/>
    <Heading head="What We Will We Do For Your Business"/>
    <div className="cards-cont">
    <Cards/>
    </div>
    <Services headLine="Steps To Build A Successfull Digital Product" />
    <OnservHeading title="Generating New Customers Via Online Mode"/>
    <Onservices/>
    <Carousel/>
    <TipsAndTricksHeading title="Tips and Tricks From Experts"/>
    <TipsAndTricks />
    {/* <ContactUs/> */}
    </>
  );
}

export default App;
