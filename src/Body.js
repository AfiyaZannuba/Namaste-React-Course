import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "./utils/mockData";

const Body = () => {



    const [ListofRestaurants, setListofRestaurants] = useState(restaurantList);
    return (
        <div className="body">
            <div className="filter">
                <button onClick={() => {
                    const filteredList = ListofRestaurants.filter((res) => res.data.avgRating > 4);
                    setListofRestaurants(filteredList);
                }} className="filter-btn">Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {ListofRestaurants.map((resturant, index) => (
                    <RestaurantCard key={index} resData={resturant} />
                ))}
            </div>
        </div>

    )
};

export default Body;