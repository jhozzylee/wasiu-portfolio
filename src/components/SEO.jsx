import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
  const siteTitle = "Wasiu Ayoola";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Helping Businesses Thrive Through People & Process Excellence. Strategic EA & HR solutions.";
  
  // FIX: Hard-code your actual live domain here. 
  // Use your Vercel URL (e.g., https://wasiu-portfolio.vercel.app) 
  // or your custom domain if you have one linked.
  const productionUrl = "https://wasiu-portfolio-five.vercel.app"; 

  const defaultImage = `${productionUrl}/wasiu-ayoola-executive-assistant.jpg`;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : productionUrl);

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph / LinkedIn / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}