import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const createCustomIcon = (division: string) => {
  const color = division === "IHSEN" ? "#c9a227" : division === "IMSEN" ? "#7c3aed" : "#10b981";
  return L.divIcon({
    html: `<div style="
      background:${color};
      width:14px;height:14px;
      border-radius:50%;
      border:2px solid white;
      box-shadow:0 0 6px rgba(0,0,0,0.6);
    "></div>`,
    className: "",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
};

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

export interface School {
  name: string;
  city: string;
  teams: number;
  divisions: string[];
  lat: number;
  lng: number;
}

interface SchoolMapProps {
  schools: School[];
  selectedDivision: string;
}

export default function SchoolMap({ schools, selectedDivision }: SchoolMapProps) {
  // Which division key is currently selected (or null = all)
  const selectedKey =
    selectedDivision === "High School (IHSEN)" ? "IHSEN"
    : selectedDivision === "Middle School (IMSEN)" ? "IMSEN"
    : selectedDivision === "Unified (IUEN)" ? "IUEN"
    : null;

  const filtered = selectedKey === null
    ? schools
    : schools.filter(s => s.divisions.includes(selectedKey));

  // Marker color rule:
  //   - If a specific division is selected, color by that division (so filtered view is consistent).
  //   - Otherwise, use the school's first/primary division.
  const markerDivisionFor = (s: School) =>
    selectedKey && s.divisions.includes(selectedKey) ? selectedKey : s.divisions[0];

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
        {filtered.map((school, i) => (
          <Marker
            key={i}
            position={[school.lat, school.lng]}
            icon={createCustomIcon(markerDivisionFor(school))}
          >
            <Popup>
              <div style={{ fontFamily: "Rajdhani, sans-serif", minWidth: 160 }}>
                <strong style={{ fontSize: 14 }}>{school.name}</strong>
                <br />
                <span style={{ color: "#888", fontSize: 12 }}>{school.city}</span>
                <br />
                <span style={{ color: "#c9a227", fontSize: 12, fontWeight: "bold" }}>
                  {school.divisions.join(" · ")} &nbsp;·&nbsp; {school.teams} Teams
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
