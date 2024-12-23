
import Card from "./Card";
import Simmer from "./Simmer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
 

  const [resCard, setResCard] = useState([]);
  const [filterResCard, setFilterResCard] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null); // Track errors

  const onlineStatus = useOnlineStatus();


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
        json.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (!restaurantData || restaurantData.length === 0) {
        throw new Error("No restaurant data found");
      }

      setResCard(restaurantData);
      setFilterResCard(restaurantData);
    } catch (err) {
      console.error("Failed to fetch restaurant cards:", err);
      setError(err.message); 
    }
  };


  if (!onlineStatus) {
    return <h1>Looks like you're offline. Check your internet connection.</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (resCard.length === 0) {
    return <Simmer />;
  }

  const filterResName = () => {
    const searchFilterResCard = resCard.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterResCard(searchFilterResCard);
  };

  const ratingFilter = () => {
    const filterCard = resCard.filter((res) => res.info.avgRating >= 4);
    setFilterResCard(filterCard);
  };

  return (
    <div className="container">
      <div className="btn flex">
        {/* // filter on the basis of search */}
        <div className="searchFilter m-4 p-4">
          <input
            type="text"
            className="border border-solid rounded-md mr-2 border-black"
            placeholder="search Resturent"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="search-btn px-4 py-1 rounded-x bg-green-500 " onClick={filterResName}>
            Search Resturent
          </button>
          <button className="search-btn ml-4 px-4 py-1 rounded-xl bg-slate-400" onClick={ratingFilter}>
          Top restaurants
        </button>
        </div>
      </div>
      <div className="card-container flex flex-wrap md:ml-[120px] w-full">
        {filterResCard.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturent/" + restaurant.info.id}
          >
            <Card key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
