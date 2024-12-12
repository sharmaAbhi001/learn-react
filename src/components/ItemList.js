import { useState } from "react";
import { CDN_URL } from "../utils/constenets";




const ItemList = (props) =>{

   const {items} = props;


    return(
        <div>
            {items.map((item)=>(  
               
               <div key={item.card?.info?.id}  className=" text-left flex justify-between border-b-2 m-2 p-2">
                 <div className="w-9/12">
                <div className="font-bold">
                    <span>{item.card?.info?.name } -</span>
                    <span>₹{item.card?.info?.defaultPrice/100 || item.card?.info?.price/100}</span>
                    </div>
                    <p>{item.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                <button className="mt-[6.5rem] bg-white text-green-500 ml-[1.5rem] px-4 py-1 rounded-lg font-bold drop-shadow-md ">add+</button>
                </div>
                <img className=" w-[120px] h-[120px] rounded-lg border-black " src={CDN_URL+item.card?.info?.imageId}></img>
                </div>
               </div>
            ))}
        </div>
    )
}

export default ItemList;