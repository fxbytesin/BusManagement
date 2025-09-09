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
import PosMachine from './components/pages/PosMachine';
import TicketView from './components/pages/TicketView';
import Trip from './components/pages/Trip';
import Parcel from './components/pages/Parcel';
import UserManagement from "./components/pages/UserManagement";

import ToastMessage from './components/pages/ToastMessage';
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
  const [showParcel, setShowParcel] = useState(false);

  // Business Data State
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [users, setUsers] = useState([]);
  const [liveTracking, setLiveTracking] = useState([])
  const [dashboard, setDashboard] = useState([])
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [drivers, setDrivers] = useState([]);
  const [conductors, setConductors] = useState([]);


  // Form States
  const [busForm, setBusForm] = useState({
    bus_number: "",
    capacity: 45,
    last_maintenance: "",
    insurance_expiry: "",
    permit_expiry: "",
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

  const [userForm, setUserForm] = useState({
    name: "",
    phone: "",
    license_number: "",
    experience_years: "",
    license_expiry: "",
    address: "",
    emergency_contact: ""
  });

  const [isLogin, setIsLogin] = useState(true)
  const [showModalPos, setShowModalPos] = useState(false);
  const [showTrip, setShowTrip] = useState(false)

  // CRUD Operations for Buses
  const handleAddBus = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!busForm.bus_number.trim()) {
      newErrors.bus_number = t("busNumRequired");
    }

    if (!busForm.insurance_expiry) {
      newErrors.insurance_expiry = t("insurance_expiry");
    }
    if (!busForm.last_maintenance) {
      newErrors.last_maintenance = t("last_maintenance");
    }
    if (!busForm.permit_expiry) {
      newErrors.permit_expiry = t("permit_expiry");
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;

    //Implement Add APi
    const response = await ApiService.addBus(busForm);

    if (response.success === true) {
      setToastMessage("Bus Added Successfully");
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000);
      setBuses([...buses, response.data]);
    }

    // ApiService.getBus();
    setBusForm({
      bus_number: "",
      capacity: 45,
      last_maintenance: "",
      insurance_expiry: "",
      permit_expiry: "",
    });
    setShowModal(false);
  };
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0]; // YYYY-MM-DD
  };
  const handleEditBus = (bus) => {
    setBusForm({
      ...bus,
      last_maintenance: formatDate(bus.last_maintenance),
      permit_expiry: formatDate(bus.permit_expiry),
      insurance_expiry: formatDate(bus.insurance_expiry),
    });
    setEditingItem(bus);
    setModalType("edit-bus");
    setShowModal(true);
  };

  const handleUpdateBus = async () => {
    const formatDate = (date) => {
      if (!date) return null;
      return new Date(date).toISOString().split("T")[0];
    };
    let newErrors = {};

    if (!busForm.bus_number.trim()) {
      newErrors.bus_number = t("busNumRequired");
    }

    if (!busForm.insurance_expiry) {
      newErrors.insurance_expiry = t("insurance_expiry");
    }
    if (!busForm.last_maintenance) {
      newErrors.last_maintenance = t("last_maintenance");
    }
    if (!busForm.permit_expiry) {
      newErrors.permit_expiry = t("permit_expiry");
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      ...busForm,
      last_maintenance: formatDate(busForm.last_maintenance),
      permit_expiry: formatDate(busForm.permit_expiry),
      insurance_expiry: formatDate(busForm.insurance_expiry),
    };

    const response = await ApiService.updateBus(payload);

    if (response.success === true) {
      setToastMessage("Bus Updated Successfully");
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000);
    }

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
      last_maintenance: "",
      insurance_expiry: "",
      permit_expiry: "",
    });
    setEditingItem(null);
    setShowModal(false);
  };

  const handleDeleteBus = async (busId) => {
    try {
      const response = await ApiService.deleteBus(busId); // Wait for delete to finish  
      if (response?.data?.message === 'Bus deleted successfully') {
        // eslint-disable-next-line no-unused-vars
        setShowToast(true)
        setToastMessage(response.data.message)
        setTimeout(() => setShowToast(false), 3000);
      }

    } catch (error) {
      console.error("Error while deleting", error);
    }
    setBuses(buses.filter((bus) => bus.id !== busId));
  };

  // CRUD Operations for Routes
  const handleAddRoute = async () => {

    let newErrors = {};

    if (!routeForm.name.trim()) {
      newErrors.name = t("routeName");
    }
    if (!routeForm.code.trim()) {
      newErrors.code = t("routeCode");
    }
    if (!routeForm.distance.trim()) {
      newErrors.distance = t("routeDistance");
    }
    if (!routeForm.base_fare.trim()) {
      newErrors.base_fare = t("baseFareRequired");
    }
    if (!routeForm.per_km_rate.trim()) {
      newErrors.per_km_rate = t("routeKm");
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;


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
      setToastMessage("Route Add Successfully");
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000);
      setRoutes([...routes, response.data])
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

  const handleUpdateRoute = async () => {
    let newErrors = {};

    if (!routeForm.name.trim()) {
      newErrors.name = t("routeName");
    }
    if (!routeForm.code.trim()) {
      newErrors.code = t("routeCode");
    }
    if (!routeForm.distance) {
      newErrors.distance = t("routeDistance");
    }
    if (!routeForm.base_fare) {
      newErrors.base_fare = t("baseFareRequired");
    }
    if (!routeForm.per_km_rate) {
      newErrors.per_km_rate = t("routeKm");
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;
    const response = await ApiService.updateRoutes(routeForm)
    if (response?.success === true) {
      setToastMessage("Route Update Successfully");
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000);
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
    }
  };

  const handleDeleteRoute = async (routeId) => {
    const response = await ApiService.deleteRoutes(routeId)
    if (response?.success === true) {
      setShowToast(true)
      setToastMessage(response.data.message)
      setTimeout(() => setShowToast(false), 3000);
      setRoutes(routes.filter((route) => route.id !== routeId));
    }
  };

  // CRUD Operations for Drivers
  const handleAddUser = async () => {
    let newErrors = {};

if (!(userForm.name || "").trim()) {
  newErrors.name = t("nameRequired");
}

if (!userForm.experience_years && userForm.experience_years !== 0) {
  newErrors.experience_years = t("experienceYearRequired");
}

if (!(userForm.emergency_contact || "").trim()) {
  newErrors.emergency_contact = t("emergencyContactRequired");
}

if (!(userForm.address || "").trim()) {
  newErrors.address = t("addressRequired");
}

if (!(userForm.phone || "").trim()) {
  newErrors.phone = t("phoneRequired");
}

if (userForm.phone && !/^\d{10}$/.test(userForm.phone)) {
  newErrors.phone = t("phoneMustBe10Digits");
}

// Only required if role = driver
if (userForm.role === "driver") {
  if (!(userForm.license_number || "").trim()) {
    newErrors.license_number = t("licenseNumberRequired");
  }
  if (!userForm.license_expiry) {
    newErrors.license_expiry = t("licenseExpiryRequired");
  }
}
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const response = await ApiService.addUser({
      ...userForm,
      experience_years: parseInt(userForm.experience_years, 10) || 0,
    });

    if (response.success === true) {
      setUsers([...users, response.data]);
      setToastMessage("User Added Successfully");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setErrors({}); 
    }

    setUserForm({
      name: "",
      phone: "",
      license_number: "",
      license_expiry: "",
      experience_years: "",
      address: "",
      emergency_contact: "",
      role: "",
    });
    setShowModal(false);
    setEditingItem(null);
  };


  const handleEditUser = (user) => {
    let license_expiry = "";
    
    // Only format if a valid date exists
    if (user.userExtra?.license_expiry) {
      const d = new Date(user.userExtra.license_expiry);
      if (!isNaN(d.getTime())) {
        license_expiry = d.toISOString().split("T")[0];
      }
    }
  
    setUserForm({
      id: user.id || "",
      name: user.name || "",
      phone: user.phone || "",
      role: user.role || "",
      license_number: user.userExtra?.license_number ?? "",
      license_expiry,
      experience_years: user.userExtra?.experience_years?.toString() ?? "",
      address: user.userExtra?.address ?? "",               
      emergency_contact: user.userExtra?.emergency_contact ?? "", 
    });
    setModalType("edit-user");
    setShowModal(true);
  };
  
  const handleUpdateUser = async () => {
    let newErrors = {};
  
    if (!(userForm.name || "").trim()) {
      newErrors.name = t("nameRequired");
    }
    
    if (!userForm.experience_years && userForm.experience_years !== 0) {
      newErrors.experience_years = t("experienceYearRequired");
    }
    
    if (!(userForm.emergency_contact || "").trim()) {
      newErrors.emergency_contact = t("emergencyContactRequired");
    }
    
    if (!(userForm.address || "").trim()) {
      newErrors.address = t("addressRequired");
    }
    
    if (!(userForm.phone || "").trim()) {
      newErrors.phone = t("phoneRequired");
    }
    
    if (userForm.phone && !/^\d{10}$/.test(userForm.phone)) {
      newErrors.phone = t("phoneMustBe10Digits");
    }
    
    // Only required if role = driver
    if (userForm.role === "driver") {
      if (!(userForm.license_number || "").trim()) {
        newErrors.license_number = t("licenseNumberRequired");
      }
      if (!userForm.license_expiry) {
        newErrors.license_expiry = t("licenseExpiryRequired");
      }
    }
  
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
  
    // Prepare the payload according to your API structure
    const payload = {
      id: userForm.id,
      name: userForm.name,
      phone: userForm.phone,
      role: userForm.role,
      userExtra: {
        license_number: userForm.license_number || "",
        license_expiry: userForm.license_expiry 
          ? new Date(userForm.license_expiry).toISOString().split("T")[0]
          : null,
        experience_years: parseInt(userForm.experience_years, 10) || 0,
        address: userForm.address || "",
        emergency_contact: userForm.emergency_contact || "",
      }
    };
  
    try {
      const response = await ApiService.updateUser(payload);
  
      if (response.success === true) {
        // Update the users state with the new data
        setUsers(users.map((user) => 
          user.id === userForm.id 
            ? { 
                ...user, 
                name: payload.name,
                phone: payload.phone,
                role: payload.role,
                userExtra: payload.userExtra
              } 
            : user
        ));
        
        setToastMessage("User Updated Successfully");
        setShowToast(true);
        setErrors({});
        setTimeout(() => setShowToast(false), 3000);
        
        // Reset form and close modal
        setEditingItem(null);
        setShowModal(false);
      } else {
        // Handle API error
        setToastMessage(response.message || "Failed to update user");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Update user error:", error);
      setToastMessage("Error updating user");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  const handleDeleteUser = (id) => {
    ApiService.deleteUser(id)
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
                onChange={(e) => {
                  setBusForm({ ...busForm, bus_number: e.target.value })
                  if (errors.bus_number) {
                    setErrors({ ...errors, bus_number: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("busNumberPlaceholder")}
              />
              {errors.bus_number && (
                <p className="text-red-500 text-sm mt-1">{errors.bus_number}</p>
              )}
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
                {t("lastMaintenance")} *
              </label>
              <input
                type="date"
                value={busForm.last_maintenance}
                onChange={(e) => {
                  setBusForm({ ...busForm, last_maintenance: e.target.value })
                  if (errors.last_maintenance) {
                    setErrors({ ...errors, last_maintenance: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="100"
              />
              {errors.last_maintenance && (
                <p className="text-red-500 text-sm mt-1">{errors.last_maintenance}</p>
              )}
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("insuranceExpiry")} *
              </label>
              <input
                type="date"
                value={busForm.insurance_expiry}
                onChange={(e) => {
                  setBusForm({ ...busForm, insurance_expiry: e.target.value })
                  if (errors.insurance_expiry) {
                    setErrors({ ...errors, insurance_expiry: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="100"
              />
              {errors.insurance_expiry && (
                <p className="text-red-500 text-sm mt-1">{errors.insurance_expiry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("permitExpiry")} *
              </label>
              <input
                type="date"
                value={busForm.permit_expiry}
                onChange={(e) => {
                  setBusForm({ ...busForm, permit_expiry: e.target.value })
                  if (errors.permit_expiry) {
                    setErrors({ ...errors, permit_expiry: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="100"
              />
              {errors.permit_expiry && (
                <p className="text-red-500 text-sm mt-1">{errors.permit_expiry}</p>
              )}
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setBusForm({
                    bus_number: "",
                    capacity: 45,
                    last_maintenance: "",
                    insurance_expiry: "",
                    permit_expiry: "",
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
                onChange={(e) => {
                  setRouteForm({ ...routeForm, name: e.target.value })
                  if (errors.name) {
                    setErrors({ ...errors, name: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={t("routeNamePlaceholder")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("code")} *
              </label>
              <input
                type="text"
                value={routeForm.code}
                onChange={(e) => {
                  setRouteForm({
                    ...routeForm,
                    code: e.target.value.toUpperCase(),
                  })
                  if (errors.code) {
                    setErrors({ ...errors, code: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={t("routeCodePlaceholder")}
              />
              {errors.code && (
                <p className="text-red-500 text-sm mt-1">{errors.code}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("distance")} ({t("km")}) *
              </label>
              <input
                type="number"
                value={routeForm.distance}
                onChange={(e) => {
                  setRouteForm({ ...routeForm, distance: e.target.value })
                  if (errors.distance) {
                    setErrors({ ...errors, distance: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="1"
                step="0.1"
              />
              {errors.distance && (
                <p className="text-red-500 text-sm mt-1">{errors.distance}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("baseFare")} ({t("rupees")}) *
              </label>
              <input
                type="number"
                value={routeForm.base_fare}
                onChange={(e) => {
                  setRouteForm({ ...routeForm, base_fare: e.target.value })
                  if (errors.base_fare) {
                    setErrors({ ...errors, base_fare: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="1"
                step="0.1"
              />
              {errors.base_fare && (
                <p className="text-red-500 text-sm mt-1">{errors.base_fare}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("perKmRate")} ({t("rupees")}) *
              </label>
              <input
                type="number"
                value={routeForm.per_km_rate}
                onChange={(e) => {
                  setRouteForm({ ...routeForm, per_km_rate: e.target.value })
                  if (errors.per_km_rate) {
                    setErrors({ ...errors, per_km_rate: "" });
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="0.1"
                step="0.1"
              />
              {errors.per_km_rate && (
                <p className="text-red-500 text-sm mt-1">{errors.per_km_rate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("stops")} *
              </label>
              {routeForm?.stops.map((stop, index) => (
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

      case "add-user":
      case "edit-user":
        return (
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("name")} *
              </label>
              <input
                type="text"
                value={userForm.name}
                onChange={(e) => {
                  setUserForm({ ...userForm, name: e.target.value });
                  if (errors.name) {
                    setErrors({ ...errors, name: "" });
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("phone")} *
              </label>
              <input
                type="tel"
                value={userForm.phone}
                onChange={(e) => {
                  setUserForm({ ...userForm, phone: e.target.value });
                  if (errors.phone) {
                    setErrors({ ...errors, phone: "" });
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder={t("phoneNumberPlaceholder")}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("emergencyContact")} *
              </label>
              <input
                type="text"
                value={userForm.emergency_contact}
                onChange={(e) => {
                  setUserForm({ ...userForm, emergency_contact: e.target.value  });
                  if (errors.emergency_contact) {
                    setErrors({ ...errors, emergency_contact: "" });
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="9123456789"
              />
              {errors.emergency_contact && <p className="text-red-500 text-sm">{errors.emergency_contact}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("address")} *
              </label>
              <input
                type="text"
                value={userForm.address}
                onChange={(e) => {
                  setUserForm({ ...userForm, address: e.target.value  });
                  if (errors.address) {
                    setErrors({ ...errors, address: "" });
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Delhi"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("experienceYears")}
              </label>
              <input
                type="number"
                value={userForm.experience_years}
                onChange={(e) => {
                  setUserForm({ ...userForm, experience_years: e.target.value  });
                  if (errors.experience_years) {
                    setErrors({ ...errors, experience_years: "" });
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="5"
              />
              {errors.experience_years && <p className="text-red-500 text-sm">{errors.experience_years}</p>}
            </div>

            {/* Role (Dropdown) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("role")} *
              </label>
              <select
                value={userForm.role}
                onChange={(e) => {
                  setUserForm({ ...userForm, role: e.target.value  });
                  if (errors.role) {
                    setErrors({ ...errors, role: "" });
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">{t("selectRole")}</option>
                <option value="driver">{t("driver")}</option>
                <option value="conductor">{t("conductor")}</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>

            {/* Driver-only fields */}
            {userForm.role === "driver" && (
              <>
                {/* License Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("licenseNumber")} *
                  </label>
                  <input
                    type="text"
                    value={userForm.license_number}
                    onChange={(e) => {
                      setUserForm({ ...userForm, license_number: e.target.value  });
                      if (errors.license_number) {
                        setErrors({ ...errors, license_number: "" });
                      }
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder={t("licenseNumber")}
                    required={userForm.role === "driver"}
                  />
                  {errors.license_number && (
                    <p className="text-red-500 text-sm">{errors.license_number}</p>
                  )}
                </div>

                {/* License Expiry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("licenseExpiry")} *
                  </label>
                  <input
                    type="date"
                    value={userForm.license_expiry}
                    onChange={(e) => {
                      setUserForm({ ...userForm, license_expiry: e.target.value  });
                      if (errors.license_expiry) {
                        setErrors({ ...errors, license_expiry: "" });
                      }
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required={userForm.role === "driver"}
                  />
                  {errors.license_expiry && (
                    <p className="text-red-500 text-sm">{errors.license_expiry}</p>
                  )}
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setUserForm({
                    name: "",
                    phone: "",
                    license_number: "",
                    license_expiry: "",
                    experience_years: "",
                    address: "",
                    emergency_contact: "",
                    role: "",
                  });
                  setEditingItem(null);
                  setErrors({});   
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {t("cancel")}
              </button>
              <button
                onClick={editingItem ? handleUpdateUser : handleAddUser}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
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
      case "add-user":
        return t("addNewUser");
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
          users={users}
          handleEditBus={handleEditBus}
          setBuses={setBuses}
          setUsers={setUsers}
          setRoutes={setRoutes}
          setConductors={setConductors}
          handleDeleteBus={handleDeleteBus}
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
      case "user":
        return <UserManagement
          setModalType={setModalType}
          setShowModal={setShowModal}
          t={t}
          users={users}
          buses={buses}
          setBuses={setBuses}
          setUsers={setUsers}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
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
      case "posMachine":
        return (
          <div className="p-6">

            <PosMachine
              showModalPos={showModalPos}
              setShowModalPos={setShowModalPos}
              t={t}
            />

          </div>
        );
      case "trip":
        return (
          <Trip
            buses={buses}
            routes={routes}
            drivers={drivers}
            conductors={conductors}
            setDrivers={setDrivers}
            setConductors={setConductors}
            t={t}
            showTrip={showTrip}
            setShowTrip={setShowTrip}
            setBuses={setBuses}
            setRoutes={setRoutes}
          />
        );

      case "parcel":
        return (<div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">{t("parcel")}</h3>
            <button
              onClick={() => setShowParcel(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700"
            >
              <Plus className="w-5 h-5" />
              <span>{t("addParcel")}</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <Parcel
              buses={buses}
              setBuses={setBuses}
              setShowParcel={setShowParcel}
              showParcel={showParcel}
            />
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
                          user_id: "",
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
                        setUserForm({
                          name: "",
                          phone: "",
                          license_number: "",
                          license_expiry: "",
                          experience_years: "",
                          address: "",
                          emergency_contact: "",
                          role: "",
                        });
                        setErrors({});
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
          <CustomRoute path='/ticketview' element={<TicketView />} />
          <CustomRoute
            path='/trips/:tripid'
            element={<TicketSystem
              t={t}
              currentPage={currentPage}
              currentLanguage={currentLanguage}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              setCurrentPage={setCurrentPage}
              setCurrentLanguage={setCurrentLanguage}
            />} />

        </Routes>
      </BrowserRouter>

      {showToast && (
        <ToastMessage
          setShowToast={setShowToast}
          toastMessage={toastMessage}
        />
      )
      }

    </>
  );
};

export default BusManagementSoftware;
