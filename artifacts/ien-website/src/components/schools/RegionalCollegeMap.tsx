import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { College } from "@/data/colleges";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const regionalIcon = L.divIcon({
  html: `<div style="
    background:#c9a227;
    width:14px;height:14px;
    border-radius:50%;
    border:2px solid rgba(255,255,255,0.7);
    box-shadow:0 0 6px rgba(201,162,39,0.45);
  "></div>`,
  className: "",
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const partneredIcon = L.divIcon({
  html: `<div style="
    position:relative;
    width:20px;height:20px;
  ">
    <div style="
      position:absolute;inset:-4px;
      border-radius:50%;
      border:1.5px solid rgba(212,175,55,0.55);
    "></div>
    <div style="
      position:absolute;inset:0;
      background:#f5d062;
      border-radius:50%;
      border:2px solid #ffffff;
      box-shadow:0 0 12px rgba(245,208,98,0.7);
    "></div>
  </div>`,
  className: "",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const createClusterIcon = (cluster: any) =>
  L.divIcon({
    html: `<div style="
      background:rgba(30,10,60,0.92);
      border:2px solid #c9a227;
      color:#c9a227;
      font-weight:bold;
      font-size:13px;
      font-family:'Rajdhani',sans-serif;
      width:36px;height:36px;
      border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 0 10px rgba(201,162,39,0.4);
    ">${cluster.getChildCount()}</div>`,
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
function FitToColleges({ colleges }: { colleges: College[] }) {
  const map = useMap();
  useEffect(() => {
    if (colleges.length === 0) return;
    if (colleges.length === 1) {
      map.setView([colleges[0].lat, colleges[0].lng], 8, { animate: true });
      return;
    }
    const bounds = L.latLngBounds(colleges.map((c) => [c.lat, c.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 8, animate: true });
  }, [colleges, map]);
  return null;
}

interface RegionalCollegeMapProps {
  colleges: College[];
}

export default function RegionalCollegeMap({ colleges }: RegionalCollegeMapProps) {
  return (
    <MapContainer
      center={[42.5, -90]}
      zoom={5}
      style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <FitToColleges colleges={colleges} />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterIcon}
        maxClusterRadius={50}
      >
        {colleges.map((college, i) => {
          const isPartnered = college.isPartner === true;
          return (
            <Marker
              key={i}
              position={[college.lat, college.lng]}
              icon={isPartnered ? partneredIcon : regionalIcon}
            >
              <Popup>
                <div style={{ fontFamily: "Rajdhani, sans-serif", minWidth: 180 }}>
                  {isPartnered && (
                    <div style={{
                      display: "inline-block",
                      background: "#c9a227",
                      color: "#0d1828",
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "2px 6px",
                      borderRadius: 4,
                      marginBottom: 4,
                    }}>
                      IEN Partner
                    </div>
                  )}
                  <strong style={{ fontSize: 14, display: "block" }}>{college.name}</strong>
                  <span style={{ color: "#888", fontSize: 12 }}>{college.city}</span>
                  <br />
                  <span style={{ color: "#c9a227", fontSize: 12, fontWeight: "bold" }}>
                    {college.program}
                  </span>
                  <br />
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a227", fontSize: 11, textDecoration: "underline" }}
                  >
                    Visit program →
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
