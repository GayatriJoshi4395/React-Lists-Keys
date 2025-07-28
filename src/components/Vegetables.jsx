 import React, { useState } from 'react'
 import vegiesData from '/vegiesData'
 
 const Vegetables = () => {
    const [vegies, setVegies]= useState(['Karela', 'Turai', 'Kaddu'])
    console.log(vegiesData);
   return (
     <div>

        <table>
            <thead>
                <tr>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vegiesData.map((veg, index)=>(
                    
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{veg.name}</td>
                        <td>{veg.price}</td>
                        <td>{veg.quantity > 0 ?(<p>In Stock</p>):(<p>Out of Stock</p>)}</td>
                        <td><button><img src={veg.image}style={{width:'100px', height:'100px'}} alt="img" />BUY NOW</button></td>
                    </tr>
                ))}
            </tbody>
        </table>



       <ul>
        {vegies.map((veg,index)=>(
            <li key={index}>{veg}</li>
        ))}
       </ul>
       
     </div>
   )
 }
 
 export default Vegetables
 