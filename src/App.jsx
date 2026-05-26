import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import Header from "./components/commen/Header";
import Footer from "./components/commen/Footer";
import ScrollToTop from "./components/commen/ScrollToTop";

// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About-Me"));
const Vita = lazy(() => import("./pages/Vita"));
const Author = lazy(() => import("./pages/Author"));
const Insights = lazy(() => import("./pages/insights"));
const Projects = lazy(() => import("./pages/Projects"));
const Workshops = lazy(() => import("./pages/Workshops"));
const WorkshopsDetails = lazy(() => import("./pages/Workshops-details"));
const BlogDetails = lazy(() => import("./pages/blog-details"));
const Contact = lazy(() => import("./pages/Contact"));
const Imprint = lazy(() => import("./pages/Imprint"));
const PrivacyPolicy = lazy(() => import("./pages/Privacy-policy"));


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
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vita" element={<Vita />} />
          <Route path="/author" element={<Author />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route
            path="/workshops-details/:slug"
            element={<WorkshopsDetails />}
          />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;