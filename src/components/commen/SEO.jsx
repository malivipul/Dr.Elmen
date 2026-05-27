import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getMetaByPage, getBi, getCached, setCached } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const SEO = ({
  page,
  title: manualTitle,
  description: manualDesc,
  keywords: manualKeywords,
}) => {
  const { lang } = useLanguage();
  const cacheKey = `meta_${page}`;
  const cached = getCached(cacheKey);

  const [meta, setMeta] = useState(cached || null);

  useEffect(() => {
    if (!page) return;
    getMetaByPage(page)
      .then((res) => {
        if (res.data) {
          setMeta(res.data);
          setCached(cacheKey, res.data);
        }
      })
      .catch((err) => console.error(`Error fetching meta for ${page}:`, err));
  }, [page, cacheKey]);

  const title =
    manualTitle ||
    (meta?.title ? getBi(meta.title, lang) : "Dr. Raphael Edlmann");
  const description =
    manualDesc ||
    (meta?.description
      ? getBi(meta.description, lang)
      : "Interim Manager | AI, HR & Business Process Expert");
  const keywords =
    manualKeywords ||
    (meta?.keywords
      ? getBi(meta.keywords, lang)
      : "HR, AI, Management, Transformation");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Social */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
