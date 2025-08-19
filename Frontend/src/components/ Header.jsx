import { Bell, Menu } from 'lucide-react';

const Header = ({
    setSidebarOpen,
    t,
  currentPage,
  setIsLogin
}) => (
    <header className="bg-white shadow-sm border-b lg:ml-0">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-3"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {t(currentPage.replace("-", ""))}
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString("hi-IN")} |{" "}
            {new Date().toLocaleTimeString("hi-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          className="relative"
          onClick={() => {
            localStorage.removeItem("token");
            setIsLogin(true);
          }}
        >
            Log out
          </button>
        </div>
      </div>
    </header>
);
  
export default Header