import RestaurantCard, { isPromotedRestaurant } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurant = isPromotedRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4894154&lng=77.01186960000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apiData.json();
    setresList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like your internet connection is weak</h1>;
  return (
    <div className="mx-0 md:mx-6">
      <div className="flex w-[100%]">
        <div className="m-0 md:m-4 rounded-lg">
          <button
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            onClick={() => {
              const filterResListTemp = filteredResList.filter(
                (info) => info.info.avgRating > 4.2
              );
              setfilteredResList(filterResListTemp);
            }}
          >
            <svg
              className="w-6 h-6 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            Top Rated
          </button>
        </div>

        <div className="m-0 md:m-4 border-none md:border md:border-solid md:border-blue-500 rounded-lg flex">
          <input
            className="flex-1 py-4 px-4 border-none rounded-l focus:outline-none"
            onChange={(e) => {
              setSearchText(e.target.value);
              const filterResListTemp = resList.filter((info) =>
                info.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResList(filterResListTemp);
            }}
            value={searchText}
            placeholder="Search here.."
          />
          <button
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-5 px-4 rounded-r focus:outline-none focus:shadow-outline transition duration-300"
            onClick={() => {
              const filterResListTemp = resList.filter((info) =>
                info.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResList(filterResListTemp);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {filteredResList === undefined ||
      filteredResList.length === 0 ||
      filteredResList === null ? (
        <Shimmer />
      ) : (
        <div className="mx-auto w-[95%]">
          <div className="flex flex-wrap">
            {filteredResList.map((restaurant) => (
              <Link
                to={`restaurant-detail/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                {restaurant.info.availability.opened ? (
                  <PromotedRestaurant resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
