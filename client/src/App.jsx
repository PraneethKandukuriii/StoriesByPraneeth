
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

