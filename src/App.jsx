// import HomePage from "./components/HomePage";
// import NavBar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Navigate } from "react-router-dom"
import NewPage from "./components/NewPage";
import "./App.css"
import LandingPage from "./view/Landing-page/LandingPage";
import ExpandedPage from "./view/Expanded-page/ExpandedPage";
import ContactPage from "./view/Contact-page/ContactPage";
import AboutPage from "./view/About-page/AboutPage";
import DiscoverPage from "./view/Discover-page/DiscoverPage";
import FindPage from "./view/Find-Page/FindPage";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" exact  element={ <LandingPage/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="discover" element={ <DiscoverPage/> } />
        <Route path="find" element={ <FindPage/> } />
        <Route path="contact" element={ <ContactPage/> } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

