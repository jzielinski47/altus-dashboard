import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import { Key, useEffect, useState } from "react";
import { getEVCs } from "../api/dashboard";

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
  const [coords, setCoords] = useState<LatLngExpression>([52.2297, 21.0122]);
  const [evcList, setEvcList] = useState<any>([]);

  useEffect(() => {
    const fetchEVCS = async () => {
      try {
        const res = await getEVCs();
        setEvcList(res);
      } catch (error) {
        console.error("Error fetching evcs:", error);
      }
    };
    fetchEVCS();
  }, []);

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
      {evcList.map((evc: { id: Key | null | undefined; addressInfo: { latitude: number; longitude: number } }) => (
        <Marker
          key={evc.id}
          position={[evc.addressInfo.latitude, evc.addressInfo.longitude] as LatLngExpression}
          icon={EVChargerIcon}
        ></Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
