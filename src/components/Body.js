import Card from "./Card";
import Simmmer from "./simmer";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Body = () => {
  const [resCard, setResCard] = useState([]);
  const [filterResCard, setfilterResCard] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurantData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResCard(restaurantData || []);
    setfilterResCard(restaurantData || []);
  };

  // function for filter card on the basis of name
  const filterResName = () => {
    const searchFilterResCard = resCard.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterResCard(searchFilterResCard);
  };
  // function for filter on the basis of rating
  const ratingFilter = () => {
    const filterCard = resCard.filter((res) => res.info.avgRating >= 4);
    setfilterResCard(filterCard);
  };

  if (filterResCard.length === 0) {
    return <Simmmer />;
  }


  return (
    <div className="container">
      <div className="btn">
        {/* // filter on the basis of search */}
        <div className="searchFilter">
          <input
            type="text"
            placeholder="search Resturent"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={filterResName}>
            Search Resturent
          </button>
        </div>

        {/* // filter on the basis of rating  */}
        <button className="filter-btn" onClick={ratingFilter}>
          Top restaurants
        </button>
      </div>
      <div className="card-container">
        {filterResCard.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resturent/"+restaurant.info.id}><Card  key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
