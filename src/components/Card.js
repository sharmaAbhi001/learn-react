
import { CDN_URL } from "../utils/constenets";

const Card = (props) => {
    const { resData } = props;
  
    const{
      name,
      cuisines,
      costForTwo,
      avgRating,
      cloudinaryImageId
    } = resData.info
    
    return (
      <div className="p-4 w-[300px] h-[300px] rounded-xl transform transition-transform hover:scale-95">
          <img className="object-cover p-[5px] rounded-xl w-full h-[160px] drop-shadow-md transition-shadow group-hover:drop-shadow-lgshadow-lg"
            alt="meghna"
            src={
              CDN_URL +
             cloudinaryImageId
            }
          ></img>
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
          <p>{avgRating}</p>
      </div>
    );
  };


  // higher order function 

  export default Card;