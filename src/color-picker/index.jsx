import React, { useState } from "react";
import "./style.css"

function randomColor(length){
    return Math.floor(Math.random()*length)
}
export default function ColorConverter(){
    const [color, setColor] = useState("#000000")

    function createRandomColor(){
        const hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let startSymbol = "#"
        for(let i=0; i<6; i++){
            startSymbol += hexColor[randomColor(hexColor.length)]
        }
        console.log(startSymbol)
        setColor(startSymbol)
    }

    function RgbValue(){
        let rgbvalue = color.replace("#","")
        // console.log(Rgbvalue);
        let intValue = parseInt(rgbvalue, 16)
        let r = ((intValue >> 16) & 255)
        let g = ((intValue >> 8) & 255)
        let b = ((intValue) & 255)
        
        return `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div>
            <div className="container">
                <div className="box-1">
                    <div className="color-box" style={{backgroundColor: color}}></div>
                    <button className="btn" onClick={createRandomColor}>Random Color</button>
                </div>
                <div className="box-2">
                    <div className="value-box-1">
                        <h2>Color Hex Value</h2>
                        <span>{color}</span>
                    </div>
                    <div className="value-box-2">
                    <h2>Color Rgb Value</h2>
                    <span>{RgbValue(color)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}