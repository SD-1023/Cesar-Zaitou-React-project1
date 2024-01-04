import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WelcomeBanner from "./WelcomeBanner";
import { useFavourites } from "../contexts/FavouritesContext";
import { FavouritesContainer } from "../pages/Favourites/FavouritesContainer";

export const Layout = function (){
    const {isFavOpen} = useFavourites()
    return(
        <>
       
        <Header/>
        <WelcomeBanner/>

        <Outlet/>
        {
            isFavOpen &&(
             <FavouritesContainer/>
            )
        }


        <Footer/>
        </>
    )
}