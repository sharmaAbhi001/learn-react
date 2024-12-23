import { useEffect, useState } from "react";

const useResturentCard = () => {
  const [resturentCard, setResturentCard] = useState([]);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      const restaurantData =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setResturentCard(restaurantData || []);
    } catch (err) {
      console.error("Failed to fetch restaurant cards:", err);
      setError(err.message); // Update error state
    }
  };

  return { resturentCard, error }; // Return both data and error
};

export default useResturentCard;
