import useResturentCard from "../utils/useResturentCard";
import Card from "./Card";
import Simmer from "./Simmer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const resCard = useResturentCard();
  const [filterResCard, setfilterResCard] = useState([]);
  const [searchText, setsearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (resCard.length > 0) {
      setfilterResCard(resCard);
    }
  }, [resCard]);

  
  if (!onlineStatus) {
    return <h1>Look Like you are offline Check your internet connection</h1>
  }

  if (filterResCard.length === 0) {
    return (<Simmer />);
  }

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
      <div className="card-container flex flex-wrap ml-[120px] w-full">
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
