import { useEffect, useState } from "react";
import Shimmer from "./shimmerUI/Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestraurantMenu = () => {
    const [restroMenu, setRestroMenu] = useState([])
    const [topPicks, setTopPicks] = useState([])
    const [menuarr, setMenuarr] = useState([])
    const [isVisible, setIsVisible] = useState(true);
   const {resid}=useParams();

    useEffect(() => {
        fetchRestroData();
    }, [])
    const handleToggleSection = () => {
        setIsVisible((prev) => (!prev))
    }

    const fetchRestroData = async () => {
        try {
            // const restro_data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER")
  const restro_data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
        );            const restro_menu_data = await restro_data.json();
            const data = restro_menu_data?.data?.cards[2]?.card?.card?.info
            const topPicksData = restro_menu_data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel
            const cardarr = restro_menu_data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR


            setRestroMenu(data)
            setTopPicks(topPicksData)
            setMenuarr(cardarr)
            console.log(cardarr)
        } catch {
            console.log("Error occured");
        }
    }


    return restroMenu.length === 0 ? <Shimmer /> : (
        <>

            <div className="restro-menu">
                <div className="menu-card">
                    <h2 className="menu-name">{restroMenu.name}</h2>
                    <p className="menu-rating">⭐ {restroMenu.avgRatingString}  ({restroMenu.totalRatingsString})- {restroMenu.costForTwoMessage}</p>
                    <p className="menu-cuisines">{restroMenu.cuisines.join(', ')}</p>
                    <p className="menu-location"><strong>Outlet</strong>- {restroMenu.areaName}, {restroMenu.city}</p>
                    <p className="menu-availability">{restroMenu.availability?.opened ? "Open now" : "Closed"}</p>
                </div>
            </div>
            <div className="top-picks">
                <div className="top-pick-header">
                    <h2>Top Picks</h2>
                </div>
                <div className="top-picks-card">
                    {topPicks.map((pick, index) => (
                        <img
                            key={pick.dish.info.bannerId}
                            src={`${CDN_URL}${pick.dish.info.imageId}`}
                            alt={pick.dish.info.name || "Top Pick"}
                            className="top-pick-image"
                        />
                    ))}
                </div>
            </div>

            <div className="recomonded">
                <div className="top-pick-header" onClick={handleToggleSection}>
                    <h1>{menuarr.cards[2].card.card.title}</h1>
                    <button className="toggle-btn">
                        {isVisible ? 'v' : 'V'}
                    </button>
                </div>
                {isVisible && (

                <div className="recomnded-card">
                    {menuarr.cards[2].card.card.itemCards.map((menu, index) => (
                        <div key={index} className="menu-item-card">
                            <div className="menu-info">
                                <h2>{menu.card.info.name}</h2>
                                <p className="description">{menu.card.info.description}</p>
                                <div className="rating">
                                    <span>{menu.card.info.isVeg ? 'Veg' : 'Non-Veg'}</span>
                                    <span className="rating-score">
                                        {menu.card.info.ratings?.aggregatedRating?.rating} ⭐
                                    </span>
                                    <span className="rating-count">
                                        ({menu.card.info.ratings?.aggregatedRating?.ratingCount} reviews)
                                    </span>
                                </div>
                                <p className="price">
                                    ₹{menu.card.info.defaultPrice / 100 || menu.card.info.price / 100}
                                </p>
                            </div>

                            <div className="menu-image">
                                <img
                                    src={`${CDN_URL}${menu.card.info.imageId}`}
                                    alt={menu.card.info.name}
                                />
                                <button className="add-btn">Add</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            </div>
                
        </>
    );
};
export default RestraurantMenu;
