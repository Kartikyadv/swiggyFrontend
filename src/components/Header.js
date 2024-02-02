import { useContext, useState } from "react";
import FoodHub from "../../public/assets/images/FoodHub2.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-row justify-between items-center shadow-lg m-2 p-4">
      <div className="w-28 md:w-32 mb-4 md:mb-0">
        <img className="logo" src={FoodHub} alt="logo"></img>
      </div>
      <div className="flex items-center">
        <button
          className="block md:hidden text-4xl text-blue-500 focus:outline-none"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
            &#9776;
        </button>
        {isSidebarOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 z-10" onClick={() => setSidebarOpen(false)}></div>
        )}

        <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${isSidebarOpen ? 'md:hidden absolute top-0 left-0 w-[60%] pt-4 pl-4 h-full bg-white z-20' : 'hidden md:block md:flex md:flex-row'}`}>
          <li className="text-xl">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="text-xl"><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
          <li className="text-xl"><Link to="/about" className="text-blue-500 hover:text-blue-700">About Us</Link></li>
          <li className="text-xl"><Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link></li>
          <li className="text-xl"><Link to="/cart" className="text-blue-500 hover:text-blue-700">Cart ({cart.length})</Link></li>
          <Link to={
              loginStatus === "Login"
                ? "/login"
                : "/"
            }
            >
          <button
            className=" bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            onClick={() => {
              loginStatus === "Login"
                ? setLoginStatus("Logout")
                : setLoginStatus("Login");
            }}
          >
            {loginStatus}
          </button>
          </Link>
          <li className="text-xl">Hi, {data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
