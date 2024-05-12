import { useDispatch, useSelector } from "react-redux";
import SingleMenu from "./SingleMenu";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const checkoutHandler = async () => {
    const amount = 169;
    const { data: { key } } = await axios.get("http://www.localhost:5000/api/getkey")

    console.log(key);
    const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
        amount
    })
    console.log(order);

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:5000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    console.log(window);
    const razor = new Razorpay(options);
        razor.open();
}
  
  return (
    <>
      <div className="text-center m-6 p-2">
        <div className="flex">
          <h1 className="text-2xl font-bold m-auto">Cart</h1>
          <button
            onClick={handleClearCart}
            className="m-2 p-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 rounded-lg text-white"
          >
            Clear
          </button>
        </div>
        {cartItems.length === 0 && (
          <Link to="/">
            <h1 className="font-serif mt-4 p-5 text-2xl">
              Add Items to the Cart
            </h1>
          </Link>
        )}
        <div className="w-2/4 m-auto">
          <SingleMenu itemCards={cartItems} />
        </div>
        <button onClick={checkoutHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
