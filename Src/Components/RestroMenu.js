import ShimmarComponent from "./ShimmarComponent";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";

const RestroMenu = () => {
  const { resId } = useParams();

  const restroInfo = useRestroMenu(resId);

  if (restroInfo === null) return <ShimmarComponent />;

  const { name, cuisines, avgRating, costForTwoMessage, areaName } =
    restroInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div className="restro-Menu">
      <h1>{name}</h1>
      <h4>{cuisines + " "}</h4>
      <h3>
        {avgRating + " " + "Stars"} / {costForTwoMessage}
      </h3>
      <h4>{areaName}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items, id) => (
          <li key={id}>
            {items.card.info.name} - ₹
            {items.card.info.price / 100 || toString()}/-
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default RestroMenu;
