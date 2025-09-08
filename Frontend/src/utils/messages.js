// Messages/Localization System
export const messages = {
  hi: {
    // Navigation & Headers
    appName: "Bus Manager Pro",
    dashboard: "डैशबोर्ड",
    busManagement: "बस मैनेजमेंट",
    routeManagement: "रूट मैनेजमेंट",
    driverManagement: "ड्राइवर मैनेजमेंट",
    conductorManagement: "कंडक्टर मैनेजमेंट",
    liveTracking: "लाइव ट्रैकिंग",
    ticketing: "टिकटिंग सिस्टम",
    reports: "रिपोर्ट्स",
    settings: "सेटिंग्स",
    userManagement: "उपयोगकर्ता प्रबंधन",
    user: "उपयोगकर्ता",

    // Dashboard Stats
    todayRevenue: "आज की कुल आय",
    totalPassengers: "कुल यात्री",
    activeBuses: "एक्टिव बसें",
    packages: "पैकेज",
    quickActions: "त्वरित कार्रवाई",
    todayBusStatus: "आज की बस स्थिति",
    recentAlerts: "रीसेंट अलर्ट",

    // Buttons & Actions
    addNewBus: "नई बस जोड़ें",
    addNewRoute: "नया रूट जोड़ें",
    addNewUser: "नया उपयोगकर्ता जोड़ें",
    edit: "संपादित करें",
    delete: "डिलीट करें",
    save: "जमा करें",
    cancel: "रद्द करें",
    close: "बंद करें",

    // Form Labels
    busNumber: "बस नंबर",
    route: "रूट",
    driver: "ड्राइवर",
    conductor: "कंडक्टर",
    status: "स्टेटस",
    name: "नाम",
    phone: "फोन",
    license: "लाइसेंस",
    experience: "अनुभव",
    distance: "दूरी",
    baseFare: "बेस किराया",
    perKmRate: "प्रति किमी दर",
    stops: "स्टॉप्स",
    code: "कोड",

    // Status Messages
    running: "चालू",
    stopped: "रुकी हुई",
    active: "सक्रिय",
    inactive: "निष्क्रिय",
    assigned: "असाइन्ड",
    notAssigned: "असाइन नहीं",

    // Empty States
    noBusFound: "कोई बस नहीं मिली",
    noRouteFound: "कोई रूट नहीं मिला",
    noUserFound: "कोई उपयोगकर्ता नहीं मिला",
    addFirstBus: "अपनी पहली बस जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें",
    addFirstRoute: "अपना पहला रूट जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें",
    addFirstDriver:
      "अपना पहला ड्राइवर जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें",
    addFirstConductor:
      "अपना पहला कंडक्टर जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें",

    // Confirmations & Alerts
    confirmDeleteBus: "क्या आप वाकई इस बस को डिलीट करना चाहते हैं?",
    confirmDeleteRoute: "क्या आप वाकई इस रूट को डिलीट करना चाहते हैं?",
    confirmDeleteUser: "क्या आप वाकई इस उपयोगकर्ता को हटाना चाहते हैं?",
    fillAllFields: "कृपया सभी आवश्यक फील्ड भरें",

    // Table Headers
    assignedBus: "असाइन्ड बस",
    currentLocation: "वर्तमान स्थिति",
    todayIncome: "आज की आय",
    lastUpdate: "लास्ट अपडेट",

    // Placeholders & Examples
    busNumberPlaceholder: "MP 09 AB 1234",
    phoneNumberPlaceholder: "9876543210",
    licenseNumberPlaceholder: "MP1234567890",
    routeNamePlaceholder: "भोपाल - इंदौर",
    routeCodePlaceholder: "BPL-IND",

    // Units
    km: "किमी",
    years: "साल",
    rupees: "₹",

    // User Info
    busOwner: "Bus Owner",

    // Live Tracking
    noTrackingAvailable: "कोई बस ट्रैक करने के लिए उपलब्ध नहीं",
    addBusesFirst: "पहले कुछ बसें जोड़ें",

    // Modal Titles
    addBusTitle: "नई बस जोड़ें",
    editBusTitle: "बस संपादित करें",
    addRouteTitle: "नया रूट जोड़ें",
    editRouteTitle: "रूट संपादित करें",
    addDriverTitle: "नया ड्राइवर जोड़ें",
    addConductorTitle: "नया कंडक्टर जोड़ें",

    // Validation Messages
    requiredField: "यह फील्ड आवश्यक है",
    invalidPhone: "कृपया वैध फोन नंबर दर्ज करें",
    invalidNumber: "कृपया वैध संख्या दर्ज करें",
    licenseNumberRequired: "लाइसेंस नंबर आवश्यक है",
    licenseExpiryRequired: "लाइसेंस समाप्ति तिथि आवश्यक है",
    nameRequired: "नाम आवश्यक है",
    phoneRequired: "फ़ोन आवश्यक है",
    phoneMustBe10Digits: "फ़ोन नंबर 10 अंकों का होना चाहिए",
    experienceYearRequired: "अनुभव का वर्ष आवश्यक है",
    emergencyContactRequired: "आपातकालीन संपर्क आवश्यक है",
    addressRequired: "पता आवश्यक है",

    // Additional Form Labels
    selectRoute: "रूट चुनें",
    selectDriver: "ड्राइवर चुनें",
    selectConductor: "कंडक्टर चुनें",
    addStop: "स्टॉप जोड़ें",
    removeStop: "स्टॉप हटाएं",
    selectRole: "भूमिका चुनें",

    // Success Messages
    busAdded: "बस सफलतापूर्वक जोड़ी गई",
    busUpdated: "बस सफलतापूर्वक अपडेट की गई",
    routeAdded: "रूट सफलतापूर्वक जोड़ा गया",
    routeUpdated: "रूट सफलतापूर्वक अपडेट किया गया",
    userAdded: "उपयोगकर्ता सफलतापूर्वक जोड़ा गया",
    role: "भूमिका",

    // Dashboard Graph Labels
    ticketsIssued: "जारी किए गए टिकट",
    tripsCompleted: "पूर्ण यात्राएँ",
    revenueCollected: "संग्रहित राजस्व",
    occupancyRate: "आक्यूपेंसी दर",
    Daily: "दैनिक",
    Weekly: "साप्ताहिक",
    Monthly: "मासिक",
    Yearly: "वार्षिक",
    occupancy: "आकुलन",
    revenue: "राजस्व",
    trips: "यात्राएँ",
    tickets: "टिकट",

    // Header
    buses: "बसें",
    routes: "मार्ग",
    drivers: "चालक",
    conductors: "कंडक्टर",
    livetracking: "लाइव ट्रैकिंग",

    // Trip
    trip: "यात्रा",
    addTrip: "यात्रा जोड़ें",

    // posMachine
    posMachine: "पीओएस मशीन",
    addPOSMachine: "पीओएस मशीन जोड़ें",
    serialNo: "सीरियल नंबर",

    // parcel
    parcel: "पार्सल",

    // bus management
    insuranceExpiry: "बीमा समाप्ति",
    capacity: "क्षमता",
    permitExpiry: "अनुमति समाप्ति",
    lastMaintenance: "अंतिम रखरखाव",
    ticketView: "टिकट दृश्य",
    actions: "क्रियाएँ",
    searchPlaceholder: "खोजें...",

    // USER
    emergencyContact: "आपातकालीन संपर्क",
    address: "पता",
    experienceYears: "अनुभव (वर्षों में)",
    licenseExpiry: "लाइसेंस समाप्ति",
    licenseNumber: "लाइसेंस नंबर",

    // Trip
    conductorName: "कंडक्टर का नाम",
    driverName: "ड्राइवर का नाम",
    startTime: "प्रारंभ समय",
    endTime: "समाप्ति समय",
    bus: "बस",
    // Ticket
    createTicket: "टिकट बनाएं",
    fromStop: "प्रस्थान स्थान",
    fromStopPlaceholder: "प्रस्थान स्थान दर्ज करें",
    fromStopRequired: "प्रस्थान स्थान आवश्यक है",
    toStop: "गंतव्य स्थान",
    toStopPlaceholder: "गंतव्य स्थान दर्ज करें",
    toStopRequired: "गंतव्य स्थान आवश्यक है",
    fare: "किराया",
    fareRequired: "किराया आवश्यक है",
    journeyDate: "यात्रा की तिथि",
    journeyDateRequired: "यात्रा की तिथि आवश्यक है",
    paymentMode: "भुगतान का तरीका",
    cash: "नकद",
    busNumberRequired: "बस नंबर आवश्यक है",
    selectBusNumber: "बस नंबर चुनें",
    posNumber: "POS नंबर",
    posRequired: "POS आवश्यक है",
    selectPosNumber: "POS नंबर चुनें",
    seatNumber: "सीट नंबर",
    seatNoRequired: "सीट नंबर आवश्यक है",
    selectSeatNumber: "सीट नंबर चुनें",
    booked: "बुक किया गया",
    bookTicket: "टिकट बुक करें",
    ticketAddedSuccessfully: "टिकट सफलतापूर्वक जोड़ा गया",
    ticketNumber: "टिकट नंबर",
    noDataFound: "कोई डेटा नहीं मिला"
  },


  en: {
    // Navigation & Headers
    appName: "Bus Manager Pro",
    dashboard: "Dashboard",
    busManagement: "Bus Management",
    routeManagement: "Route Management",
    userManagement: "User Management",
    user: "User",
    liveTracking: "Live Tracking",
    ticketing: "Ticketing System",
    reports: "Reports",
    settings: "Settings",

    // Dashboard Stats
    todayRevenue: "Today's Total Revenue",
    totalPassengers: "Total Passengers",
    activeBuses: "Active Buses",
    packages: "Packages",
    quickActions: "Quick Actions",
    todayBusStatus: "Today's Bus Status",
    recentAlerts: "Recent Alerts",

    // Buttons & Actions
    addNewBus: "Add New Bus",
    addNewRoute: "Add New Route",
    addNewUser: "Add New User",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    cancel: "Cancel",
    close: "Close",

    // Form Labels
    route: "Route",
    driver: "Driver",
    conductor: "Conductor",
    status: "Status",
    name: "Name",
    phone: "Phone",
    license: "License",
    experience: "Experience",
    distance: "Distance",
    baseFare: "Base Fare",
    perKmRate: "Per KM Rate",
    stops: "Stops",
    code: "Code",

    // Status Messages
    running: "Running",
    stopped: "Stopped",
    active: "Active",
    inactive: "Inactive",
    assigned: "Assigned",
    notAssigned: "Not Assigned",

    // Empty States
    noBusFound: "No Bus Found",
    noRouteFound: "No Route Found",
    noUserFound: "No User Found",
    addFirstBus: "Click the button below to add your first bus",
    addFirstRoute: "Click the button below to add your first route",
    addFirstDriver: "Click the button below to add your first driver",
    addFirstConductor: "Click the button below to add your first conductor",

    // Confirmations & Alerts
    confirmDeleteBus: "Are you sure you want to delete this bus?",
    confirmDeleteRoute: "Are you sure you want to delete this route?",
    confirmDeleteUser: "Are you sure you want to delete this user?",
    fillAllFields: "Please fill all required fields",

    // Table Headers
    assignedBus: "Assigned Bus",
    currentLocation: "Current Location",
    todayIncome: "Today's Income",
    lastUpdate: "Last Update",

    // Placeholders & Examples
    busNumberPlaceholder: "MP 09 AB 1234",
    phoneNumberPlaceholder: "9876543210",
    licenseNumberPlaceholder: "MP1234567890",
    routeNamePlaceholder: "Bhopal - Indore",
    routeCodePlaceholder: "BPL-IND",

    // Units
    km: "km",
    years: "years",
    rupees: "₹",

    // User Info
    busOwner: "Bus Owner",

    // Live Tracking
    noTrackingAvailable: "No buses available for tracking",
    addBusesFirst: "Add some buses first",

    // Modal Titles
    addBusTitle: "Add New Bus",
    editBusTitle: "Edit Bus",
    addRouteTitle: "Add New Route",
    editRouteTitle: "Edit Route",


    // Validation Messages
    requiredField: "This field is required",
    invalidPhone: "Please enter a valid phone number",
    invalidNumber: "Please enter a valid number",
    licenseNumberRequired: "License Number is required",
    licenseExpiryRequired: "License Expiry date is required",
    nameRequired: "Name is required",
    phoneRequired: "Phone is required",
    phoneMustBe10Digits: "Phone Number must be 10 Digits",
    experienceYearRequired: "Experience Year is required",
    emergencyContactRequired: "Emergency Contact is required",
    addressRequired: "Address is required",

    // Additional Form Labels
    selectRoute: "Select Route",
    selectDriver: "Select Driver",
    selectRole: "Select Role",
    selectConductor: "Select Conductor",
    addStop: "Add Stop",
    removeStop: "Remove Stop",
    Emergency_Contact: "Emergency Contact",
    experience_years: "Experience Years",

    // Success Messages
    busAdded: "Bus added successfully",
    busUpdated: "Bus updated successfully",
    routeAdded: "Route added successfully",
    routeUpdated: "Route updated successfully",
    userAdded: "User added successfully",
    role: "Role",
    licenseNumber: "License number",
    licenseExpiry: "License Expiry",


    // Dashboard Graph Labels
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
    Yearly: "Yearly",
    ticketsIssued: "Tickets Booked",
    tripsCompleted: "Trips Completed",
    revenueCollected: "Revenue Collected",
    occupancyRate: "Occupancy Rate",
    occupancy: "Occupancy",
    revenue: "Revenue",
    trips: "Trips",
    tickets: "Tickets",

    // Header
    buses: "Buses",
    routes: "Routes",
    drivers: "Drivers",
    conductors: "Conductors",
    livetracking: "Live Tracking",

    // Trip
    trip: "Trip",
    addTrip: "Add Trip",

    // posMachine
    posMachine: "POS Machine",
    addPOSMachine: "Add POS Machine",
    serialNo: "Serial No",

    // parcel
    parcel: "Parcel",

    // bus management
    insuranceExpiry: "Insurance Expiry",
    capacity: "Capacity",
    permitExpiry: "Permit Expiry",
    lastMaintenance: "Last Maintenance",
    ticketView: "Ticket View",
    actions: "Actions",
    searchPlaceholder: "Search...",

    //  user
    emergencyContact: "Emergency Contact",
    address: "Address",
    experienceYears: "Experience Years",

    // Trip
    conductorName: "Conductor Name",
    driverName: "Driver Name",
    startTime: "Start Time",
    endTime: "End Time",
    bus: "Bus",
    // Ticket
    createTicket: "Create Ticket",
    fromStop: "From Stop",
    fromStopPlaceholder: "Enter starting stop",
    fromStopRequired: "From Stop is required",
    toStop: "To Stop",
    toStopPlaceholder: "Enter destination stop",
    toStopRequired: "To Stop is required",
    fare: "Fare",
    fareRequired: "Fare is required",
    journeyDate: "Journey Date",
    journeyDateRequired: "Journey Date is required",
    paymentMode: "Payment Mode",
    cash: "Cash",
    busNumber: "Bus Number",
    busNumberRequired: "Bus Number is required",
    selectBusNumber: "Select Bus Number",
    posNumber: "POS Number",
    posRequired: "POS is required",
    selectPosNumber: "Select POS Number",
    seatNumber: "Seat Number",
    seatNoRequired: "Seat No is required",
    selectSeatNumber: "Select Seat Number",
    booked: "Booked",
    bookTicket: "Book Ticket",
    ticketAddedSuccessfully: "Ticket Added Successfully",
    ticketNumber: "Ticket Number",
    noDataFound: "No Data Found"

  },

};
