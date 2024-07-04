import React from "react";
import  memesData from '../memesData' 

export default function Meme(){

    //Sets a state object that will have the meme data
    const [memeData, setMemeData]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallMemess(()=>data.data.memes)
                    )
    },[])

    const [allMemess, setallMemess]=React.useState([])//locate every meme in a state variable

    function getImage(){//Sets the meme object a new random image from the API
        
        setMemeData(oldData=>({
            ...oldData,//Import all of the old properties from the meme state object
            randomImage:allMemess[Math.floor((Math.random() * allMemess.length))].url
        }))
    }

    function handleChange(event){
        const {name,value}=event.target
        setMemeData(oldMemeData=>{
            return{
                ...oldMemeData,
                [name]: value
                
            }
        })
    }

    return(<main>
        <div className="form">
            <input 
                onChange={handleChange}
                value={memeData.topText}
                name="topText" 
                className="textInput" 
                placeholder="Top text">    
            </input>

            <input 
                onChange={handleChange}
                value={memeData.bottomText}
                name="bottomText" 
                className="textInput" 
                placeholder="Bottom text">
            </input>

            <input 
                onClick={getImage} 
                className="btn" 
                type="submit" 
                value="Get a new image 🖼️">
            </input>

        </div>
        <div className="meme">
            <img alt="Meme" className="memeImage" src={memeData.randomImage}/>
            <h2 className="topText">{memeData.topText}</h2>
            <h2 className="bottomText">{memeData.bottomText}</h2>
        </div>    
    </main>)
}