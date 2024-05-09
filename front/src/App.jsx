import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import of pages
import Home from './pages/Home';
import Leraku from './pages/Leraku';
import Masque from './pages/Masque';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';
import { TexturesProvider } from "./context/texturesProvider";
import { PlumiersProvider } from "./context/plumiersProvider";
import { MasquesProvider } from "./context/masquesProvider";


function App() {
  return (
    <>
    <Router>
    <PlumiersProvider>
      <TexturesProvider>
        <MasquesProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leraku" element={<Leraku />} />
            <Route path="/masque" element={<Masque />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="*" element={<p>Error 404</p>} />
        </Routes>
        <Footer />
        </MasquesProvider>
      </TexturesProvider>
      </PlumiersProvider>
    </Router>
    </>
  )
}

export default App
