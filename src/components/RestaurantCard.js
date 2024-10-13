import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { 
    name, 
    cloudinaryImageId, 
    cuisines, 
    costForTwo, 
    areaName, 
    sla,
    avgRatingString 
  } = props?.resData?.info;

  return (
    <div className="restro-container">
      <div className="restro-image-container">
        <img src={CDN_URL + cloudinaryImageId} alt={name} className="restro-image"/>
        <div className="restro-overlay">ITEMS AT {costForTwo}</div>
      </div>
      <div className="restro-content">
        <h2 className="restro-name">{name}</h2>
        <div className="restro-rating">
          <span className="star">★</span> 
          <h4>{avgRatingString+ " • " + sla?.slaString}</h4>
        </div>
        <h4 className="restro-cuisines">{cuisines?.join(", ")}</h4>
        <p className="restro-location">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
