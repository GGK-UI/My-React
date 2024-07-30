import { CDN_URL } from "../Utils/constants";

const RestroCardComponent = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines = [" "],
    costForTwo,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;
  return (
    <div className="restro-card">
      <img
        className="logo-1"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestroCardComponent;
