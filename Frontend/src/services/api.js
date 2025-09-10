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

  getRoutes: async (body) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/routes/list`, body, {
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
  getBus: async (body) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/bus/list`, body, {
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

  addUser: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/user/create`, data, {
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
  getUser: async (body) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/user/list`, body, {
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

  updateUser: async (obj) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload
      const { id, ...body } = obj;

      const response = await axios.put(`${API_URL}/user/${id}`, body, {
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

  deleteUser: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/user/${id}`, {
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
      const response = await axios.get(`${API_URL}/dashboard/analytics`, {
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

  getActiveBus: async () => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(
        `${API_URL}/dashboard/active-buses-count`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // optional but recommended
          },
        }
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

  addPos: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/pos/create`, data, {
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

  getPos: async (body) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/pos/list`, body, {
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

  deletePos: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/pos/${id}`, {
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

  createTicket: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(
        `${API_URL}/ticket/create-ticket`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // optional but recommended
          },
        }
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

  ticketDetails: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/ticket/bus/${id}`, {
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

  createTrip: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/trip`, data, {
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

  getTrip: async (body) => {
    try {
      const token = localStorage.getItem("token");

      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/trip/list`, body, {
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

  updateTrip: async (obj, id) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload

      const response = await axios.put(`${API_URL}/trip/${id}`, obj, {
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

  deleteTrip: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.delete(`${API_URL}/trip/${id}`, {
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

  createParcel: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(`${API_URL}/package`, data, {
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

  getTicketSpecificTrip: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(`${API_URL}/ticket/trip/${id}`, {
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

  getBookedTicket: async (id) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.get(
        `${API_URL}/ticket/allocated-seats/trip/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // optional but recommended
          },
        }
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

  getDriver: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/user/drivers/dropdown`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data || error.message };
    }
  },

  getConductor: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/user/conductors/dropdown`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data || error.message };
    }
  },

  updateTripStatus: async (obj, id) => {
    try {
      const token = localStorage.getItem("token");

      // Destructure ID from object, remove it from payload

      const response = await axios.patch(`${API_URL}/trip/${id}/status`, obj, {
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

  createReport: async (data) => {
    try {
      const token = localStorage.getItem("token");
      // Get token from localStorage or wherever you're storing it
      const response = await axios.post(
        `${API_URL}/report/tickets/export`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // optional but recommended
          },
        }
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
};

export default ApiService;
