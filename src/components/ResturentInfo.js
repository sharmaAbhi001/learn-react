import { useState } from "react";
import { useParams } from "react-router";
import Simmer from "./Simmer";
import useResturentMenue from "../utils/useResturentMenue";
import ResturentCategories from "./ResturentCategories";

const ResturentInfo = () => {
  const { resId } = useParams();

  const resInfo = useResturentMenue(resId);
  const [showIndex,setShowIndex] = useState(0);


  if (resInfo === null) {
    return <Simmer />;
  }

  

  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;

    const categories =
    resInfo?.data?.cards?.find(
      (card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    


  return (
    <div className="text-center my-6">
      <h1 className="my-2 font-bold text-2xl ">{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwoMessage}
      </p>
      
      {categories.map((category,index) => (
        <ResturentCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={showIndex===index?true:false}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturentInfo;
