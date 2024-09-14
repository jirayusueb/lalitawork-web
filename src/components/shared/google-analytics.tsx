import config from '@/configs';
import { Partytown } from '@builder.io/partytown/react';
import Script from 'next/script';
import React from 'react';

const feature = config.features.googleAnalytics;

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    dataLayer: any;
  }
}

const GoogleAnalytics = () => {
  if (!feature.isEnabled) {
    return null;
  }

  const id = feature.propertyId;

  return (
    <>
      <Partytown debug={!config.app.isProduction} forward={['dataLayer.push', 'gtag']} />
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        type="text/partytown"
      />
      <Script strategy="worker" id="google-analytics" type="text/partytown">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag() {
            window.dataLayer.push(arguments);
          };
          window.gtag('js', new Date());
          window.gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
