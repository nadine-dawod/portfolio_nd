import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";


const App = () => {
  return (
    <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Work" element={<Work />} />
        </Routes>

        <Footer />
      
    </BrowserRouter>
  );
};

export default App;
