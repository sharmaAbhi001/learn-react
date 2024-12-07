import { useEffect, useState } from "react";
import { MENUE_API } from "./constenets";

const useResturentMenue = (resId) => {
  const [resMenue, setResMenue] = useState(null);

  useEffect(() => {
    fetchMenue();   
  }, [resId]);

  const fetchMenue = async () => {
    try {
      const data = await fetch(MENUE_API + resId);
      const json = await data.json();
      setResMenue(json);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  return resMenue;
};

export default useResturentMenue;
