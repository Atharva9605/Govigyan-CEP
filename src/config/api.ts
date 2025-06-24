
// API configuration values
const config = {
  // Base API URL from environment variable
  GEMINI_API_URL: import.meta.env.VITE_API_BASE_URL || "https://govigyan-gemini.onrender.com",
  
  // Increased timeout for API requests in milliseconds (2 minutes)
  API_TIMEOUT: 120000,
  
  // Maximum file size for uploads in bytes (10MB)
  MAX_FILE_SIZE: 10 * 1024 * 1024,
  
  // Google Spreadsheet URL
  SPREADSHEET_URL: "https://docs.google.com/spreadsheets/d/11363SNwRWpG67fu53VAWIJPY9iPCDhYqqiAu8pHFuGo/edit?gid=1632396235",
  
  // Endpoints
  ENDPOINTS: {
    ANALYZE_IMAGE: "/upload-flash",
    GET_ANALYSIS: "/results",
    EXTRACT_DATA: "/upload-flash",
    CREATE_DATABASE: "/create-database",
    INSERT_DATA: "/insert-data",
    CSV_DATA: "/results",
    UPDATE_CSV_DATA: "/update"
  }
};

export default config;
