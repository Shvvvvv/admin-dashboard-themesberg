import Sidebar from "./Sidebar";

interface MobileSidebarProps{
    open: boolean,
    onClose: () => void
}

const MobileSidebar = ({ open, onClose }: MobileSidebarProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>
    </>
  );
};

export default MobileSidebar