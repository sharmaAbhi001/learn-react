import { useState } from "react";
import ItemList from "./ItemList";


const ResturentCategories = ({data,showItem,setShowIndex})=>{


const [show2,setShow2] = useState(true);



 const handelClick = ()=>{
   if(showItem===true)
   {
      setShow2(!show2); 
   }
  if(showItem===false)
  {
      setShow2(true);
      setShowIndex();
   }
  
 }
 

    return(
       <div>
        <div className="w-6/12 mx-auto my-6  shadow-lg bg-gray-50 p-2 ">
           <div className="flex justify-between font-bold text-xl cursor-pointer" onClick={handelClick} >
           <span>{data.title} ({data.itemCards.length})</span>
           <span>^</span>
           </div>
           {show2&&showItem && <ItemList items={data.itemCards}/>}
        </div>
       </div>
    )
}

export default ResturentCategories;