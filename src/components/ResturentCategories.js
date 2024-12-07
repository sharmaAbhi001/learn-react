import { useState } from "react";
import ItemList from "./ItemList";


const ResturentCategories = (props)=>{

const [showItem,SetShowItem] = useState(false);

  const {data}= props;
//  console.log(data.itemCards);

const handelClick =()=>{
SetShowItem(!showItem)
}
 

    return(
       <div>
        <div className="w-6/12 mx-auto my-6  shadow-lg bg-gray-50 p-2 ">
           <div className="flex justify-between font-bold text-xl cursor-pointer" onClick={handelClick} >
           <span>{data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
           </div>
           {showItem && <ItemList items={data.itemCards}/>}
        </div>
       </div>
    )
}

export default ResturentCategories;