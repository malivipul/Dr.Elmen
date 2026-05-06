import { Routes, Route } from "react-router-dom";

import Header from "./components/commen/Header";
import Footer from "./components/commen/Footer";
import ScrollToTop from "./components/commen/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About-Me"; // ✅ new page
import Vita from "./pages/Vita"; // ✅ new page
import Author from "./pages/Author"; // ✅ new page

function App() {
  return (
    <>
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* ✅ added */}
        <Route path="/vita" element={<Vita />} /> {/* ✅ added */}
         <Route path="/author" element={<Author />} /> {/* ✅ added */}
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;