import { useState, useEffect } from "react";
import { decodeData } from "../utils/base64";

export const useUrlDataImport = (setSettings) => {
  const [importDialogOpen, setImportDialogOpen] = useState(false);

  const checkDataInUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const encodedData = queryParams.get("configuration");

    if (encodedData) {
      setImportDialogOpen(true);
    }
  };

  const importDataFromUrl = (encodedData) => {
    try {
      const decodedData = decodeData(encodedData);
      setSettings(decodedData);
    } catch (error) {
      console.error("Error decoding configuration:", error);
    }
  };

  const handleImportDialogClose = (importData) => {
    if (importData) {
      const queryParams = new URLSearchParams(window.location.search);
      const encodedData = queryParams.get("configuration");
      if (encodedData) {
        importDataFromUrl(encodedData);
      }
    }

    setImportDialogOpen(false);
    removeDataFromUrl();
  };

  const removeDataFromUrl = () => {
    const url = new URL(window.location);
    url.searchParams.delete("configuration");
    window.history.replaceState({}, "", url);
  };

  useEffect(() => {
    checkDataInUrl();
  }, []);

  return {
    importDialogOpen,
    handleImportDialogClose,
  };
};
