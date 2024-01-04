


import Home from './pages/Home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import DetailsPage from './pages/Details/DetailsPage';
import { Layout } from './Layout/Layout';
import { useState } from 'react';
import { FavouritesProvider, useFavourites } from './contexts/FavouritesContext';



function App() {



  return (
    <FavouritesProvider>
      <Router>

        <Routes>
          <Route path='/' element={<Layout  />}>

            <Route index element={<Home />} />
            <Route path="/details/:id" element={<DetailsPage />} />

          </Route>
        </Routes>

      </Router>
    </FavouritesProvider>
  );
}



export default App;
