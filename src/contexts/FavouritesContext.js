import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/cLocalStorage";

const FavouritesContext= createContext(null);


export const FavouritesProvider= ({children})=>{
    // const FAV_KEY = 'fav_items';
    // const [getItem,setItem]=useLocalStorage();
    const [favItem, setFavItem]=useState([]);
    const [isFavOpen, setIsFavOpen]= useState(false);

    // useEffect(()=>{
    //     return setItem(FAV_KEY,favItem);
    // },[favItem])
    
    const isFavItem= (itemId)=>{
        return favItem.findIndex(item =>item.id === parseInt(itemId))>-1;
    
    
    };
    const addToFavItem = ({id,topic, image, rating})=>{
        setFavItem((prev)=>[...prev,{id,topic, image , rating}])
        if( !isFavOpen){
            toggleIsFavOpen();
        }
    
    };
    const removeFromFavItem = (id)=>{
        setFavItem((prev)=> prev.filter(item=>item.id !==id))
        if(isFavOpen){
            toggleIsFavOpen();
        }
    
    };
    const toggleIsFavOpen=()=>{
      setIsFavOpen((prev)=>!prev);

    }

    return(

        <FavouritesContext.Provider value={{
            favItem,
            isFavOpen,
            toggleIsFavOpen,
            isFavItem,
            addToFavItem,
            removeFromFavItem,
          }} >{children}</FavouritesContext.Provider>
    );

}


export const useFavourites =()=>{
    return useContext(FavouritesContext);
}