import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import of pages
import Home from './pages/Home';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import { ArtProvider } from "./context/artProvider";


function App() {
  return (
    <>
    <Router>
      <ArtProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/article/:id" element={<Article/>} />
            <Route path="*" element={<p>Error 404</p>} />
        </Routes>
        <Footer />
      </ArtProvider>
    </Router>
    </>
  )
}

export default App
