import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import {Navigation} from "../Public/Navigation"
const Home = () =>{
    return(
        <div className="w-full flex flex-col items-center m-auto h-full border-red-50">
         <Header/>
         <Navigation/>
         <div className="w-1100 flex flex-col items-center justify-start">
            <Outlet/>
         </div>
        </div>
    )
}
export default Home;