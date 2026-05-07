import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/commen/Header";
import Footer from "./components/commen/Footer";
import ScrollToTop from "./components/commen/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About-Me";
import Vita from "./pages/Vita";
import Author from "./pages/Author";
import Insights from "./pages/insights";
import Projects from "./pages/Projects";
import Workshops from "./pages/Workshops";
import WorkshopsDetails from "./pages/Workshops-details";
import BlogDetails from "./pages/blog-details";
import Contact from "./pages/Contact";

/* HASH SCROLL */
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />

      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vita" element={<Vita />} />
        <Route path="/author" element={<Author />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/contact" element={<Contact />} />

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