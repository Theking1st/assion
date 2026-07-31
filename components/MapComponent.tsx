"use client";

import { useEffect, useRef, useState } from "react";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function MapComponent({ latitude, longitude, title }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapRef.current || mapInstanceRef.current) return;

    const loadLeaflet = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (!mapRef.current) return;

      // Initialize the map
      const map = L.map(mapRef.current).setView([latitude, longitude], 15);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Create custom icon
      const customIcon = L.divIcon({
        html: `
          <div style="
            background-color: #e11d48;
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-weight: bold;
              font-size: 14px;
            ">A</div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Add marker
      const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
      
      // Add popup
      marker.bindPopup(`
        <div style="font-family: sans-serif; padding: 5px;">
          <strong>${title}</strong><br>
          <small>Camp SIC Bornouans, Garoua</small>
        </div>
      `).openPopup();

      mapInstanceRef.current = map;

      return () => {
        map.remove();
        mapInstanceRef.current = null;
      };
    };

    loadLeaflet();
  }, [isClient, latitude, longitude, title]);

  if (!isClient) {
    return (
      <div
        className="w-full h-full min-h-100 bg-gray-200 flex items-center justify-center"
        style={{ zIndex: 1 }}
      >
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-100"
      style={{ zIndex: 1 }}
    />
  );
}
