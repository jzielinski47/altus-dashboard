import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";

const UpdateMapCenter = ({ coords }: { coords: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coords);
  }, [coords, map]);
  return null;
};

const EVChargerIcon = new Icon({
  iconUrl: "https://img.icons8.com/?size=100&id=Lkvik7ce5xnz&format=png&color=000000",
  iconSize: [30, 30],
});

const MapComponent = () => {
  const [isLocationPermited, setIsLocationPermited] = useState(true);
  const [coords, setCoords] = useState<LatLngExpression>([50, 0]);

  const aquireGeolocation = () => {
    if ("geolocation" in navigator) {
      setIsLocationPermited(true);
      navigator.geolocation.watchPosition((pos) => {
        setCoords([pos.coords.latitude, pos.coords.longitude]);
      });
      // console.log(coords);
    } else {
      setIsLocationPermited(false);
    }
  };

  useEffect(() => {
    aquireGeolocation();
  }, []);

  useEffect(() => {
    aquireGeolocation();
  }, [coords]);

  if (!isLocationPermited) return <div>Location unavailabvle</div>;

  return (
    <MapContainer center={coords} zoom={13}>
      <div className="w-32 h-32">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </div>
      <UpdateMapCenter coords={coords} />
      <Marker position={[50.0185, 19.9745]} icon={EVChargerIcon}>
        <Popup>
          <h2>Włoska 3</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
