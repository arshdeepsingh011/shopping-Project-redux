import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";

const Cart = () => {
  
  const {cart} = useSelector( (state)=> state);
  const [totalprice,setTotalprice] = useState(0);
  const {isDarkTheme} = useSelector((state)=>state.theme)
  useEffect( ()=> {
    setTotalprice( cart.reduce( (acc,currVal) => acc + currVal.price , 0));
  },[cart]);

  return (
  <div className={`min-h-screen ${isDarkTheme ? "bg-black": "bg-white "} `}>
    {
      cart.length < 1? 
      (<div className="h-[80vh] flex flex-col gap-5 justify-center items-center">
        <div className={` font-semibold text-xl ${isDarkTheme ? "text-slate-400":"text-slate-700"}`}>Your Cart is Empty!</div>
        <NavLink to="/"> 
          <button className={`text-white font-semibold px-10 py-3 text-base bg-green-600 border-2 border-green-600 
          hover:bg-white hover:text-green-600 transition-colors duration-300 
          rounded-lg ${isDarkTheme? "hover:bg-green-200":""}`}>SHOP NOW</button>
        </NavLink>
      </div>) : 
      (<div className="flex md:flex-row flex-col gap-6 max-w-6xl mx-auto justify-between">
        <div >
        {
          cart.map( (oneCart,index) => (<CartItem key={oneCart.id} item={oneCart} itemNum={index}/>))
        }
        </div>

          <div className="flex md:w-[70%] w-full flex-col justify-between items-start py-20 mx-5">
          <div className="flex flex-col items-start">
            <p className={` text-xl font-semibold ${isDarkTheme ? "text-green-600":"text-green-800"}`}>Your Cart</p>
            <h2 className={` text-5xl font-semibold ${isDarkTheme ? "text-green-500":"text-green-700"}`}>SUMMARY</h2>
            <p className={` mt-5 text-xl font-semibold ${isDarkTheme ? "text-slate-400":"text-slate-700"}`}>Total Items : {cart.length}</p>
          </div>
          <div className="w-full">
            <p className={` text-xl font-semibold ${isDarkTheme ? "text-slate-300":"text-gray-600"}`}>Total amount 
            <span className={` ${isDarkTheme ? "text-gray-300":"text-gray-900"}`}> : ${totalprice}</span></p>
            <button className={`text-white font-semibold px-10 py-3 text-xl bg-green-700 border-2 border-green-700
             hover:bg-white hover:text-green-700 w-[95%] mx-auto transition-colors duration-300
              rounded-lg mt-4`}>Checkout Now</button>
          </div>
        </div>
      </div>)
    }
  </div>);
};

export default Cart;
