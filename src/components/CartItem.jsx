import { toast } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };
  const {isDarkTheme} = useSelector((state)=>state.theme)
  return (
    <div className="flex md:flex-row flex-col gap-10 mx-auto border-b-2 md:w-[90%] md:justify-between justify-center items-center border-slate-500 p-10">
      <div className=" w-[27%]">
        <img alt="pic" loading="lazy" src={item.image} className="rounded-xl object-cover" />
      </div>
      {/* code by arshdeepsingh011 github */}
      <div className="flex flex-col md:w-[65%] w-[90%] gap-5">
        <p className={` font-semibold text-xl w-[90%]
         ${isDarkTheme ? "text-slate-300":"text-gray-700"}`}>{item.title}</p>

        <p className={`
        ${isDarkTheme ? "text-gray-300":"text-gray-600 "}`}>
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>

        <div className="flex justify-between items-center pr-5 py-2">
          <p className="text-green-600 text-lg font-bold">${item.price}</p>
          
          <button
            className="text-red-700 bg-red-300 h-8 w-8 rounded-full"
            onClick={removeFromCart}
          >
            <RiDeleteBin6Line size="20px" className="m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
