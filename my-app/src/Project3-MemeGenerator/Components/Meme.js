
import React, { useRef } from 'react';
import  memesData from '../memesData' 
import html2canvas from 'html2canvas';

export default function Meme(){

    const screenshotTargetRef = useRef(null);
    const takeScreenshot = async () => {
        const element = screenshotTargetRef.current;
        if (element) {
        try {
            const canvas = await html2canvas(element, {
            backgroundColor: null, 
            useCORS: true, 
            });
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'screenshot.png';
            link.click();
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
        }
    };

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

            <input 
                onClick={takeScreenshot} 
                className="btn" 
                type="submit" 
                value="Download Meme ⤵️">
            </input>

        </div>
        <div className="meme" ref={screenshotTargetRef} id="screenshot-target">

            <img alt="Meme" id="memeImage" className="memeImage" src={memeData.randomImage}/>
            <h2 className="topText">{memeData.topText}</h2>
            <h2 className="bottomText">{memeData.bottomText}</h2>
        </div>    
    </main>)
}