
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
      <div className="crad">
        <div className="card-logo">
          <img
            alt="meghna"
            src={
              CDN_URL +
             cloudinaryImageId
            }
          ></img>
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
          <p>{avgRating}</p>
        </div>
      </div>
    );
  };

  export default Card;