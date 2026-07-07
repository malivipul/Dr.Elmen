import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
export const IMG_URL = import.meta.env.VITE_IMG_URL || "http://localhost:5001";

const api = axios.create({
  baseURL: API_URL,
});

// Helper to safely extract bilingual content
export const getBi = (field, lang) => {
  if (!field) return "";
  
  let result = "";
  if (typeof field === "string") {
    result = field;
  } else if (typeof field === "object" && !Array.isArray(field)) {
    const key = String(lang).toLowerCase(); // "en" or "de"
    result = field[key] ?? field["en"] ?? field["de"] ?? "";
  } else {
    result = String(field);
  }

  // Final safety check: if result is still an object (shouldn't happen with our schema)
  if (typeof result === "object") return "";

  // Replace non-breaking spaces (&nbsp; or Unicode \u00A0) with regular spaces.
  // This is crucial because some text editors insert &nbsp; between every word,
  // which prevents natural word-wrapping and breaks the UI layout.
  return String(result).replace(/&nbsp;|\u00A0/g, " ");
};

// Date formatter for German compliance (DD.MM.YYYY)
export const formatDate = (dateValue) => {
  if (!dateValue) return "";
  const date = new Date(dateValue);
  if (isNaN(date.getTime())) return dateValue;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

// --- CACHE ---
const cache = new Map();
export const getCached = (key) => cache.get(key);
export const setCached = (key, data) => cache.set(key, data);

// --- HERO ---
export const getHero = () => api.get("/hero/get");

// --- HOME ABOUT ---
export const getHomeAbout = () => api.get("/intro/get");

// --- LOGOS ---
export const getLogos = () => api.get("/logos/all");

// --- SPEAKER ---
export const getSpeaker = () => api.get("/speaker/get");

// --- AUTHOR ---
export const getAuthor = () => api.get("/author/get");

// --- BOOKS ---
export const getBookHeader = () => api.get("/books/header");
export const getBooks = () => api.get("/books/all");

// --- SERVICES / WORKSHOPS ---
export const getServiceHeader = () => api.get("/services/header/get");
export const getWorkshopsBanner = () => api.get("/workshops/get");
export const getServices = () => api.get("/services/all");
export const getServiceBySlug = (slug) => api.get(`/services/slug/${slug}`);

// --- BLOGS ---
export const getBlogHeader = () => api.get("/blogs/header/get");
export const getBlogBanner = () => api.get("/blogs/banner/get");
export const getBlogs = () => api.get("/blogs/all");
export const getBlogById = (id) => api.get(`/blogs/${id}`);
export const likeBlog = (id, data) => api.post(`/blogs/${id}/like`, data);
export const getBlogComments = (id) => api.get(`/blogs/${id}/comments`);
export const submitBlogComment = (id, data) => api.post(`/blogs/${id}/comment`, data);

// --- CONTACT ---
export const getContactBanner = () => api.get("/contact/banner/get");
export const addContact = (data) => api.post("/contact/add", data);

// --- SUBSCRIBERS ---
export const addSubscriber = (data) => api.post("/subscribers/add", data);
export const confirmSubscriber = (data) => api.put("/subscribers/confirm", data);
export const unsubscribeSubscriber = (data) => api.post("/subscribers/unsubscribe", data);

// --- ABOUT BANNER ---
export const getAboutBanner = () => api.get("/about/banner/get");

// --- ABOUT PROFILE ---
export const getAboutProfile = () => api.get("/about/profile/get");

// --- ABOUT EXPERTISE ---
export const getAboutExpertise = () => api.get("/about/expertise/get");

// --- ABOUT SECTORS ---
export const getAboutSectors = () => api.get("/about/sectors/get");

// --- ABOUT CTA ---
export const getAboutCTA = () => api.get("/about/cta/get");

// --- VITA BANNER ---
export const getVitaBanner = () => api.get("/vita/banner/get");

// --- AUTHOR PAGE BANNER ---
export const getAuthorBanner = () => api.get("/author-page/banner/get");

// --- VITA TIMELINE ---
export const getVitaTimeline = () => api.get("/vita/timeline/get");

// --- PROJECTS ---
export const getProjectHeader = () => api.get("/projects/header/get");
export const getProjects = () => api.get("/projects/all");
export const getProjectById = (id) => api.get(`/projects/${id}`);

// --- SETTINGS ---
export const getSettings = () => api.get("/settings/get");

// --- META ---
export const getMetaByPage = (page) => api.get(`/meta/${page}`);

// --- COOKIE CONSENT ---
export const saveCookieConsent = (data) => api.post("/v1/cookies/consent", data);
export const getCookieConsent = (visitorId) => api.get(`/v1/cookies/consent/${visitorId}`);
export const updateCookieConsent = (visitorId, data) => api.put(`/v1/cookies/consent/${visitorId}`, data);

export default api;
