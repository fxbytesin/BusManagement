import { API_URL } from "../utils/constants";
import axios from "axios";
const ApiService = {
  registrationData: async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/register/request`,
        data
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  registrationVerification: async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/register/verify`,
        data
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  loginData: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login/request`, data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  verifyLogin: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login/verify`, data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  addRoutes: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/routes`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  getRoutes: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/routes`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  deleteRoutes: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/routes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  updateRoutes: async (obj) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload
      const { id, ...body } = obj;

      const response = await axios.put(`${API_URL}/routes/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  addBus: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/bus`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },
  getBus: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/bus`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },
  deleteBus: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/bus/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  updateBus: async (obj) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload
      const { id, ...body } = obj;

      const response = await axios.put(`${API_URL}/bus/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  addDriver: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/drivers`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },
  getDriver: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/drivers`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  updateDriver: async (obj) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload
      const { id, ...body } = obj;

      const response = await axios.put(`${API_URL}/drivers/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  deleteDriver: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/drivers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  addConductor: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/conductor`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  getConductor: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/conductor`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  updateConstructor: async (obj) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload
      const { id, ...body } = obj;

      const response = await axios.put(`${API_URL}/conductor/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  deleteContuctor: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/conductor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  getLiveTracking: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/tracking/live`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  getDashboard: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/dashboard/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // optional but recommended
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },
};

export default ApiService;
