// components/MapClient.tsx
"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export function Map() {
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
  return (
    <MapContainer
      center={[47.20549, 38.938607]}
      zoom={15}
      style={{ height: "100%", width: "100%", borderRadius: "15px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[47.20549, 38.938607]}>
        <Popup>Центр довузовской подготовки</Popup>
      </Marker>
    </MapContainer>
  );
}
