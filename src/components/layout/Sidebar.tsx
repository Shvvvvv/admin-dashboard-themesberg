import {
  ChartPieIcon,
  ClipboardDocumentListIcon,
  DocumentIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  LockClosedIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  AdjustmentsVerticalIcon,
  Cog8ToothIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router";
import { ROUTES } from "@/routes/routes";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-gray-200 px-3 py-4 h-full overflow-auto">
      <nav className="px-4 border-b border-gray-200">
        <button className="w-full text-left px-2 py-1 mb-5 rounded-lg hover:bg-gray-100">
          <NavLink
            to={ROUTES.DASHBOARD.path}
            className={({ isActive }) =>
              cn(
                "flex gap-4 font-medium text-gray-900 text-base",
                isActive ? "text-blue-600 font-semibold" : "",
              )
            }
          >
            <ChartPieIcon className="w-5 h-5" />
            <div>Overview</div>
          </NavLink>
        </button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="pages" className="mb-5 border-b-0">
            <AccordionTrigger
              className="px-2 py-1 hover:bg-gray-100 rounded-lg w-full items-center data-[state=open]:bg-gray-100
"
            >
              <div className="flex gap-4">
                <DocumentIcon className="w-5 h-5" />
                <div className="font-medium text-gray-900 text-base">Pages</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="ml-12 flex flex-col gap-4 pt-4">
                <li>
                  <NavLink
                    to={ROUTES.USERS.path}
                    className={({ isActive }) =>
                      cn(
                        "w-full text-left transition-colors",
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600",
                      )
                    }
                  >
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={ROUTES.PROFILE.path}
                    className={({ isActive }) =>
                      cn(
                        "w-full text-left transition-colors",
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600",
                      )
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={ROUTES.USER_SETTING.path}
                    className={({ isActive }) =>
                      cn(
                        "w-full text-left transition-colors",
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600",
                      )
                    }
                  >
                    Setting
                  </NavLink>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sales" className="mb-5 border-b-0">
            <AccordionTrigger className="px-2 py-1 hover:bg-gray-100 rounded-lg w-full items-center data-[state=open]:bg-gray-100">
              <div className="flex gap-4">
                <ShoppingBagIcon className="w-5 h-5" />
                <div className="font-medium text-gray-900 text-base">Sales</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="ml-12 flex flex-col gap-4 pt-4">
                <li>
                  <button className="w-full text-left hover:text-blue-600 transition-colors">
                    Product List
                  </button>
                </li>
                
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <button className="w-full text-left px-2 py-1 mb-5 rounded-lg hover:bg-gray-100">
          <NavLink
            to={ROUTES.MESSAGES.path}
            className={({ isActive }) =>
              cn(
                "flex gap-4 font-medium text-gray-900 text-base",
                isActive ? "text-blue-600 font-semibold" : "",
              )
            }
          >
            <InboxArrowDownIcon className="w-5 h-5" />
            Messages
          </NavLink>
        </button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="authentication" className="mb-5 border-b-0">
            <AccordionTrigger className="px-2 py-1 hover:bg-gray-100 rounded-lg w-full items-center data-[state=open]:bg-gray-100">
              <div className="flex gap-4">
                <LockClosedIcon className="w-5 h-5" />
                <div className="font-medium text-gray-900 text-base">
                  Authentication
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="ml-12 flex flex-col gap-4 pt-4 pb-0">
                <li>Product List</li>
                <li>Billing</li>
                <li>Invoice</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
      <nav className="flex flex-col justify-between flex-1 p-4">
        <div>
          <button className="w-full text-left px-2 py-1 mb-5 rounded-lg hover:bg-gray-100">
            <div className="flex gap-4">
              <ClipboardDocumentListIcon className="w-5 h-5" />
              <div className="font-medium text-gray-900 text-base">Docs</div>
            </div>
          </button>
          <button className="w-full text-left px-2 py-1 mb-5 rounded-lg hover:bg-gray-100">
            <div className="flex gap-4">
              <RectangleStackIcon className="w-5 h-5" />
              <div className="font-medium text-gray-900 text-base">
                Components
              </div>
            </div>
          </button>
          <button className="w-full text-left px-2 py-1 mb-5 rounded-lg hover:bg-gray-100">
            <div className="flex gap-4">
              <LifebuoyIcon className="w-5 h-5" />
              <div className="font-medium text-gray-900 text-base">Help</div>
            </div>
          </button>
        </div>
        <div className="flex justify-center gap-5 bottom-0">
          <button>
            <AdjustmentsVerticalIcon className="w-5 h-5" />
          </button>
          <button>
            <GlobeAsiaAustraliaIcon className="w-5 h-5" />
          </button>
          <button>
            <Cog8ToothIcon className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
