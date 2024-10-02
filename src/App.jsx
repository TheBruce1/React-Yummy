
import './App.css'
import About from './Components/About';
import Booking from './Components/Booking';
import Chefs from './Components/Chefs';
import ChooseContent from './Components/ChooseContent';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import Stats from './Components/Stats';

function App() {

  // NAVBAR DATA 

  let logo = "Yummy ";
  let navLink1 = "Home";
  let navLink2 = "About";
  let navLink3 = "Menu";
  let navLink4 = "Events";
  let navLink5 = "Chefs";
  let navLink6 = "Gallery";
  let navLink7 = "Contact";


  // HERO SECTION DATA 

  let h11 = "Enjoy Your Healthy";
  let h12 = "Delicious Food"
  let p1 = "We are team of talented designers making websites with Bootstrap";


  // ABOUT SECTION DATA 

  let aboutTitle = "ABOUT US";
  let aboutHeading1 = "LEARN MORE";
  let aboutHeading2 = "ABOUT US";

  let aboutPara1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  let aboutList1 = "Ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  let aboutList2 = "Duis aute irure dolor in reprehenderit in voluptate velit.";
  let aboutList3 = "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.";
  let aboutPara2 = "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident";
  let aboutContact = "+1 5589 55488 55";


  // CHOOSE SECTION 

  let chooseh3 = "Why Choose Yummy";
  let choosePara1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.";
  let chooseh41 = "Corporis voluptates officia eiusmod";
  let choosePara2 = "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip";
  let chooseh42 = "Ullamco laboris ladore lore pan";
  let choosePara3 = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt";
  let chooseh43 = "Labore consequatur incidid dolore";
  let choosePara4 = "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere";


  // STATS SECTION 

  let stata = 232;
  let statb = 521;
  let statc = 1453;
  let statd = 32;

  let stat1 = "Clients";
  let stat2 = "Projects";
  let stat3 = "Hours Of Support";
  let stat4 = "Workers";


  // CHEFS SECTION 

  let chefsTitle = "CHEFS";
  let chefsh31 = "OUR";
  let chefsh32 = "PROFESSIONAL CHEFS";


  let name1 = "Walter White";
  let position1 = "Master Chef";
  let description1 = "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.";

  let name2 = "Sarah Johnson";
  let position2 = "Patissier";
  let description2 = "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.";

  let name3 = "William Anderson";
  let position3 = "Cook";
  let description3 = "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.";


  // BOOKING SECTION 

  let bookingTitile = "BOOK A TABLE";
  let bookingh31 = "BOOK YOUR ";
  let bookingh32 = "STAY WITH US";


  // FOOTER SECTION 

  let fTitle1 = "Address";
  let fData11 = "A108 Adam Street";
  let fData12 = " New York, NY 535022";

  let fTitle2 = "Contact";
  let fData21 = "Phone: +1 5589 55488 55";
  let fData22 = "Email: info@example.com";
  
  let fTitle3 = "Opening Hours";
  let fData31 = " 11AM - 23PM";
  let fData32 = " Closed";


  return (
    <>
      <Navbar myLogo={logo} homeLink={navLink1} aboutLink={navLink2} menuLink={navLink3} eventLink={navLink4} chefsLink={navLink5} galleryLink={navLink6} contactLink={navLink7} />
      <Hero heading1={h11} heading2={h12} para={p1} />
      <About title={aboutTitle} heading1={aboutHeading1} heading2={aboutHeading2} para1={aboutPara1} item1={aboutList1} item2={aboutList2} item3={aboutList3} para2={aboutPara2} contact={aboutContact} />
      <ChooseContent chooseHeading={chooseh3} para1={choosePara1} item1Heading={chooseh41} item1Para={choosePara2} item2Heading={chooseh42} item2Para={choosePara3} item3Heading={chooseh43} item3Para={choosePara4} />
      <Stats statClients={stata} clients={stat1} statProjects={statb} projects={stat2} statHours={statc} hours={stat3} statWorkers={statd} workers={stat4} />
      <Chefs title={chefsTitle} heading1={chefsh31} heading2={chefsh32} chef1N={name1} chef2N={name2} chef3N={name3} chef1P={position2} chef2P={position2} chef3P={position3} chef1D={description1} chef2D={description2} chef3D={description3} />
      <Booking title={bookingTitile} heading1={bookingh31} heading2={bookingh32} />
      <ContactUs />
      <Footer addressTitle={fTitle1} addressLine1={fData11} addressLine2={fData12} contactTitle={fTitle2} contactPhone={fData21} contactEmail={fData22} bookHours={fTitle3} weekHours={fData31} offHours={fData32}/>
    </>
  )
}

export default App;
