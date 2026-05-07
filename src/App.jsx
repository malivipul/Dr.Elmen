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
import Projects from "./pages/Projects"; // ✅ new page
import Workshops from "./pages/Workshops"; // ✅ new page
import WorkshopsDetails from "./pages/Workshops-details"; // ✅ new page
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
        <Route path="/projects" element={<Projects />} /> {/* ✅ added */}
        <Route path="/workshops" element={<Workshops />} /> {/* ✅ added */}
        <Route
          path="/workshops-details/:slug"
          element={<WorkshopsDetails />}
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;