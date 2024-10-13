import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmerUI/Shimmer";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our ThaliTails Food Website</h1>
        <p>Are you looking Hungry. Then why should not try pizza...</p>
      </div>
    </section>
  );
};
const Body = () => {
  const [restroCards, setRestroCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchRestro, setSearchRestro] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestroCards(restaurantList);
    setFilteredCards(restaurantList);
  };

  const handleFilter = () => {
    const filtered = restroCards.filter((restaurant) =>
      restaurant.info.name
        .toLowerCase()
        .includes(searchRestro.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return restroCards.length === 0 ? (

    <Shimmer />
  ) : (
    <div className="body">
      <HeroSection />
      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            value={searchRestro}
            onChange={(e) => setSearchRestro(e.target.value)}
            placeholder="Search restaurant..."
          />
          <button className="filter-btn" onClick={handleFilter}>
            Filter Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredCards.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/RestraurantMenu/" + restaurant?.info?.id} >       <RestaurantCard
            resData={restaurant}
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
