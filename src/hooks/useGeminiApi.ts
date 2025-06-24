import { useState } from "react";
import { geminiApi } from "../services/geminiService";
import { toast } from "sonner";
import config from "../config/api";

export function useGeminiApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Function to analyze an image using Gemini API
  const analyzeImage = async (file: File, options?: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log("Starting file analysis with Gemini API...");
      console.log("API URL:", config.GEMINI_API_URL);
      console.log("File details:", { name: file.name, size: file.size, type: file.type });
      
      toast.info("Processing with Gemini AI, this may take up to 2 minutes for large files...");
      
      const result = await geminiApi.analyzeImage(file, options);
      
      console.log("Analysis completed successfully:", result);
      setIsLoading(false);
      return result;
    } catch (err) {
      console.error("Analysis failed:", err);
      
      let errorMessage = "Unknown error occurred";
      
      if (err instanceof Error) {
        errorMessage = err.message;
        
        // Provide more specific error messages
        if (errorMessage.includes('timeout')) {
          errorMessage = "The request took too long to process. Please try with a smaller file or try again later.";
        } else if (errorMessage.includes('Network')) {
          errorMessage = `Cannot connect to the API server at ${config.GEMINI_API_URL}. Please check if the server is running.`;
        } else if (errorMessage.includes('404')) {
          errorMessage = "API endpoint not found. Please check the API configuration.";
        } else if (errorMessage.includes('500')) {
          errorMessage = "Server error occurred. Please try again later.";
        }
      }
      
      const error = err instanceof Error ? err : new Error(errorMessage);
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  // Function to extract data from an image
  const extractDataFromImage = async (file: File) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.extractDataFromImage(file);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };

  // Function to fetch analysis results
  const getAnalysisResults = async (analysisId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.getAnalysisResults(analysisId);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };

  // Function to process multiple files
  const processFiles = async (files: File[]) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.processFiles(files);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };

  // Function to create database
  const createDatabase = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.createDatabase();
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };

  // Function to insert data into PostgreSQL
  const insertDataIntoPostgres = async (data: any, tableName: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.insertDataIntoPostgres(data, tableName);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };
  
  // Function to get CSV data by ID
  const getCsvData = async (id: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.getCsvData(id);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };
  
  // Function to update CSV data
  const updateCsvData = async (id: string, data: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.updateCsvData(id, data);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };
  
  // Function to get all CSV data
  const getAllCsvData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await geminiApi.getAllCsvData();
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
      setIsLoading(false);
      throw err;
    }
  };

  return {
    isLoading,
    error,
    analyzeImage,
    extractDataFromImage,
    getAnalysisResults,
    processFiles,
    createDatabase,
    insertDataIntoPostgres,
    getCsvData,
    updateCsvData,
    getAllCsvData
  };
}
