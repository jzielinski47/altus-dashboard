import PanelWrapper from "./PanelWrapper";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from "@heroicons/react/16/solid";

const mockedData = { profit: 245.41, percent: -0.6781, display: "week" };

const StatPanel = () => {
  return (
    <PanelWrapper>
      <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full">
        <div>
          <p className="text-sm text-white/60">Profit</p>

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
      </div>
    </PanelWrapper>
  );
};

export default StatPanel;
