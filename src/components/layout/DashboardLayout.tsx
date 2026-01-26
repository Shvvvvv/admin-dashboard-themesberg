import type React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbart";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <Topbar onMenuClick={() => setMenuOpen(!menuOpen)} />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* MOBILE SIDEBAR */}
        <MobileSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
