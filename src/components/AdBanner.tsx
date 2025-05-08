"use client";

import React, { useEffect, useRef } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Asegurarse de que el script de AdSense esté cargado
    if (typeof window !== "undefined") {
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        
        // Esperar a que el contenedor tenga dimensiones
        if (adRef.current && adRef.current.offsetWidth > 0) {
          adsbygoogle.push({});
        } else {
          // Si el contenedor aún no tiene dimensiones, intentar nuevamente después
          const observer = new ResizeObserver((entries) => {
            if (entries[0].contentRect.width > 0) {
              adsbygoogle.push({});
              observer.disconnect();
            }
          });
          
          if (adRef.current) {
            observer.observe(adRef.current);
          }
        }
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div ref={adRef} className="w-full min-h-[100px]">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          minHeight: "100px",
        }}
        data-ad-client="ca-pub-7018337169293061"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};

export default AdBanner;