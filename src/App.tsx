
import React from 'react';
import { Routes, Route } from 'react-router-dom';




import './scss/app.scss';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import FullPiza from './Pages/FullPizza'


// export const SearchContext = React.createContext();



function App() {

  return (

    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPiza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
