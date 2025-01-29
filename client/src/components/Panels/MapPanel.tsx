import PanelWrapper from "./PanelWrapper";
import MapComponent from "../MapComponent";

const MapPanel = () => {
  return (
    <PanelWrapper variant="filled">
      <div className="h-64 w-full">
        <MapComponent />
      </div>
    </PanelWrapper>
  );
};

export default MapPanel;
