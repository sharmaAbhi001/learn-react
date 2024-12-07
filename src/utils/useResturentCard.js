import { useEffect, useState } from "react";
import { LOGO_URL } from "./constenets";

const useResturentCard = () => {
  const [resturentCard, setResturentCard] = useState([]);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurantData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResturentCard(restaurantData || []);
  };
  return resturentCard;
};

export default useResturentCard;
