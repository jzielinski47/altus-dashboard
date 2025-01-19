import PlanSelectionPanel from "../components/Panels/PlanSelectionPanel";
import SessionTimerPanel from "../components/Panels/SessionTimer";
import StatPanel from "../components/Panels/StatPanel";

const Dashboard = () => {
  return (
    <div className="w-full h-full p-4 2xl:p-10 flex flex-row gap-4 lg:gap-8">
      <div className="hidden sm:block">side panel placeholder</div>
      <div className="flex-grow flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4 lg:gap-8">
          <SessionTimerPanel />
          <StatPanel />
          <PlanSelectionPanel />
          <PlanSelectionPanel />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <PlanSelectionPanel />
          <PlanSelectionPanel />
          <PlanSelectionPanel />
          <PlanSelectionPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
