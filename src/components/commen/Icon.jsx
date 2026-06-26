import { createElement } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegCalendar,
  FaRegClock,
  FaRegEnvelope,
  FaRegFileLines,
  FaRegHeart,
  FaRegUser,
  FaRocket,
  FaUser,
  FaWhatsapp,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";
import * as Fa6Icons from "react-icons/fa6";

const icons = {
  "arrow-left": FaArrowLeft,
  "arrow-right": FaArrowRight,
  calendar: FaCalendar,
  "chevron-left": FaChevronLeft,
  "chevron-right": FaChevronRight,
  download: FaDownload,
  envelope: FaEnvelope,
  facebook: FaFacebookF,
  heart: FaHeart,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  phone: FaPhone,
  "reg-calendar": FaRegCalendar,
  "reg-clock": FaRegClock,
  "reg-envelope": FaRegEnvelope,
  "reg-file-lines": FaRegFileLines,
  "reg-heart": FaRegHeart,
  "reg-user": FaRegUser,
  rocket: FaRocket,
  user: FaUser,
  whatsapp: FaWhatsapp,
  x: FaXTwitter,
  xmark: FaXmark,
  "fa-arrow-left": FaArrowLeft,
  "fa-arrow-right": FaArrowRight,
  "fa-calendar": FaCalendar,
  "fa-download": FaDownload,
  "fa-envelope": FaEnvelope,
  "fa-facebook-f": FaFacebookF,
  "fa-heart": FaHeart,
  "fa-instagram": FaInstagram,
  "fa-linkedin-in": FaLinkedinIn,
  "fa-phone": FaPhone,
  "fa-rocket": FaRocket,
  "fa-user": FaUser,
  "fa-whatsapp": FaWhatsapp,
  "fa-x-twitter": FaXTwitter,
  "fa-xmark": FaXmark,
};

const toPascalCase = (value) =>
  value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");

const getIconComponent = (name) => {
  if (!name) return FaArrowRight;

  const normalizedName = String(name).trim();
  if (icons[normalizedName]) return icons[normalizedName];
  if (Fa6Icons[normalizedName]) return Fa6Icons[normalizedName];

  const iconClass = normalizedName
    .split(/\s+/)
    .reverse()
    .find((part) => part.startsWith("fa-"));

  const iconKey = iconClass || normalizedName;
  if (icons[iconKey]) return icons[iconKey];

  const componentName = `Fa${toPascalCase(iconKey.replace(/^fa-/, ""))}`;
  return Fa6Icons[componentName] || FaArrowRight;
};

const Icon = ({ name, className = "", ...props }) => {
  return createElement(getIconComponent(name), {
    "aria-hidden": "true",
    focusable: "false",
    className,
    ...props,
  });
};

export default Icon;
