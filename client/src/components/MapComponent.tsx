import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const EVChargerIcon = new Icon({
  iconUrl: "https://img.icons8.com/?size=100&id=Lkvik7ce5xnz&format=png&color=000000",
  iconSize: [30, 30],
});

const MapComponent = () => {
  return (
    <MapContainer center={[50, 20]} zoom={13}>
      <div className="w-32 h-32">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </div>
      <Marker position={[50.0185, 19.9745]} icon={EVChargerIcon}></Marker>
    </MapContainer>
  );
};

export default MapComponent;
