import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

import data from './data.js'



export default function MyPage(){
    const cards=data.map(thing=>{     //Parse the data inside the data.js file to an array with jsx objects
        return (<Card
            key={thing.id}
            thing={thing}/>)//We pass the jsx object an object with the data 
    })

    return(
        <div>
            <Navbar/>
            <section className='card-list'>
                {cards}
            </section>
        </div>
    )
}