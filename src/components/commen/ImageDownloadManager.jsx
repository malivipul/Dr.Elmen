import { useEffect } from "react";

const INVALID_FILENAME_CHARS = /[<>:"/\\|?*\x00-\x1F]/g;

const sanitizeFilename = (value) => {
  const cleaned = String(value || "")
    .trim()
    .replace(INVALID_FILENAME_CHARS, "-")
    .replace(/\s+/g, " ")
    .replace(/\.+$/g, "");

  return cleaned || "image";
};

const getExtensionFromUrl = (src) => {
  if (!src || src.startsWith("blob:")) return "";

  if (src.startsWith("data:")) {
    const mime = src.slice(5, src.indexOf(";"));
    const subtype = mime.split("/")[1];
    return subtype ? `.${subtype}` : "";
  }

  try {
    const url = new URL(src, window.location.href);
    const match = url.pathname.match(/\.([a-z0-9]+)$/i);
    return match ? `.${match[1]}` : "";
  } catch {
    return "";
  }
};

const downloadBlob = (blob, filename) => {
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
};

const downloadImage = async (img) => {
  const src = img.currentSrc || img.src;
  const altText = sanitizeFilename(img.getAttribute("alt") || img.title || "image");
  const extensionFromSource = getExtensionFromUrl(src);
  const fallbackFilename = `${altText}${extensionFromSource || ""}`;

  try {
    const response = await fetch(src, { mode: "cors" });
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);

    const blob = await response.blob();
    const blobType = blob.type || "";
    const blobExtension = blobType.includes("/")
      ? `.${blobType.split("/")[1]}`
      : "";

    downloadBlob(blob, `${altText}${blobExtension || extensionFromSource || ""}`);
    return;
  } catch {
    const anchor = document.createElement("a");
    anchor.href = src;
    anchor.download = fallbackFilename;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }
};

const ImageDownloadManager = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      const target = event.target;
      const img =
        target instanceof HTMLImageElement
          ? target
          : target?.closest?.("img");

      if (!img) return;

      event.preventDefault();
      downloadImage(img);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return null;
};

export default ImageDownloadManager;
