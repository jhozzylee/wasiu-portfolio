import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url, keywords }) {
  const siteTitle = "Wasiu Ayoola";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Helping Businesses Thrive Through People & Process Excellence. Strategic EA & HR solutions.";
  const productionUrl = "https://wasiu-portfolio-five.vercel.app";
  const defaultImage = `${productionUrl}/wasiu-ayoola-executive-assistant.jpg`;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : productionUrl);

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / LinkedIn / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content="en_US" />
      {/* <meta property="fb:app_id" content="YOUR_FB_APP_ID" /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
