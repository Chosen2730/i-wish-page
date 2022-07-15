import Nav from "./components/nav";
import { useState } from "react";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";
import Error from "./pages/error";
function App() {
  const [id, setId] = useState("");
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
