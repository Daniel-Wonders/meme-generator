import React from "react";

export default function MyHeader(){
    return (<header>
            <img src={process.env.PUBLIC_URL+"/memeGenerator-assets/Trollface.png"}/>
            <h1>Meme Generator</h1>
        </header>)
}