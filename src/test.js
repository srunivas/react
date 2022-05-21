import {useEffect, useState } from 'react';
import './test.css';

function Test()
{
    var [cart,setCart] = useState(()=>{return []});
    var [state,setState] = useState(()=>{
        return [
            { 'name': 'Tomato', 'price': '20', 'Add': false },
            { 'name': 'Potato', 'price': '40', 'Add': false }
        ];
    })

    useEffect(()=>{
        console.log("Changed");
    },[state])

    return (
        <>
        <section className="Items">
         
        <div>
                    {state.map((e,index) => {
                        console.log("index = ",index);
                        return <div className="Card">
                            <p>{e.name}</p>
                            <p>Price:{e.price}</p>
                            {e.Add ?
                                <button disabled="none">Done</button> :
                                <button onClick={()=>{

                                   

                                   setCart((prev)=>{
                                       console.log("prev");
                                       return [...prev,e];
                                   })
                                    setState((prev)=>{
                                        prev[index].Add=true;
                                       return [...prev];
                                    })                    
                                }}>Add +</button>}
                        </div>
                    })}
        </div>
     <a href="/cart" onClick={()=>{
         window.localStorage.setItem('cart',JSON.stringify(state));
         window.localStorage.setItem('cart2', JSON.stringify(cart));
     }}>Go To Cart</a>
        </section>
        </>
    );
     
}
export default Test;