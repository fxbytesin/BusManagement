import React, { useState } from "react";
import {
  BarChart3,
  Settings,
  Plus,
  Trash2,
} from "lucide-react";
import DashboardPage from './components/pages/Dashboard';
import BusManagementPage from './components/pages/BusManagement';
import RouteManagement from './components/pages/RouteManagement';
import DriverManagement from './components/pages/DriverManagement';
import ConductorManagement from './components/pages/ConductorManagement';
import LiveTracking from './components/pages/LiveTracking';
import Header from './components/ Header';
import NavigationComponent from './components/Navigation';
import Modal from './components/Modal';
import { messages } from './utils/messages'
import { BrowserRouter, Routes, } from 'react-router-dom';
import { Route as CustomRoute } from 'react-router-dom';
import Login from './components/Login';
import ApiService from './services/api'
import TicketSystem from './components/pages/TicketSystem';
import Registration from './components/Registration';
const BusManagementSoftware = () => {
  // Language State
  const [currentLanguage, setCurrentLanguage] = useState("hi");
  const t = (key) => messages[currentLanguage][key] || key;

  // Global State Management
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  // Business Data State
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [conductors, setConductors] = useState([]);
  const [liveTracking, setLiveTracking] = useState([])
  const [dashboard,setDashboard] = useState([])
  // Form States
  const [busForm, setBusForm] = useState({
    bus_number: "",
    capacity: 45,
    route_id: "",
    driver_id: "",
    conductor_id: "",
    status: "stopped",
    current_location:""
  });

  const [routeForm, setRouteForm] = useState({
    name: "",
    code: "",
    distance: "",
    stops: [""],
    base_fare: "",
    per_km_rate: "",
    active: true,
  });

  const [driverForm, setDriverForm] = useState({
    name: "",
    phone: "",
    license_number: "",
    experience_years: "",
    license_expiry: "",
    address: "",
    emergency_contact : ""
  });

  const [conductorForm, setConductorForm] = useState({
    name: "",
    phone: "",
    experience_years: "",
    address: "",
    emergency_contact:""
  });

  const[isLogin,setIsLogin] = useState(true)

  // CRUD Operations for Buses
  const handleAddBus = async() => {
    if (!busForm.bus_number || !busForm.route_id) {
      alert(t("fillAllFields"));
      return;
    }

    //Implement Add APi
    const response = await ApiService.addBus({
      ...busForm,
      route_id: parseInt(busForm.route_id, 10) || null,
      driver_id: parseInt(busForm.driver_id, 10) || null
    });
    
    if (response.success === true) {
      setBuses([...buses,response.data ]);  
    }
    
    // ApiService.getBus();
    setBusForm({
      bus_number: "",
      capacity: 45,
      route_id: "",
      driver_id: "",
      conductor_id: "",
      status: "stopped",
    });
    setShowModal(false);
  };

  const handleEditBus = (bus) => {
    setBusForm(bus);
    setEditingItem(bus);
    setModalType("edit-bus");
    setShowModal(true);
  };

  const handleUpdateBus = () => {
    ApiService.updateBus({
      ...busForm,
      route_id: parseInt(busForm.route_id, 10) || null,
      driver_id: parseInt(busForm.driver_id, 10) || null
    }) 
    setBuses(
      buses.map((bus) =>
        bus.id === editingItem.id
          ? { ...bus, ...busForm, updatedAt: new Date().toISOString() }
          : bus
      )
    );
    setBusForm({
      bus_number: "",
      capacity: 45,
      route_id: "",
      driver_id: "",
      conductor_id: "",
      status: "stopped",
    });
    setEditingItem(null);
    setShowModal(false);
  };

  const handleDeleteBus =async (busId) => {
    try {
      const response = await ApiService.deleteBus(busId); // Wait for delete to finish  
      if (response?.data?.message === 'Bus deleted successfully') {
        // eslint-disable-next-line no-unused-vars
        const response = await ApiService.getBus();      
      }
  
    } catch (error) {
      console.error("Error while deleting", error);
    }
      setBuses(buses.filter((bus) => bus.id !== busId));
  };

  // CRUD Operations for Routes
  const handleAddRoute = async() => {
    if (!routeForm.name || !routeForm.code || !routeForm.distance) {
      alert(t("fillAllFields"));
      return;
    }
    const newRoute = {
      id: `route-${Date.now()}`,
      ...routeForm,
      distance: parseFloat(routeForm.distance),
      base_fare: parseFloat(routeForm.base_fare),
      per_km_rate: parseFloat(routeForm.per_km_rate),
      stops: routeForm.stops.filter((stop) => stop.trim() !== ""),
      createdAt: new Date().toISOString(),
    };

    setRoutes([...routes, newRoute]);
    //Implement Add api
    const response = await ApiService.addRoutes(routeForm)
    if (response.success === true) {
      
      setRoutes([...routes,response.data])
    }
    setRouteForm({
      name: "",
      code: "",
      distance: "",
      stops: [""],
      base_fare: "",
      per_km_rate: "",
      active: true,
    });
    setShowModal(false);
  };

  const handleEditRoute = (route) => {
    setRouteForm({
      ...route,
      stops: Array.isArray(route.stops)
        ? route.stops
        : JSON.parse(route.stops || "[]")
    });
    setEditingItem(route);
    setModalType("edit-route");
    setShowModal(true);
  };

  const handleUpdateRoute = () => {    
    ApiService.updateRoutes(routeForm)    
    setRoutes(
      routes.map((route) =>
        route.id === editingItem.id
          ? {
              ...route,
              ...routeForm,
              distance: parseFloat(routeForm.distance),
              base_fare: parseFloat(routeForm.base_fare),
              per_km_rate: parseFloat(routeForm.per_km_rate),
              stops: routeForm.stops.filter((stop) => stop.trim() !== ""),
              updatedAt: new Date().toISOString(),
            }
          : route
      )
    );
    setRouteForm({
      name: "",
      code: "",
      distance: "",
      stops: [""],
      base_fare: "",
      per_km_rate: "",
      active: true,
    });
    setEditingItem(null);
    setShowModal(false);
  };

  const handleDeleteRoute = (routeId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(t("confirmDeleteRoute"))) {
      // eslint-disable-next-line no-unused-vars
      const response = ApiService.deleteRoutes(routeId)
      if ("Route deleted successfully") {
        setRoutes(routes.filter((route) => route.id !== routeId));
      }
    }
  };

  // CRUD Operations for Drivers
  const handleAddDriver = async() => {
    if (!driverForm.name || !driverForm.phone || !driverForm.license_number) {
      alert(t("fillAllFields"));
      return;
    }


const response = await ApiService.addDriver({
  ...driverForm,
  experience_years: parseInt(driverForm.experience_years, 10)
});

    if (response.success === true) {      
      setDrivers([...drivers,response.data])
    }
    setDriverForm({ name: "", phone: "", license_number: "", experience_years: "" });
    setShowModal(false);
  };


  const handleEditDriver = (driver) => {
    const d = new Date(driver.license_expiry);
    const license_expiry = d.toISOString().split("T")[0];
    driver.license_expiry = license_expiry
    setDriverForm(driver);
    setEditingItem(driver);
    setModalType("edit-driver");
    setShowModal(true);
  };


  const handleUpdateDriver = () => {    
    const d = new Date(driverForm.license_expiry);
    const license_expiry = d.toISOString().split("T")[0];
    driverForm.license_expiry = license_expiry
    ApiService.updateDriver({
      ...driverForm,
      experience_years: parseInt(driverForm.experience_years, 10)
    })    

    const updatedList = drivers.map((item) => 
      item.id === driverForm.id ? driverForm : item
    );
    setDrivers(updatedList);
    setEditingItem(null);
    setShowModal(false);
  };

  const handleDeleteDriver = (id) => {
    ApiService.deleteDriver(id)
  }

  // CRUD Operations for Conductors
  const handleAddConductor = async() => {
    if (!conductorForm.name || !conductorForm.phone) {
      alert(t("fillAllFields"));
      return;
    }

    const response = await ApiService.addConductor({
      ...conductorForm,
      experience_years: parseInt(conductorForm.experience_years,10)
    })
    if (response.success === true) {      
      setConductors([...conductors,response.data])
    }
    setConductorForm({ name: "", phone: "", experience_years: "" });
    setShowModal(false);
  };

  const handleEditConstructor = (conductors) => {
    setConductorForm(conductors);
    setEditingItem(conductors);
    setModalType("edit-conductors");
    setShowModal(true);
  };
  const handleUpdateContructor = () => {    
    ApiService.updateConstructor({
      ...conductorForm,
      experience_years: parseInt(conductorForm.experience_years,10)
    })    
    const updatedList = conductors.map((item) => 
      item.id === conductorForm.id ? conductorForm : item
    );
    setConductors(updatedList);
    setEditingItem(null);
    setShowModal(false);
  };
  const handleDeleteConductor = (id) => {
    ApiService.deleteContuctor(id)

  }
  // Add/Edit Forms in Modals
  const renderModalContent = () => {
    switch (modalType) {
      case "add-bus":
      case "edit-bus":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("busNumber")} *
              </label>
              <input
                type="text"
                value={busForm.bus_number}
                onChange={(e) =>
                  setBusForm({ ...busForm, bus_number: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("busNumberPlaceholder")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("capacity")} *
              </label>
              <input
                type="number"
                value={busForm.capacity}
                onChange={(e) =>
                  setBusForm({ ...busForm, capacity: parseInt(e.target.value) })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("route")} *
              </label>
              <select
                value={busForm.route_id}
                onChange={(e) =>
                  setBusForm({ ...busForm, route_id: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">{t("selectRoute")}</option>
                {routes.map((route) => (
                  <option key={route.id} value={route.id}>
                    {route.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("driver")}
              </label>
              <select
                value={busForm.driver_id}
                onChange={(e) =>
                  setBusForm({ ...busForm, driver_id: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">{t("selectDriver")}</option>
                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("conductor")}
              </label>
              <select
                value={busForm.conductor_id}
                onChange={(e) =>
                  setBusForm({ ...busForm, conductor_id: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">{t("selectConductor")}</option>
                {conductors.map((conductor) => (
                  <option key={conductor.id} value={conductor.id}>
                    {conductor.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("status")}
              </label>
              <select
                value={busForm.status}
                onChange={(e) =>
                  setBusForm({ ...busForm, status: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="stopped">{t("stopped")}</option>
                <option value="running">{t("running")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("CurrentLocation")} *
              </label>
              <input
                type="text"
                value={busForm.current_location}
                onChange={(e) =>
                  setBusForm({ ...busForm, current_location: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("Indore")}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setBusForm({
                    bus_number: "",
                    capacity: 45,
                    route_id: "",
                    driver_id: "",
                    conductor_id: "",
                    status: "stopped",
                  });
                  setEditingItem(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {t("cancel")}
              </button>
              <button
                onClick={editingItem ? handleUpdateBus : handleAddBus}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {t("save")}
              </button>
            </div>
          </div>
        );

      case "add-route":
      case "edit-route":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("name")} *
              </label>
              <input
                type="text"
                value={routeForm.name}
                onChange={(e) =>
                  setRouteForm({ ...routeForm, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={t("routeNamePlaceholder")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("code")} *
              </label>
              <input
                type="text"
                value={routeForm.code}
                onChange={(e) =>
                  setRouteForm({
                    ...routeForm,
                    code: e.target.value.toUpperCase(),
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={t("routeCodePlaceholder")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("distance")} ({t("km")}) *
              </label>
              <input
                type="number"
                value={routeForm.distance}
                onChange={(e) =>
                  setRouteForm({ ...routeForm, distance: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="1"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("base_fare")} ({t("rupees")}) *
              </label>
              <input
                type="number"
                value={routeForm.base_fare}
                onChange={(e) =>
                  setRouteForm({ ...routeForm, base_fare: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="1"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("per_km_rate")} ({t("rupees")}) *
              </label>
              <input
                type="number"
                value={routeForm.per_km_rate}
                onChange={(e) =>
                  setRouteForm({ ...routeForm, per_km_rate: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="0.1"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("stops")} *
              </label>
              {routeForm.stops.map((stop, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={stop}
                    onChange={(e) => {
                      const newStops = [...routeForm.stops];
                      newStops[index] = e.target.value;
                      setRouteForm({ ...routeForm, stops: newStops });
                    }}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder={`स्टॉप ${index + 1}`}
                  />
                  {routeForm.stops.length > 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        const newStops = routeForm.stops.filter(
                          (_, i) => i !== index
                        );
                        setRouteForm({ ...routeForm, stops: newStops });
                      }}
                      className="text-red-600 hover:text-red-800 p-2"
                      title={t("removeStop")}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setRouteForm({
                    ...routeForm,
                    stops: [...routeForm.stops, ""],
                  })
                }
                className="mt-2 text-green-600 hover:text-green-800 flex items-center space-x-1"
              >
                <Plus className="w-4 h-4" />
                <span>{t("addStop")}</span>
              </button>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setRouteForm({
                    name: "",
                    code: "",
                    distance: "",
                    stops: [""],
                    base_fare: "",
                    per_km_rate: "",
                    active: true,
                  });
                  setEditingItem(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {t("cancel")}
              </button>
              <button
                onClick={editingItem ? handleUpdateRoute : handleAddRoute}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                {t("save")}
              </button>
            </div>
          </div>
        );

      case "add-driver":
        case "edit-driver":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("name")} *
              </label>
              <input
                type="text"
                value={driverForm.name}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("phone")} *
              </label>
              <input
                type="tel"
                value={driverForm.phone}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, phone: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder={t("phoneNumberPlaceholder")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("license_number")} *
              </label>
              <input
                type="text"
                value={driverForm.license_number}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, license_number: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder={t("license_Number")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("experience_years")}
              </label>
              <input
                type="text"
                value={driverForm.experience_years}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, experience_years: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="5 साल"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Address")}
              </label>
              <input
                type="text"
                value={driverForm.address}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, address: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Delhi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("License_Expiry")}
              </label>
              <input
                type="date"
                value={driverForm.license_expiry}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, license_expiry: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="2026-12-31"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Emergency_Contact")}
              </label>
              <input
                type="text"
                value={driverForm.emergency_contact}
                onChange={(e) =>
                  setDriverForm({ ...driverForm, emergency_contact: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="9123456789"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setDriverForm({
                    name: "",
                    phone: "",
                    license_number: "",
                    experience_years: "",
                  });
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {t("cancel")}
              </button>
              <button
                onClick={editingItem ? handleUpdateDriver : handleAddDriver}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                {t("save")}
              </button>
            </div>
          </div>
        );

      case "add-conductor":
      case "edit-conductors":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("name")} *
              </label>
              <input
                type="text"
                value={conductorForm.name}
                onChange={(e) =>
                  setConductorForm({ ...conductorForm, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("phone")} *
              </label>
              <input
                type="tel"
                value={conductorForm.phone}
                onChange={(e) =>
                  setConductorForm({ ...conductorForm, phone: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder={t("phoneNumberPlaceholder")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("experience_years")}
              </label>
              <input
                type="text"
                value={conductorForm.experience_years}
                onChange={(e) =>
                  setConductorForm({
                    ...conductorForm,
                    experience_years: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="3 साल"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Address")}
              </label>
              <input
                type="text"
                value={conductorForm.address}
                onChange={(e) =>
                  setConductorForm({
                    ...conductorForm,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Chennai"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Emergency Contact")}
              </label>
              <input
                type="text"
                value={conductorForm.emergency_contact}
                onChange={(e) =>
                  setConductorForm({
                    ...conductorForm,
                    emergency_contact: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="8774018561"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setConductorForm({ name: "", phone: "", experience_years: "" });
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {t("cancel")}
              </button>
              <button 
                onClick={editingItem ? handleUpdateContructor : handleAddConductor}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                {t("save")}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Modal Title Helper
  const getModalTitle = () => {
    switch (modalType) {
      case "add-bus":
        return t("addBusTitle");
      case "edit-bus":
        return t("editBusTitle");
      case "add-route":
        return t("addRouteTitle");
      case "edit-route":
        return t("editRouteTitle");
      case "add-driver":
        return t("addDriverTitle");
      case "add-conductor":
        return t("addConductorTitle");
      default:
        return "";
    }
  };

  // Main Render Function
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage
          buses={buses}
          setModalType={setModalType}
          setShowModal={setShowModal}
          routes={routes}
          t={t}
          dashboard={dashboard}
          setDashboard={setDashboard}
        />;
      case "buses":
        return <BusManagementPage
          buses={buses}
          setModalType={setModalType}
          setShowModal={setShowModal}
          routes={routes}
          t={t}
          drivers={drivers}
          conductors={conductors}
          handleEditBus={handleEditBus}
          handleDeleteBus={handleDeleteBus}
          setBuses={setBuses}
          setDrivers={setDrivers}
          setRoutes={setRoutes}
          setConductors={setConductors}
        />;
      case "routes":
        return <RouteManagement
          setModalType={setModalType}
          setShowModal={setShowModal}
          routes={routes}
          t={t}
          handleEditRoute={handleEditRoute}
          handleDeleteRoute={handleDeleteRoute}
          setRoutes={setRoutes}
        />;
      case "drivers":
        return <DriverManagement
        setModalType={setModalType}
          setShowModal={setShowModal}
          t={t}
          drivers={drivers}
          buses={buses}
          setBuses={setBuses}
          setDrivers={setDrivers}
          handleEditDriver={handleEditDriver}
          handleDeleteDriver={handleDeleteDriver}
        />;
      case "conductors":
        return <ConductorManagement
        conductors={conductors}
        setModalType={setModalType}
        setShowModal={setShowModal}
          t={t}
          buses={buses}
          setConductors={setConductors}
          setBuses={setBuses}
          setDrivers={setDrivers}
          handleEditConstructor={handleEditConstructor}
          handleDeleteConductor={handleDeleteConductor}
        />;
      case "live-tracking":
        return <LiveTracking
          buses={buses}
          t={t}
          routes={routes}
          liveTracking={liveTracking}
          setLiveTracking={setLiveTracking}
        />;
      case "ticketing":
        return (
          <TicketSystem
            t={t}
            buses={buses}
            routes={routes}
          />
        );
      case "reports":
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">{t("reports")}</h3>
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                रिपोर्ट्स
              </h3>
              <p className="text-gray-500">यह फीचर जल्द ही उपलब्ध होगा</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">{t("settings")}</h3>
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                सेटिंग्स
              </h3>
              <p className="text-gray-500">यह फीचर जल्द ही उपलब्ध होगा</p>
            </div>
          </div>
        );
      default:
        return <DashboardPage
        buses={buses}
        setModalType={setModalType}
        setShowModal={setShowModal}
        routes={routes}
        t={t}
        />;
    }
  };

  return (
    <>
    <BrowserRouter>
  <Routes>
    <CustomRoute
      path="/"
      element={
        isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <div className="flex h-screen bg-gray-100">
            <NavigationComponent
              currentLanguage={currentLanguage}
              t={t}
              currentPage={currentPage}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              setCurrentPage={setCurrentPage}
              setCurrentLanguage={setCurrentLanguage}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
              <Header
                setSidebarOpen={setSidebarOpen}
                t={t}
                  currentPage={currentPage}
                  setIsLogin={setIsLogin}
              />

              <main className="flex-1 overflow-x-hidden overflow-y-auto">
                {renderCurrentPage()}
              </main>
            </div>

            {showModal && (
              <Modal
                title={getModalTitle()}
                onClose={() => {
                  setShowModal(false);
                  setEditingItem(null);
                  setBusForm({
                    bus_number: '',
                    capacity: 45,
                    route_id: '',
                    driver_id: '',
                    conductor_id: '',
                    status: 'stopped',
                  });
                  setRouteForm({
                    name: '',
                    code: '',
                    distance: '',
                    stops: [''],
                    base_fare: '',
                    per_km_rate: '',
                    active: true,
                  });
                  setDriverForm({ name: '', phone: '', license_number: '', experience_years: '' });
                  setConductorForm({ name: '', phone: '', experience_years: '' });
                }}
              >
                {renderModalContent()}
              </Modal>
            )}

            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </div>
        )
      }
          />
          <CustomRoute path='/registration' element={<Registration/>} />
  </Routes>
</BrowserRouter>
    </>
  );
};

export default BusManagementSoftware;
