import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Request from './pages/Request';
import DataCatelogue from './pages/DataCatelogue';
import Product from './pages/Product';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="max-h-screen  overflow-y-hidden">
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/request/:id" element={<Request />} />
            <Route path="/data-catelogue" element={<DataCatelogue />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/help/:id" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
