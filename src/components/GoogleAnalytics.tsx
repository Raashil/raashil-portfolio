'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  const [isUSUser, setIsUSUser] = useState(false);

  useEffect(() => {
    // Function to get user's country using IP geolocation
    const checkUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIsUSUser(data.country_code === 'US');
      } catch (error) {
        console.error('Error fetching location:', error);
        // If we can't determine location, default to showing analytics
        setIsUSUser(true);
      }
    };

    checkUserLocation();
  }, []);

  if (!isUSUser) {
    return null; // Don't load analytics for non-US users
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
} 