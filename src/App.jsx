import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Programs from "./assets/pages/Programs";
import Services from "./assets/pages/Services";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="home">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
