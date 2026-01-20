import type React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbart";

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <Topbar />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
