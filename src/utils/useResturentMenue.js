import { useEffect, useState } from "react";
import { MENUE_API } from "./constenets";

const useResturentMenue = (resId) => {
  const [resMenue, setResMenue] = useState(null);

  useEffect(() => {
    fetchMenue();   
  }, [resId]);

  const fetchMenue = async () => {
    try {
      const url = MENUE_API + resId;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setResMenue(json);
    } catch (error) {
      console.error("Error fetching restaurant data:", error.message);
    }
  };

  return resMenue;
};

export default useResturentMenue;
