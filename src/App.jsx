import { Routes, Route } from "react-router-dom";

import Header from "./components/commen/Header";
import Footer from "./components/commen/Footer";
import ScrollToTop from "./components/commen/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About-Me"; // ✅ new page
import Vita from "./pages/Vita"; // ✅ new page
import Author from "./pages/Author"; // ✅ new page
import Insights from "./pages/insights"; // ✅ new page
// BLOG DETAILS PAGE
import BlogDetails from "./pages/blog-details";

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
          <Route path="/insights" element={<Insights />} /> {/* ✅ added */}
          <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;