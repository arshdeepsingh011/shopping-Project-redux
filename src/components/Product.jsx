import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {isDarkTheme} = useSelector((state)=>state.theme)
  const addToCart = () => {
    dispatch(add(post));
    toast.success("added to Cart");
  };
 

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("removed from Cart");
  };
  // className=" flex flex-col gap-y-3 p-3 justify-between items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-150 ease-in hover:scale-105 rounded-xl hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
  return (
    // box shadow mannu arrora
    <div className={`flex flex-col gap-y-3 p-3 justify-between items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-150 ease-in hover:scale-105 rounded-xl hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
     ${isDarkTheme ? "bg-slate-900" : "bg-white"}`}>

      <div className={ `text-gray-700 font-semibold text-lg
       ${ isDarkTheme? " text-slate-300":""} `}
      >{post.title.substring(0,20) + "..."}</div>

      <div className={`text-[11px]  w-40 ${isDarkTheme?"text-gray-400":"text-gray-600"}`} >{post.description.split(" ").slice(0,15).join(" ") + "..."}</div>

      <div className="h-[180px] rounded-xl overflow-hidden">
        <img src={post.image} alt="cloths" loading="lazy" className="w-full h-full"/>
      </div>

      <div className="flex text-lg gap-12 mt-3 justify-between items-center">
        <div className="text-green-600 font-semibold">${post.price}</div>

        <div>
          {/* also cart.some(item)=> item.id === post.id */}
          {cart.some( (p) => p.id === post.id) ? (
            <button
            className={`text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-150 ease-in
            ${isDarkTheme ? "text-white border hover:border-white": ""}`}
             onClick={removeFromCart}>Remove item</button>
          ) : (
            <button 
            className={`text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-150 ease-in
            ${isDarkTheme ? "text-white border hover:border-white": ""}`}
            onClick={addToCart}>Add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
