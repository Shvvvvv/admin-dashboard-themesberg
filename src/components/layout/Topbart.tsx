const Topbar = () => {
    return (
    <header className="h-16 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="font-bold text-lg">Dashboard</div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  )
}

export default Topbar