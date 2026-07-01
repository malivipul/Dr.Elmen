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
const SubscribeConfirm = lazy(() => import("./pages/SubscribeConfirm"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));

/* HASH SCROLL */
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let scrollAttempts = 0;
    const maxAttempts = 50; // Try for up to 5 seconds
    const headerOffset = 100;

    const performScroll = () => {
      const element = document.querySelector(hash);
      if (element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.pageYOffset;
        const targetPosition = absoluteTop - headerOffset;

        // If we are already within 5px of the target, stop attempting
        if (Math.abs(window.pageYOffset - targetPosition) < 5) {
          return true;
        }

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
      return false;
    };

    const interval = setInterval(() => {
      scrollAttempts++;
      const finished = performScroll();
      
      if (finished || scrollAttempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [hash, pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const disableContextMenu = (event) => event.preventDefault();

    document.addEventListener("contextmenu", disableContextMenu);
    return () => document.removeEventListener("contextmenu", disableContextMenu);
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollToHash />

      {/* Header */}
      <Header />

      {/* Routes */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        }
      >
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
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/subscribe-confirm" element={<SubscribeConfirm />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />

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
