
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Details from './pages/Details';
import LoadDetails from './controller/HttpDetails';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<LoadDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}



export default App;
