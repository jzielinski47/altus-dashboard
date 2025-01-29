import PanelWrapper from "./PanelWrapper";
import MapComponent from "../MapComponent";
import { BoltIcon } from "@heroicons/react/16/solid";

const MapPanel = () => {
  return (
    <PanelWrapper>
      <div className="h-64 w-full rounded-lg flex flex-grow flex-col gap-2">
        <h2 className="inline-flex items-center gap-2 text-white/[87%] font-bold">
          Find <span className="text-success">EV</span> Chargers Near You <BoltIcon className="size-4 text-success" />
        </h2>
        <MapComponent />
      </div>
    </PanelWrapper>
  );
};

export default MapPanel;
