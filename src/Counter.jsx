import { useState } from "react"

export default function Counter(){
    // amra jokhon application create korbo kono kisu change hoite pare user koijon like karse,
    // koijon comment karse, ba kono product ar dam, temparature, dollar ar dam airokom onek kisu 
    // change hoite pare, airokom akta jinis k bole useState ja naki react ar hook ba function, useState 
    // likhle upore import hoe jabe useState
    
    const [count, setCount] = useState(0);

    //handleAdd ar moddhe count ar value joto cilo tarchea 1 barie dibo, imean add a click karlei 1 kore barbe
     const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)  
     }

     const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
     }


    return(
        <div style={{border:'2px solid purple'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add </button>
            <button onClick={handleReduce}>Reduce </button>

        </div>



    )

} 