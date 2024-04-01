import React, { useState,useEffect } from 'react'
import './GetProducts.css';
function GetProducts() {
    const[products1,setproducts]=useState([]);
       const[searchprod,setsearchprod]=useState();
    async function Products(){
        let data = await fetch("https://fakestoreapi.com/products");
        let productlist = await data.json();
        // console.log(productlist);
        setproducts(productlist);  
    }
    useEffect(()=>{
      Products();
    },[])
     const srchprod = products1.filter((data1)=>{
          return (searchprod === data1.category);
      })
   
  return (
    <div>
        <div>
        <input className='search' onChange={(e)=>{setsearchprod(e.target.value)}} type='text' placeholder='🔎Search the Item you want.'/>
      </div>
      {
         products1.map((e)=>
        <>
           <div className='productslst'>
                    <div className='product_card'>
                            <img src={e.image} alt="productimage"/>
                              <div className='proddesc'>
                                    <h2>{e.category}</h2>
                                    <h4>{e.title}</h4>
                                    <h3>Price:&nbsp;&nbsp;{e.price}$</h3>
                                    <h3>Rate:&nbsp;&nbsp;{e.rating.rate}/5</h3>
                                    <h3>Count:&nbsp;&nbsp;{e.rating.count}</h3>
                              </div>
                    </div>
           </div>
        </>
         )
      }
         <h1>Search products are...</h1>
      {
        srchprod.map((e1)=>
        <>
            <div className='productslst'>
                    <div className='product_card'>
                            <img src={e1.image} alt="productimage"/>
                              <div className='proddesc'>
                                    <h4 className='cat'>{e1.category}</h4>
                                    <h4>{e1.title}</h4>
                                    <h3>Price:&nbsp;&nbsp;{e1.price}$</h3>
                                    <h3>Rate:&nbsp;&nbsp;{e1.rating.rate}/5</h3>
                                    <h3>Count:&nbsp;&nbsp;{e1.rating.count}</h3>
                              </div>
                    </div>
           </div>
        </>)
      }
    </div>
  )
}

export default GetProducts
