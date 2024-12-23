import { useSelector , useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = ()=>{

    const cartIems =useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

   const handelClearCart = ()=>{
    dispatch(clearCart())
   }

return (
    <div className=" w-5/6 md:w-6/12 text-center mx-auto my-3 p-3 ">
        <h1 className="font-bold ">Cart hu mai </h1>
        <button className="m-3 p-3 bg-black rounded-lg text-white font-bold" 
        onClick={handelClearCart}
        >Clear Cart
        </button>
         {cartIems.length === 0 && <h1>Cart is empty , Bhikhari ho kya </h1>}
        <ItemList items={cartIems}/>
    </div>
)

}


export default Cart;