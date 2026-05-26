import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
export const IMG_URL = import.meta.env.VITE_IMG_URL || "http://localhost:5001";

const api = axios.create({
  baseURL: API_URL,
});

// Helper to safely extract bilingual content
export const getBi = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  if (typeof field === "object") {
    const key = String(lang).toLowerCase(); // "en" or "de"
    if (field[key] !== undefined) return field[key];
    if (field["en"] !== undefined) return field["en"];
    return "";
  }
  return String(field);
};

// --- HERO ---
export const getHero = () => api.get("/home/hero/get");

// --- HOME ABOUT ---
export const getHomeAbout = () => api.get("/home/about/get");

// --- LOGOS ---
export const getLogos = () => api.get("/home/logos/all");

// --- SPEAKER ---
export const getSpeaker = () => api.get("/home/speaker/get");

// --- AUTHOR ---
export const getAuthor = () => api.get("/home/author/get");

// --- BOOKS ---
export const getBooks = () => api.get("/home/books/all");

// --- SERVICES / WORKSHOPS ---
export const getServiceHeader = () => api.get("/home/services/header/get");
export const getServices = () => api.get("/home/services/all");
export const getServiceBySlug = (slug) => api.get(`/home/services/slug/${slug}`);

// --- BLOGS ---
export const getBlogs = () => api.get("/blogs/all");
export const getBlogById = (id) => api.get(`/blogs/${id}`);

// --- CONTACT ---
export const addContact = (data) => api.post("/contact/add", data);

// --- SUBSCRIBERS ---
export const addSubscriber = (data) => api.post("/subscribers/add", data);

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

// --- VITA TIMELINE ---
export const getVitaTimeline = () => api.get("/vita/timeline/get");

// --- PROJECTS ---
export const getProjectHeader = () => api.get("/projects/header/get");
export const getProjects = () => api.get("/projects/all");
export const getProjectById = (id) => api.get(`/projects/${id}`);

// --- SETTINGS ---
export const getSettings = () => api.get("/settings/get");

export default api;
