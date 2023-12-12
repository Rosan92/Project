import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import AboutUs from './components/about/AboutUs';
import Services from './components/services/Services';
import ContactUs from './components/contactus/ContactUs';
import Mission from './components/mission/Mission';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/about' element={ <AboutUs /> }></Route>
        <Route path='/services' element={ <Services /> }></Route>
        <Route path='/contact' element={ <ContactUs /> }></Route>
        <Route path='/mission' element={ <Mission /> }></Route>
        <Route path='/about' element={ <Testimonials /> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
