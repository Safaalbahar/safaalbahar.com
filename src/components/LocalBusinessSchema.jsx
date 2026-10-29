import React from 'react';
import { Helmet } from 'react-helmet';

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safa Al Bahar Trading Company",
    "description": "Premium Food Supplier and HORECA Distributor across Saudi Arabia.",
    "url": "https://safaalbahar.com",
    "logo": "https://safaalbahar.com/assets/safa-logo.jpg",
    "telephone": "+966559977206",
    "email": "sales@safaalbahar.com",
    "sameAs": [
      "https://www.instagram.com/safaalbahartrading?igsh=M2VmdXVpbzVwaHVk",
      "https://www.facebook.com/share/1HJVRsUe66/"
    ],
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "Safa Al Bahar Jeddah Head Office",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Sarwath - Al Kumra, As Sarawat",
          "addressLocality": "Jeddah",
          "postalCode": "22524",
          "addressCountry": "SA"
        },
        "url": "https://maps.app.goo.gl/qVixUXX4yj83iq3f7"
      },
      {
        "@type": "LocalBusiness",
        "name": "Safa Al Bahar Trading Company",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jeddah",
          "addressCountry": "SA"
        },
        "url": "https://maps.app.goo.gl/Pc86sXrjhpFUoeKU8"
      },
      {
        "@type": "LocalBusiness",
        "name": "Naqa Al Bahar Yanbu Branch",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Yanbu",
          "addressCountry": "SA"
        },
        "url": "https://maps.app.goo.gl/dxASnSy92ZAtnwQ36"
      },
      {
        "@type": "LocalBusiness",
        "name": "Naqa Al Bahar Madinah Branch",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Madinah",
          "addressCountry": "SA"
        },
        "url": "https://maps.app.goo.gl/pSgdH4L6vtNkgoJt8"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;