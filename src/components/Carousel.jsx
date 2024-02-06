import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [count, setCount] = useState(0)

    const clickLeft = ()=>{
        if(count>0 && count<=3){
            setCount(prevCount => prevCount-1)
        }
    }

    const clickRight = ()=>{
        if(count<2 && count>=0){
            setCount(prevCount => prevCount+1)
        }
    }

    return(
        <div>
            <div className="Main" style={{backgroundImage: `url(${images[count].img})`}}>
                <div className="left" onClick={clickLeft}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="content">
                    <h1 className="text">{images[count].title}</h1>
                    <p className="text">{images[count].subtitle}</p>
                </div>
                <div className="right" onClick={clickRight}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;