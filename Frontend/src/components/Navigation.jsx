import { BarChart3, Bus, Home, MapPin, Route, Settings, User, Users, X,Box,Package, Navigation } from 'lucide-react';
import { ContextData } from './Context';
import { useContext } from 'react';

const NavigationComponent = ({
    currentLanguage,
    t,
    currentPage,
    sidebarOpen,
    setSidebarOpen,
    setCurrentPage,
    setCurrentLanguage
}) => {
  const { userType } = useContext(ContextData)  
  
  const navItems = [
    { id: "dashboard", label: t("dashboard"), icon: Home, roles: ["admin"] },
    { id: "user", label: t("userManagement"), icon: Users, roles: ["admin"] },
    { id: "buses", label: t("busManagement"), icon: Bus, roles: ["admin"] },
    { id: "routes", label: t("routeManagement"), icon: Route, roles: ["admin"] },
    { id: "posMachine", label: t("posMachine"), icon: Box, roles: ["admin"] },
    { id: "trip", label: t("trip"), icon: Navigation, roles: ["admin", "driver","conductor"] },
    { id: "reports", label: t("reports"), icon: BarChart3, roles: ["admin"] },
    { id: "live-tracking", label: t("liveTracking"), icon: MapPin, roles: ["admin","conductor"] },
    { id: "parcel", label: t("parcel"), icon: Package, roles: ["admin"] },
    { id: "settings", label: t("settings"), icon: Settings, roles: ["admin","conductor"] },
  ];  

    return (
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-indigo-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 `}
      >
        <div className="flex items-center justify-between p-4 border-b border-indigo-800">
          <h1 className="text-xl font-bold">{t("appName")}</h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-4">
  {navItems
    .filter(item => !item.roles || item.roles.includes(userType?.role))
    .map((item) => {
      const Icon = item.icon;
      return (
        <button
          key={item.id}
          onClick={() => {
            setCurrentPage(item.id);
            setSidebarOpen(false);
          }}
          className={`w-full flex items-center px-4 py-3 text-left hover:bg-indigo-800 ${
            currentPage === item.id
              ? "bg-indigo-800 border-r-4 border-white"
              : ""
          }`}
        >
          <Icon className="w-5 h-5 mr-3" />
          {item.label}
        </button>
      );
    })}
</nav>


        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-indigo-800 p-3 rounded-lg">
            <div className="flex items-center">
              <User className="w-8 h-8 mr-2" />
              <div>
                <div className="font-medium">
                 
                  {
                   userType?.role
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="mt-3">
            <button
              onClick={() =>
                setCurrentLanguage(currentLanguage === "hi" ? "en" : "hi")
              }
              className="w-full bg-indigo-700 hover:bg-indigo-600 p-2 rounded text-sm"
            >
              {currentLanguage === "hi" ? "English" : "हिंदी"}
            </button>
          </div>
        </div>
      </div>
    );
  };

export default NavigationComponent