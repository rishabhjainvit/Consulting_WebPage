import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header'; // Adjust the path as per your folder structure
import Hero from './component/Hero';
import Overview from './component/Overview';
import Services from './component/Services';
import Footer from './component/Footer';
import RstElectricals from './Pages/RstElectricals';
import PowerSolutions from './Pages/PowerSolutions';
import MediaProduction from './Pages/MediaProduction';
import AutomationSolutions from './Pages/AutomationSolutions';
import About from './Pages/About';
import Venture from './Pages/Venture';
function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={appStyle}>
      <Router>
        {/* <Header /> */}

        {/* Only show Hero, Overview, and Services on the main page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Overview />
                <Services />
              </>
            }
          />
          {/* Add route for About page */}
          <Route path="/About" element={<About />} />
          <Route path="/Venture" element={<Venture />} />

          {/* Other routes for individual pages */}
          <Route path="/RstElectricals" element={<RstElectricals />} />
          <Route path="/PowerSolutions" element={<PowerSolutions />} />
          <Route path="/MediaProduction" element={<MediaProduction />} />
          <Route path="/AutomationSolutions" element={<AutomationSolutions />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
