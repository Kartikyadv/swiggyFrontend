import { CDN_URL } from "../utils/constant";
import { FaStar } from "react-icons/fa6";


const RestaurantCard = (props) => {
    const {
        name,
        cuisines,
        costForTwo,
        sla,
        cloudinaryImageId,
        avgRating,
        id
    } = props.resData?.info;
    return (
        <>
        <div className="m-4 p-4 w-[300] md:w-[280] rounded-lg h-[400px] hover:bg-gray-200">
            <img className="rounded-2xl h-[50%] w-[100%]" src={CDN_URL+cloudinaryImageId} alt="logo"/>
            <div className="m-2 mt-8">
            <h3 className="text-gray-600 font-bold text-lg">{name.slice(0,22)}..</h3>
            <h4 className="text-gray-600 font-bold text-lg flex flex-row"><FaStar className="rounded-lg p-1 mt-1 h-17 bg-green-600 text-white mr-1"/> {avgRating} • {sla?.slaString}</h4>
            <h4 className="font-normal">{costForTwo}</h4>
            <h4 className="font-normal">{cuisines.join(", ").slice(0,30)}...</h4>
            </div>
        </div>
        </>
    );
}

export const isPromotedRestaurant = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 bg-slate-300 text-white rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;