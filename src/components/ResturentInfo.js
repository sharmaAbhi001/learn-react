import Simmmer from "./simmer";
import { useParams } from "react-router";
import useResturentMenue from "../utils/useResturentMenue";
import ResturentCategories from "./ResturentCategories";

const ResturentInfo = () => {
  const { resId } = useParams();

  const resInfo = useResturentMenue(resId);

  if (resInfo === null) {
    return <Simmmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;

  
      const categories = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

      // console.log(categories);
  
      
      

  return (
    <div className="text-center my-6">
      <h1 className="my-2 font-bold text-2xl ">{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwoMessage}
      </p>
    {/* {
      categories.map((category)=> (
         <ResturentCategories data={category?.card?.card} />
      ))
      } */}

{
categories.map((category) => (
   <ResturentCategories key={category?.card?.card?.title} data={category?.card?.card} />
))
}

     
  
    </div>
  );
};

export default ResturentInfo;
