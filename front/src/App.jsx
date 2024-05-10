import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import of pages
import Home from './pages/Home';
import Leraku from './pages/Leraku';
import Masque from './pages/Masque';
import Personnage from './pages/Personnage';
import Boites from './pages/Boites';
import Expositions from './pages/Expositions';
import Contact from './pages/Contact';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';
import { TexturesProvider } from "./context/texturesProvider";
import { PlumiersProvider } from "./context/plumiersProvider";
import { MasquesProvider } from "./context/masquesProvider";
import { PersonnagesProvider } from "./context/personnagesProvider";
import { PersosProvider } from "./context/persosProvider";



function App() {
  return (
    <>
    <Router>
    <PlumiersProvider>
      <TexturesProvider>
        <MasquesProvider>
        <PersonnagesProvider>
        <PersosProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leraku" element={<Leraku />} />
            <Route path="/masque" element={<Masque />} />
            <Route path="/personnage" element={<Personnage />} />
            <Route path="/Boites" element={<Boites />} />
            <Route path="/Expositions" element={<Expositions />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="*" element={<p>Error 404</p>} />
        </Routes>
        <Footer />
        </PersosProvider>
        </PersonnagesProvider>
        </MasquesProvider>
      </TexturesProvider>
      </PlumiersProvider>
    </Router>
    </>
  )
}

export default App
