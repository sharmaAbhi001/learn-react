import { useEffect ,useState } from "react";
import Simmmer from "./simmer";
import { useParams } from "react-router";
import { MENUE_API } from "../utils/constenets";

const ResturentInfo=()=>{

    const [resInfo,setResInfo] = useState(null);
     const {resId} = useParams()

     

    useEffect(()=>{
        fetchMenue();
    },[]);

 // fetach menue and other data from api 

 const fetchMenue = async () =>{

    const data = await fetch(MENUE_API + resId);
    const json = await data.json();
    setResInfo(json);
 }




if(resInfo===null)
{
    return <Simmmer/>
}

const {name ,cloudinaryImageId,cuisines,costForTwoMessage } = resInfo.data?.cards[2]?.card?.card?.info;

// const itemCard = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;


return(
    <div className="resturentInfo">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
        <h2>Menue</h2>
        <ul>
        {/* {itemCard.map((item)=>(
            <li key={item.card.info.id}>
                {item.card.info.name} -  Rs {item.card.info.defaultPrice/100}
            </li>
        ))} */}
        </ul>
        
    </div>
);
}


export default ResturentInfo;