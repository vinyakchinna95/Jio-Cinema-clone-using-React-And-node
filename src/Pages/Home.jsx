import React from "react";
import Header from "../Components/Header/Header";
import Tags from "../components/tags/Tags";
import Slideshow from "../components/slideshow/Slideshow";
import Channel from "../components/channels/Channels";
import Spotlight from "../components/spotlight/Spotlight";
import Featured from "../components/featured/Featured";
import Shows from "../components/Shows/Shows";
import Description from "../components/Description/Description";


const Home =() =>{
    return(
        <>
        <Header />
        <Tags />
        <Slideshow /> 
        <Channel />
        <Spotlight />
        <Featured />
        <Shows />
        <Description />
        </>
    )
}
export default Home;