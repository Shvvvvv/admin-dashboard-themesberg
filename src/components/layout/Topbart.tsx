import {
  Bars3BottomLeftIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
const Topbar = () => {
  return (
    <header className="h-16 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <img src="src/assets/img/logo.svg" alt="logo" />
        <Bars3BottomLeftIcon className="h-8 w-8 lg:hidden" />
        <InputGroup className="hidden md:flex bg-gray-50">
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon>
            <MagnifyingGlassIcon className="w-5 h-5" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <BellIcon className="h-5 w-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
};

export default Topbar;
