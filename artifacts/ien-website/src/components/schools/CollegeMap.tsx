import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { College } from "@/data/colleges";

// Reuse leaflet default icon images (same as SchoolMap).
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Single gold marker for all colleges — no divisions to color-switch on.
const collegeIcon = L.divIcon({
  html: `<div style="
    background:#c9a227;
    width:16px;height:16px;
    border-radius:50%;
    border:2px solid white;
    box-shadow:0 0 8px rgba(201,162,39,0.6);
  "></div>`,
  className: "",
  iconSize: [16, 16],
  iconAnchor: [8, 8],
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

interface CollegeMapProps {
  colleges: College[];
}

export default function CollegeMap({ colleges }: CollegeMapProps) {
  return (
    <MapContainer
      center={[39.77, -86.16]}
      zoom={7}
      style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterIcon}
        maxClusterRadius={50}
      >
        {colleges.map((college, i) => (
          <Marker
            key={i}
            position={[college.lat, college.lng]}
            icon={collegeIcon}
          >
            <Popup>
              <div style={{ fontFamily: "Rajdhani, sans-serif", minWidth: 180 }}>
                <strong style={{ fontSize: 14 }}>{college.name}</strong>
                <br />
                <span style={{ color: "#888", fontSize: 12 }}>{college.city}</span>
                <br />
                <span style={{ color: "#c9a227", fontSize: 12, fontWeight: "bold" }}>
                  {college.program}
                </span>
                {college.website && (
                  <>
                    <br />
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#c9a227", fontSize: 11, textDecoration: "underline" }}
                    >
                      Visit program →
                    </a>
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
