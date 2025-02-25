import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import PanelWrapper from "./PanelWrapper";

const mockedData = { profit: 245.41, percent: -0.6781, display: "week" };

const StatPanel = () => {
  return (
    <PanelWrapper variant="filled">
      <div>
        <p className="text-sm text-white/60">Your net worth</p>

        <p className="text-2xl font-medium text-white/[87%]">${mockedData.profit}</p>
      </div>

      <div className={`mt-1 flex gap-1 text-${mockedData.percent > 0 ? "success" : "error"}`}>
        {mockedData.percent > 0 ? (
          <ArrowTrendingUpIcon className="size-5" />
        ) : (
          <ArrowTrendingDownIcon className="size-5" />
        )}
        <p className="flex gap-2 text-xs">
          <span className="font-medium">{mockedData.percent * 100}%</span>

          <span className="text-white/60"> Since last {mockedData.display} </span>
        </p>
      </div>
    </PanelWrapper>
  );
};

export default StatPanel;
