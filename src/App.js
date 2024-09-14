import "./styles/style.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import Skills from "./pages/Skills"

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
